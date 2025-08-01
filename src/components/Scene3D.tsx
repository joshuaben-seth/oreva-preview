'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'
import { motion } from 'framer-motion'

function AnimatedSphere() {
  return (
    <Sphere args={[1, 64, 64]} scale={2.4}>
      <MeshDistortMaterial
        color="#8A2BE2"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0.2}
        metalness={0.7}
      />
    </Sphere>
  )
}

export default function Scene3D() {
  return (
    <motion.div 
      className="w-full h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />
        <AnimatedSphere />
        <OrbitControls 
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
        />
      </Canvas>
    </motion.div>
  )
}