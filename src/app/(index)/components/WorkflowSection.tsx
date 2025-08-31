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
  return (
    <section className="py-32 bg-muted/20">
      <div className={styles.layout.container}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Simple Six-Step Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From initial connection to ongoing monitoring, Oreva will guide you through every step of project planning.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <svg className="w-full h-2 hidden lg:block" viewBox="0 0 800 8">
              <motion.path
                d="M 0 4 Q 200 -2 400 4 T 800 4"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-border"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
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
                  <div className={`${styles.components.card} p-8 text-center backdrop-blur-sm transition-all duration-300`}>
                    <div className="relative mb-6">
                      <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center text-sm font-bold">
                        {item.step}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
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