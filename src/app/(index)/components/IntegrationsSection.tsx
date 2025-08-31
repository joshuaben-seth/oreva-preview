'use client'

import { styles } from '@/lib/styles'
import { motion } from 'framer-motion'
import { GitBranch, FileText, Layers, BookOpen, Plus } from 'lucide-react'

const integrations = [
  {
    name: "Jira",
    category: "Project Management",
    description: "Sync tasks, milestones, and progress tracking",
    icon: GitBranch,
    color: "from-blue-600 to-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/50"
  },
  {
    name: "Linear", 
    category: "Project Management",
    description: "Create issues with proper assignees and estimates",
    icon: Layers,
    color: "from-purple-600 to-purple-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/50"
  },
  {
    name: "Notion",
    category: "Documentation", 
    description: "Access knowledge base to inform planning decisions",
    icon: FileText,
    color: "from-gray-700 to-gray-600",
    bgColor: "bg-gray-50 dark:bg-gray-900/50"
  },
  {
    name: "Confluence",
    category: "Documentation",
    description: "Reference existing documentation during brainstorming",
    icon: BookOpen,
    color: "from-indigo-600 to-indigo-500",
    bgColor: "bg-indigo-50 dark:bg-indigo-950/50"
  }
]

export default function IntegrationsSection() {
  return (
    <section className="py-32 bg-gradient-to-b from-background to-muted/10">
      <div className={styles.layout.container}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Connect Your Existing Tools
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Oreva will integrate seamlessly with your project management and documentation tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {integrations.map((integration, index) => {
            const Icon = integration.icon
            return (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className={`${styles.components.card} p-8 text-center h-full relative backdrop-blur-sm transition-all duration-300`}>
                  <div className={`w-16 h-16 bg-gradient-to-br ${integration.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    {integration.name}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-3 uppercase tracking-wider">
                    {integration.category}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {integration.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-muted/50 rounded-2xl backdrop-blur-sm border border-border/50">
            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
              <Plus className="w-4 h-4 text-white" />
            </div>
            <span className="text-muted-foreground font-medium">
              More integrations coming soon
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}