'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, shaderMaterial, Points } from '@react-three/drei'
import { extend } from '@react-three/fiber'
import * as THREE from 'three'

const CoreOrbMaterial = shaderMaterial(
  {
    time: 0,
    mode: 0,
    color1: new THREE.Color('#00d4ff'),
    color2: new THREE.Color('#7c3aed'),
    color3: new THREE.Color('#ff0080'),
    energy: 1.0,
  },
  `
    varying vec2 vUv;
    varying vec3 vPosition;
    varying vec3 vNormal;
    uniform float time;
    
    void main() {
      vUv = uv;
      vPosition = position;
      vNormal = normal;
      
      vec3 pos = position;
      pos += normal * sin(time * 8.0 + position.x * 10.0) * 0.02;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  `
    uniform float time;
    uniform float mode;
    uniform float energy;
    uniform vec3 color1;
    uniform vec3 color2;
    uniform vec3 color3;
    
    varying vec2 vUv;
    varying vec3 vPosition;
    varying vec3 vNormal;
    
    float hash(vec3 p) {
      p = fract(p * 0.3183099 + 0.1);
      p *= 17.0;
      return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
    }
    
    float noise(vec3 p) {
      vec3 i = floor(p);
      vec3 f = fract(p);
      f = f * f * (3.0 - 2.0 * f);
      
      return mix(
        mix(mix(hash(i + vec3(0,0,0)), hash(i + vec3(1,0,0)), f.x),
            mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
        mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x),
            mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y), f.z);
    }
    
    float fbm(vec3 p) {
      float value = 0.0;
      float amplitude = 0.5;
      for (int i = 0; i < 6; i++) {
        value += amplitude * noise(p);
        p *= 2.0;
        amplitude *= 0.5;
      }
      return value;
    }
    
    void main() {
      vec3 worldPos = vPosition;
      float t = time;
      
      vec3 baseColor = color1;
      float intensity = 1.0;
      float alpha = 0.9;
      
      // Core energy field
      float coreNoise = fbm(worldPos * 3.0 + t * 0.5);
      float energyField = pow(abs(sin(t * 2.0 + coreNoise * 10.0)), 2.0);
      
      if (mode < 0.5) {
        // Static: gentle pulse
        intensity = 0.6 + sin(t * 1.5) * 0.2;
        alpha = 0.7;
      } else if (mode < 1.5) {
        // Listening: rhythmic waves
        float wave = sin(t * 4.0 + vUv.y * 20.0) * 0.5 + 0.5;
        baseColor = mix(color1, color2, wave);
        intensity = 1.0 + sin(t * 6.0) * 0.4;
        energyField *= 1.5;
        alpha = 0.8 + sin(t * 3.0) * 0.1;
      } else {
        // Thinking: chaotic energy
        float chaos = fbm(worldPos * 8.0 + t * 3.0);
        baseColor = mix(mix(color1, color2, chaos), color3, sin(t * 4.0) * 0.5 + 0.5);
        intensity = 1.2 + chaos * 0.8;
        energyField *= 2.0 + sin(t * 10.0) * 0.5;
        alpha = 0.85 + chaos * 0.15;
      }
      
      // Fresnel rim lighting
      float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 3.0);
      
      // Surface perturbations
      float surface = fbm(worldPos * 12.0 + t * 2.0) * 0.3;
      
      vec3 finalColor = baseColor * intensity * (0.7 + energyField * 0.3 + surface);
      finalColor += fresnel * baseColor * 0.8;
      
      gl_FragColor = vec4(finalColor, alpha);
    }
  `
)

const ParticleMaterial = shaderMaterial(
  {
    time: 0,
    mode: 0,
    color: new THREE.Color('#00d4ff'),
  },
  `
    uniform float time;
    uniform float mode;
    attribute float randomness;
    attribute float scale;
    varying float vOpacity;
    
    void main() {
      vec3 pos = position;
      
      float t = time + randomness * 10.0;
      
      if (mode > 0.5 && mode < 1.5) {
        // Listening: orbit around center
        float angle = t * 2.0 + randomness * 6.28;
        float radius = 1.5 + sin(t * 3.0 + randomness * 5.0) * 0.5;
        pos.x += cos(angle) * radius * 0.3;
        pos.y += sin(angle) * radius * 0.3;
        pos.z += sin(t * 4.0 + randomness * 8.0) * 0.2;
      } else if (mode > 1.5) {
        // Thinking: chaotic movement
        pos += vec3(
          sin(t * 5.0 + randomness * 20.0) * 0.8,
          cos(t * 7.0 + randomness * 15.0) * 0.8,
          sin(t * 6.0 + randomness * 25.0) * 0.6
        );
      }
      
      vOpacity = scale * (0.5 + 0.5 * sin(t * 8.0 + randomness * 10.0));
      
      vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
      gl_PointSize = scale * 50.0 * (1.0 / -mvPosition.z);
      gl_Position = projectionMatrix * mvPosition;
    }
  `,
  `
    uniform vec3 color;
    varying float vOpacity;
    
    void main() {
      float dist = distance(gl_PointCoord, vec2(0.5));
      if (dist > 0.5) discard;
      
      float alpha = (1.0 - dist * 2.0) * vOpacity;
      gl_FragColor = vec4(color, alpha);
    }
  `
)

extend({ CoreOrbMaterial, ParticleMaterial })

type Mode = 'static' | 'listening' | 'thinking'

interface AIAnimatedOrbProps {
  mode: Mode
}

function ParticleField({ mode }: { mode: Mode }) {
  const pointsRef = useRef<THREE.Points>(null)
  const materialRef = useRef<THREE.ShaderMaterial>(null)
  
  const [positions, randomness, scales] = useMemo(() => {
    const count = 150 // Fixed count to avoid buffer resizing
    const pos = new Float32Array(count * 3)
    const rand = new Float32Array(count)
    const scale = new Float32Array(count)
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      const radius = Math.random() * 2 + 0.5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI
      
      pos[i3] = radius * Math.sin(phi) * Math.cos(theta)
      pos[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      pos[i3 + 2] = radius * Math.cos(phi)
      
      rand[i] = Math.random()
      scale[i] = Math.random() * 0.5 + 0.2
    }
    
    return [pos, rand, scale]
  }, [])
  
  const modeValue = useMemo(() => {
    switch (mode) {
      case 'static': return 0
      case 'listening': return 1
      case 'thinking': return 2
      default: return 0
    }
  }, [mode])
  
  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = state.clock.elapsedTime
      materialRef.current.uniforms.mode.value = modeValue
    }
  })
  
  return (
    <Points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={positions.length / 3}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-randomness"
          args={[randomness, 1]}
          count={randomness.length}
          itemSize={1}
        />
        <bufferAttribute
          attach="attributes-scale"
          args={[scales, 1]}
          count={scales.length}
          itemSize={1}
        />
      </bufferGeometry>
      {/* @ts-expect-error - shader material type */}
      <particleMaterial
        ref={materialRef}
        transparent
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </Points>
  )
}


function AIAnimatedOrb({ mode }: AIAnimatedOrbProps) {
  const groupRef = useRef<THREE.Group>(null)
  const coreRef = useRef<THREE.Mesh>(null)
  const materialRef = useRef<THREE.ShaderMaterial>(null)
  
  const modeValue = useMemo(() => {
    switch (mode) {
      case 'static': return 0
      case 'listening': return 1
      case 'thinking': return 2
      default: return 0
    }
  }, [mode])
  
  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = state.clock.elapsedTime
      materialRef.current.uniforms.mode.value = modeValue
    }
    
    if (coreRef.current) {
      const rotationSpeed = mode === 'thinking' ? 1.5 : mode === 'listening' ? 0.8 : 0.3
      coreRef.current.rotation.y += rotationSpeed * 0.01
      coreRef.current.rotation.x += rotationSpeed * 0.005
    }
    
    if (groupRef.current) {
      const floatOffset = mode === 'thinking' ? 0.05 : mode === 'listening' ? 0.03 : 0.01
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * floatOffset
    }
  })
  
  return (
    <group ref={groupRef}>
      {/* Core orb - much smaller */}
      <Sphere ref={coreRef} args={[1, 64, 64]} scale={0.15}>
        {/* @ts-expect-error - shader material type */}
        <coreOrbMaterial
          ref={materialRef}
          transparent
          blending={THREE.AdditiveBlending}
        />
      </Sphere>
      
      {/* Particle field */}
      <ParticleField mode={mode} />
    </group>
  )
}

interface AIOrbProps {
  mode?: Mode
  className?: string
}

export default function AIOrb({ mode = 'static', className = '' }: AIOrbProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas camera={{ position: [0, 0, 2.5] }}>
        <ambientLight intensity={0.1} />
        <pointLight position={[2, 2, 2]} intensity={0.6} color="#00d4ff" />
        <pointLight position={[-2, -2, 1]} intensity={0.4} color="#7c3aed" />
        <spotLight
          position={[0, 3, 1]}
          angle={0.5}
          penumbra={1}
          intensity={0.5}
          color="#ff0080"
        />
        <AIAnimatedOrb mode={mode} />
      </Canvas>
    </div>
  )
}