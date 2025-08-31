'use client'

import { useEffect, useRef, useState } from 'react'
import { styles } from '@/lib/styles'
import { motion } from 'framer-motion'
import { Brain, Palette, Zap, BarChart3, Rocket, Clock, Sparkles } from 'lucide-react'
import ImagePlaceholder from '@/components/ImagePlaceholder'

const features = [
  {
    title: "Intelligent Brainstorming",
    description: "Connect your tools and engage in conversational planning with AI that understands your team and context. Access your existing knowledge base to inform planning decisions and iterate on ideas until the plan is exactly what you need.",
    icon: Brain,
    gradient: "from-purple-500 to-pink-500",
    details: [
      "Connect task management tools (Jira, Linear, etc.)",
      "Integrate documentation (Notion, Confluence, etc.)",
      "Conversational planning sessions with context-aware AI",
      "Access to your existing knowledge base"
    ]
  },
  {
    title: "Visual Plan Creation", 
    description: "AI presents plans on an interactive whiteboard with manual editing capabilities. Use conversational editing to ask the AI to modify specific aspects with clear visualization of milestones, tasks, dependencies, and timelines.",
    icon: Palette,
    gradient: "from-blue-500 to-cyan-500",
    details: [
      "Interactive whiteboard/canvas interface",
      "Manual editing capabilities for fine-tuning",
      "Conversational editing with AI assistance",
      "Clear visualization of dependencies and timelines"
    ]
  },
  {
    title: "Automated Implementation",
    description: "Direct integration with your chosen project management tool. Automatic creation of tasks with proper assignees, due dates, and estimates. All implementations require human approval before changes are made.",
    icon: Zap,
    gradient: "from-yellow-500 to-orange-500",
    details: [
      "Direct integration with PM tools",
      "Automatic task creation with assignees and estimates",
      "Human approval required for all changes",
      "Seamless transition from planning to execution"
    ]
  },
  {
    title: "Progress Monitoring",
    description: "Daily progress tracking and status updates with proactive identification of potential issues or delays. Suggested task status updates and plan adjustments, all requiring human approval before implementation.",
    icon: BarChart3,
    gradient: "from-green-500 to-emerald-500",
    details: [
      "Daily progress tracking and status updates",
      "Proactive identification of issues and delays",
      "Suggested task status updates and plan adjustments",
      "All suggestions require human approval"
    ]
  }
]

