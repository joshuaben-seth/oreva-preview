'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

const heroContent = [
  {
    title: "AI Project Planning Assistant",
    description: "Coming soon: Intelligent brainstorming sessions that will create comprehensive project plans with your team context."
  },
  {
    title: "Visual Plan Creation",
    description: "Interactive whiteboard that will help you plan with milestones, tasks, dependencies, and timelines."
  },
  {
    title: "Smart Tool Integration",
    description: "Will connect Jira, Linear, Notion and more to inform planning and automate task creation."
  },
  {
    title: "Context-Aware Planning",
    description: "AI will understand your team, past projects, and resources for better decision making."
  },
  {
    title: "Progress Monitoring",
    description: "Coming soon: Daily tracking with proactive alerts and adaptive plan suggestions."
  },
  {
    title: "Human-Approved Automation",
    description: "All implementations will require explicit approval while AI handles the heavy lifting."
  }
]

export default function AnimatedHeroTitle() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [nextIndex, setNextIndex] = useState(1)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      const next = (currentIndex + 1) % heroContent.length
      setNextIndex(next)
      setIsTransitioning(true)
      
      setTimeout(() => {
        setCurrentIndex(next)
        setIsTransitioning(false)
      }, 600) // Duration of the slide animation
    }, 6000)

    return () => clearInterval(interval)
  }, [currentIndex])

  const handleDotClick = (index: number) => {
    if (index === currentIndex || isTransitioning) return
    
    setNextIndex(index)
    setIsTransitioning(true)
    
    setTimeout(() => {
      setCurrentIndex(index)
      setIsTransitioning(false)
    }, 600)
  }

  const currentContent = heroContent[currentIndex]
  const nextContent = heroContent[nextIndex]
  
  if (!mounted) {
    return null
  }

  return (
    <div className="space-y-4 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Animated Title */}
      <div className="relative h-24 w-full flex items-end justify-center overflow-hidden">
        {/* Current Title - slides up and out */}
        <motion.h1
          animate={{ 
            y: isTransitioning ? -80 : 0
          }}
          transition={{ 
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center absolute bottom-0 w-full whitespace-nowrap"
          style={{ 
            color: theme === 'dark' ? '#ffffff' : '#000000'
          }}
        >
          {currentContent.title}
        </motion.h1>

        {/* Next Title - slides in from below */}
        <motion.h1
          animate={{ 
            y: isTransitioning ? 0 : 80
          }}
          transition={{ 
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center absolute bottom-0 w-full whitespace-nowrap"
          style={{ 
            color: theme === 'dark' ? '#ffffff' : '#000000'
          }}
        >
          {nextContent.title}
        </motion.h1>
      </div>

      {/* Animated Description */}
      <div className="relative h-16 w-full flex items-start justify-center overflow-hidden">
        {/* Current Description - slides up and out */}
        <motion.p
          animate={{ 
            y: isTransitioning ? -64 : 0,
            opacity: isTransitioning ? 0 : 1
          }}
          transition={{ 
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="text-lg md:text-xl text-center leading-relaxed absolute top-0 w-full px-4"
          style={{ 
            color: theme === 'dark' ? '#d1d5db' : '#1f2937'
          }}
        >
          {currentContent.description}
        </motion.p>

        {/* Next Description - slides in from below */}
        <motion.p
          animate={{ 
            y: isTransitioning ? 0 : 64,
            opacity: isTransitioning ? 1 : 0
          }}
          transition={{ 
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="text-lg md:text-xl text-center leading-relaxed absolute top-0 w-full px-4"
          style={{ 
            color: theme === 'dark' ? '#d1d5db' : '#1f2937'
          }}
        >
          {nextContent.description}
        </motion.p>
      </div>

      {/* Enhanced Progress Indicators */}
      <div className="flex justify-center space-x-3 pt-6">
        {heroContent.map((_, index) => (
          <motion.div
            key={index}
            className="relative cursor-pointer"
            onClick={() => handleDotClick(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <div
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === currentIndex 
                  ? 'w-12 bg-gray-800 dark:bg-gray-200' 
                  : 'w-3 bg-gray-300 dark:bg-gray-600'
              }`}
            />
            {index === currentIndex && (
              <motion.div
                className="absolute inset-0 h-1.5 bg-gray-900 dark:bg-white rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 6, ease: 'linear' }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}