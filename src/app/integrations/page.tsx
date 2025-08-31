'use client'

import { styles } from '@/lib/styles'
import { motion } from 'framer-motion'
import { GitBranch, FileText, Layers, BookOpen, Bot, Check } from 'lucide-react'

const integrations = [
  {
    name: "Jira",
    category: "Project Management",
    description: "Comprehensive project management and issue tracking",
    icon: GitBranch,
    color: "from-blue-600 to-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/50",
    features: [
      "Create epics, stories, and tasks with proper assignees and estimates",
      "Set up sprint planning with capacity-aware task distribution",
      "Monitor progress through burndown charts and velocity tracking",
      "Automatically update task statuses based on linked development work",
      "Generate detailed project reports and timeline predictions",
      "Identify blockers and suggest resolution strategies"
    ]
  },
  {
    name: "Linear",
    category: "Project Management", 
    description: "Modern issue tracking for software development teams",
    icon: Layers,
    color: "from-purple-600 to-purple-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/50",
    features: [
      "Create issues with precise estimates and priority assignments",
      "Set up project milestones with dependency mapping",
      "Track cycle performance and team velocity metrics",
      "Automatically link related issues and sub-tasks",
      "Generate roadmaps based on team capacity and priorities",
      "Provide intelligent task scheduling and workload balancing"
    ]
  },
  {
    name: "Notion",
    category: "Documentation",
    description: "All-in-one workspace for notes, docs, and databases",
    icon: FileText,
    color: "from-gray-700 to-gray-600",
    bgColor: "bg-gray-50 dark:bg-gray-900/50",
    features: [
      "Access and reference existing project documentation during planning",
      "Create comprehensive project specs and requirement documents",
      "Build knowledge bases that inform future planning decisions",
      "Generate meeting notes and decision logs automatically",
      "Create project wikis with searchable information architecture",
      "Maintain up-to-date project status pages and dashboards"
    ]
  },
  {
    name: "Confluence",
    category: "Documentation",
    description: "Team collaboration and knowledge management platform",
    icon: BookOpen,
    color: "from-indigo-600 to-indigo-500",
    bgColor: "bg-indigo-50 dark:bg-indigo-950/50",
    features: [
      "Reference existing documentation to inform new project planning",
      "Generate project requirements and technical specifications",
      "Create and maintain project runbooks and processes",
      "Build decision trees and troubleshooting guides",
      "Maintain project retrospectives and lessons learned",
      "Create searchable knowledge bases for team reference"
    ]
  }
]

export default function Integrations() {
  return (
    <div className="min-h-screen bg-background">
      <main className={styles.layout.container}>
        <div className="py-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className={styles.typography.h1 + " mb-6 text-white"}>
              Powerful AI Integrations
            </h1>
            <p className={"text-base md:text-lg leading-relaxed text-white max-w-3xl mx-auto"}>
              Oreva connects with your existing tools to provide intelligent project planning and management. 
              Our AI understands your workflows and enhances each platform with advanced capabilities.
            </p>
          </motion.div>

          <div className="space-y-16">
            {integrations.map((integration, index) => {
              const Icon = integration.icon
              return (
                <motion.div
                  key={integration.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className={`${styles.components.card} p-8 md:p-12`}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="flex items-center gap-4 mb-6">
                          <div className={`w-16 h-16 bg-gradient-to-br ${integration.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h2 className={styles.typography.h2 + " mb-2 text-white"}>
                              {integration.name}
                            </h2>
                            <span className="text-sm text-primary font-medium uppercase tracking-wider">
                              {integration.category}
                            </span>
                          </div>
                        </div>
                        <p className={"text-base md:text-lg leading-relaxed text-white mb-6"}>
                          {integration.description}
                        </p>
                        <div className="flex items-center gap-2 text-primary font-medium">
                          <Bot className="w-5 h-5" />
                          <span className="text-white">AI-Enhanced Features</span>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        {integration.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: (index * 0.2) + (featureIndex * 0.1), duration: 0.4 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3"
                          >
                            <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                              <Check className="w-3 h-3 text-primary-foreground" />
                            </div>
                            <p className="text-sm text-white leading-relaxed">
                              {feature}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <div className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-border/50">
              <h3 className={styles.typography.h3 + " mb-4"}>
                More Integrations Coming Soon
              </h3>
              <p className={styles.typography.body + " mb-8"}>
                We&apos;re working on integrations with Slack, GitHub, Trello, Asana, and more. 
                Join our waitlist to be notified when new integrations become available.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-background/50 rounded-lg border border-border/50">
                  <span className="text-sm font-medium text-white">Coming Soon:</span>
                  <span className="text-sm font-medium text-white">Slack</span>
                  <span className="text-sm text-white">•</span>
                  <span className="text-sm font-medium text-white">GitHub</span>
                  <span className="text-sm text-white">•</span>
                  <span className="text-sm font-medium text-white">Trello</span>
                  <span className="text-sm text-white">•</span>
                  <span className="text-sm font-medium text-white">Asana</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}