export default function FeaturesSection() {
  const [currentFeature, setCurrentFeature] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      
      const section = sectionRef.current
      const rect = section.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      
      if (rect.top <= 0 && rect.bottom > viewportHeight) {
        const scrolledAmount = -rect.top
        const totalScrollable = rect.height - viewportHeight
        
        if (totalScrollable <= 0) {
          setCurrentFeature(0)
          return
        }
        
        const scrollProgress = Math.max(0, Math.min(1, scrolledAmount / totalScrollable))
        
        let featureIndex
        if (scrollProgress >= 0.75) {
          featureIndex = 3
        } else if (scrollProgress >= 0.5) {
          featureIndex = 2
        } else if (scrollProgress >= 0.25) {
          featureIndex = 1
        } else {
          featureIndex = 0
        }
        
        if (featureIndex !== currentFeature) {
          setCurrentFeature(featureIndex)
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [currentFeature])

  return (
    <>
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-b from-background to-muted/20">
        <div className={styles.layout.container}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="relative mb-6">
              {/* Floating particles around the badge */}
              <motion.div
                className="absolute -top-2 -left-2 w-2 h-2 bg-yellow-400 rounded-full"
                animate={{ 
                  y: [0, -8, 0],
                  opacity: [0.4, 1, 0.4],
                  scale: [0.8, 1.2, 0.8] 
                }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0 }}
              />
              <motion.div
                className="absolute -top-4 right-4 w-1.5 h-1.5 bg-pink-400 rounded-full"
                animate={{ 
                  y: [0, -10, 0],
                  opacity: [0.3, 0.9, 0.3],
                  scale: [0.6, 1, 0.6] 
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.8 }}
              />
              <motion.div
                className="absolute -bottom-3 -right-1 w-2.5 h-2.5 bg-cyan-400 rounded-full"
                animate={{ 
                  y: [0, -6, 0],
                  opacity: [0.5, 1, 0.5],
                  scale: [0.7, 1.1, 0.7] 
                }}
                transition={{ duration: 2.8, repeat: Infinity, delay: 1.5 }}
              />
              
              <motion.div 
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full cursor-pointer overflow-hidden"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: `
                    0 8px 32px rgba(59, 130, 246, 0.2),
                    inset 0 1px 0 rgba(255, 255, 255, 0.3),
                    inset 0 -1px 0 rgba(255, 255, 255, 0.1)
                  `
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: `
                    0 16px 40px rgba(59, 130, 246, 0.4),
                    0 0 60px rgba(139, 92, 246, 0.3),
                    inset 0 1px 0 rgba(255, 255, 255, 0.4),
                    inset 0 -1px 0 rgba(255, 255, 255, 0.2)
                  `
                }}
                whileTap={{ scale: 0.98 }}
                animate={{
                  borderColor: [
                    "rgba(255, 255, 255, 0.2)",
                    "rgba(139, 92, 246, 0.4)", 
                    "rgba(236, 72, 153, 0.4)",
                    "rgba(255, 255, 255, 0.2)"
                  ],
                  boxShadow: [
                    "0 8px 32px rgba(59, 130, 246, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3), inset 0 -1px 0 rgba(255, 255, 255, 0.1)",
                    "0 8px 32px rgba(139, 92, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3), inset 0 -1px 0 rgba(255, 255, 255, 0.1)",
                    "0 8px 32px rgba(236, 72, 153, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3), inset 0 -1px 0 rgba(255, 255, 255, 0.1)",
                    "0 8px 32px rgba(59, 130, 246, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3), inset 0 -1px 0 rgba(255, 255, 255, 0.1)"
                  ]
                }}
                transition={{ 
                  borderColor: { duration: 4, repeat: Infinity },
                  boxShadow: { duration: 4, repeat: Infinity },
                  scale: { type: "spring", stiffness: 400, damping: 10 }
                }}
              >
                {/* Glass reflection layers */}
                <div className="absolute inset-0 rounded-full">
                  {/* Top highlight */}
                  <div 
                    className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"
                  />
                  {/* Curved glass reflection */}
                  <motion.div
                    className="absolute top-1 left-1 right-1 h-8 bg-gradient-to-b from-white/20 to-transparent rounded-full"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </div>
                
                {/* Frosted glass background layer */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)",
                  }}
                  animate={{ 
                    background: [
                      "linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)",
                      "linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)",
                      "linear-gradient(135deg, rgba(236, 72, 153, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)",
                      "linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)"
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                
                {/* Rocket with trail effect */}
                <motion.div 
                  className="relative flex items-center gap-1 z-10"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Rocket className="w-5 h-5 text-blue-400 drop-shadow-lg" />
                  <motion.div 
                    className="w-2 h-0.5 bg-gradient-to-r from-orange-400 to-transparent rounded-full"
                    animate={{ scaleX: [0.5, 1, 0.5], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                </motion.div>
                
                {/* Enhanced bouncing dots with colors */}
                <div className="flex items-center gap-1.5 z-10">
                  <motion.div 
                    className="w-2 h-2 bg-blue-400 rounded-full shadow-lg"
                    animate={{ y: [0, -6, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: 0 }}
                  />
                  <motion.div 
                    className="w-2 h-2 bg-purple-400 rounded-full shadow-lg"
                    animate={{ y: [0, -6, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: 0.2 }}
                  />
                  <motion.div 
                    className="w-2 h-2 bg-pink-400 rounded-full shadow-lg"
                    animate={{ y: [0, -6, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: 0.4 }}
                  />
                </div>
                
                {/* Enhanced text with better visibility */}
                <span className="relative z-10 text-base font-bold">
                  <motion.span 
                    className="text-white drop-shadow-lg"
                    animate={{ 
                      textShadow: [
                        "0 0 10px rgba(59, 130, 246, 0.8)",
                        "0 0 20px rgba(139, 92, 246, 0.8)",
                        "0 0 10px rgba(59, 130, 246, 0.8)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Building Something Special
                  </motion.span>
                  {/* Enhanced shimmer effect - smooth back and forth */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                    animate={{ x: ['-150%', '150%', '-150%'] }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      times: [0, 0.5, 1]
                    }}
                  />
                </span>
                
                {/* Clock icon with ticking animation */}
                <motion.div
                  className="z-10"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Clock className="w-4 h-4 text-cyan-400 drop-shadow-lg" />
                </motion.div>
                
                {/* Multiple hover sparkles */}
                <motion.div
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                  animate={{ rotate: [0, 180, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-5 h-5 text-yellow-300 drop-shadow-lg" />
                </motion.div>
                
                <motion.div
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute right-2 z-10"
                  animate={{ 
                    rotate: [360, 0],
                    scale: [0.8, 1.2, 0.8]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-3 h-3 text-pink-300" />
                </motion.div>
              </motion.div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              Complete Project Planning Solution
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From brainstorming to execution, Oreva will handle every step of project planning with AI intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section - Trigger Based with Horizontal Animation */}
      <section 
        ref={sectionRef}
        className="relative"
        style={{ height: `${features.length * 80}vh` }}
      >
        <div className="sticky top-0 h-screen overflow-hidden bg-background">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isEven = index % 2 === 0
            const isActive = currentFeature === index
            
            return (
              <motion.div
                key={feature.title}
                className="absolute inset-0 flex items-center"
                animate={{ 
                  x: isActive ? 0 : index < currentFeature ? '-100%' : '100%',
                  opacity: isActive ? 1 : 0
                }}
                transition={{ 
                  duration: 0.8, 
                  ease: "easeInOut"
                }}
              >
                <div className={styles.layout.container}>
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${isEven ? '' : 'lg:grid-flow-col-dense'}`}>
                    {/* Image Side */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ 
                        opacity: isActive ? 1 : 0,
                        scale: isActive ? 1 : 0.9
                      }}
                      transition={{ duration: 0.8, delay: isActive ? 0.2 : 0 }}
                      className={`relative ${isEven ? '' : 'lg:col-start-2'}`}
                    >
                      <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 overflow-hidden">
                        <ImagePlaceholder 
                          className="aspect-[4/3] w-full"
                        />
                      </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: isActive ? 1 : 0,
                        y: isActive ? 0 : 20
                      }}
                      transition={{ duration: 0.8, delay: isActive ? 0.4 : 0 }}
                      className={`space-y-8 ${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}
                    >
                      <div className="space-y-4">
                        <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-4`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        
                        <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                          {feature.title}
                        </h3>
                        
                        <p className="text-xl text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>

                      <div className="space-y-3">
                        {feature.details.map((detail, detailIndex) => (
                          <motion.div
                            key={detailIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ 
                              opacity: isActive ? 1 : 0,
                              x: isActive ? 0 : 20
                            }}
                            transition={{ 
                              duration: 0.6, 
                              delay: isActive ? 0.6 + detailIndex * 0.1 : 0 
                            }}
                            className="flex items-center gap-3"
                          >
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${feature.gradient}`} />
                            <span className="text-muted-foreground">{detail}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )
          })}

          {/* Feature Navigation Dots */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {features.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                  currentFeature === index
                    ? 'bg-foreground border-foreground'
                    : 'bg-transparent border-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}