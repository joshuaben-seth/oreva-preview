'use client'

import { styles } from '@/lib/styles'
import { motion } from 'framer-motion'
import { Link, MessageCircle, Layout, IterationCw, Rocket, Activity } from 'lucide-react'

const workflowSteps = [
  {
    step: "01",
    title: "Connect Tools",
    description: "Link Jira, Linear, and document repositories",
    icon: Link,
    color: "bg-blue-500"
  },
  {
    step: "02", 
    title: "Brainstorm",
    description: "Discuss project goals with context-aware AI",
    icon: MessageCircle,
    color: "bg-purple-500"
  },
  {
    step: "03",
    title: "Plan Creation",
    description: "AI will generate visual project plan with milestones",
    icon: Layout,
    color: "bg-green-500"
  },
  {
    step: "04",
    title: "Iterate",
    description: "Refine plan through conversation or manual edits",
    icon: IterationCw,
    color: "bg-yellow-500"
  },
  {
    step: "05",
    title: "Implement", 
    description: "AI will create tasks in your project management tool",
    icon: Rocket,
    color: "bg-orange-500"
  },
  {
    step: "06",
    title: "Monitor",
    description: "AI will track progress and suggest updates",
    icon: Activity,
    color: "bg-red-500"
  }
]

export default function WorkflowSection() {
  // Calculate positions for circular layout
  const getCircularPosition = (index: number, total: number, radius: number) => {
    const angle = (index * 2 * Math.PI) / total - Math.PI / 2 // Start from top
    return {
      x: radius * Math.cos(angle),
      y: radius * Math.sin(angle)
    }
  }

  return (
    <section className="py-32 bg-muted/20">
      <div className={styles.layout.container}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Continuous Project Cycle
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Oreva creates a seamless cycle of planning, execution, and improvement that keeps your projects moving forward.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Center circle with logo/text */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              viewport={{ once: true }}
              className="w-32 h-32 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full border border-primary/30 flex items-center justify-center backdrop-blur-sm"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">Oreva</div>
                <div className="text-xs text-white">AI Cycle</div>
              </div>
            </motion.div>
          </div>

          {/* Circular connecting path */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <svg className="w-[600px] h-[600px] hidden lg:block" viewBox="0 0 600 600">
              <motion.circle
                cx="300"
                cy="300"
                r="220"
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="1"
                fill="none"
                strokeDasharray="4 8"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 3, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </svg>
          </div>

          {/* Workflow steps in circular layout */}
          <div className="relative w-[600px] h-[600px] mx-auto hidden lg:block">
            {workflowSteps.map((item, index) => {
              const Icon = item.icon
              const position = getCircularPosition(index, workflowSteps.length, 220)
              
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="absolute"
                  style={{
                    left: `calc(50% + ${position.x}px - 120px)`,
                    top: `calc(50% + ${position.y}px - 120px)`,
                    width: '240px'
                  }}
                >
                  <div className={`${styles.components.card} p-6 text-center backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 group`}>
                    <div className="mb-4">
                      <div className="text-xs font-medium text-white/50 group-hover:text-white/70 transition-colors duration-500 mb-2">
                        {item.step}
                      </div>
                      <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:shadow-xl transition-all duration-500`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-white text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Mobile fallback - vertical layout */}
          <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6">
            {workflowSteps.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className={`${styles.components.card} p-6 text-center backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 group`}>
                    <div className="mb-4">
                      <div className="text-xs font-medium text-white/50 group-hover:text-white/70 transition-colors duration-500 mb-2">
                        {item.step}
                      </div>
                      <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:shadow-xl transition-all duration-500`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-white text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}