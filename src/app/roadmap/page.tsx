'use client'

import { styles } from '@/lib/styles'
import { motion } from 'framer-motion'
import { CheckCircle, Circle, Clock, Calendar, Rocket, Users, Settings, BarChart3, Zap, Shield } from 'lucide-react'
import Button from '@/components/Button'

type StatusType = 'in-progress' | 'planned' | 'future'

interface RoadmapItem {
  id: string
  phase: string
  title: string
  description: string
  features: string[]
  status: StatusType
  date: string
  icon: typeof Rocket
  color: string
}

const roadmapItems: RoadmapItem[] = [
  {
    id: 'mvp',
    phase: 'Phase 1',
    title: 'MVP Launch',
    description: 'Core brainstorming and planning features with basic integrations',
    features: [
      'AI-powered project planning conversations',
      'Visual project canvas and whiteboard',
      'Jira and Linear integrations',
      'Basic task creation and management'
    ],
    status: 'in-progress',
    date: 'Q1 2025',
    icon: Rocket,
    color: 'text-blue-500'
  },
  {
    id: 'enhanced',
    phase: 'Phase 2', 
    title: 'Enhanced Integrations',
    description: 'Expanded tool ecosystem and improved AI capabilities',
    features: [
      'Notion and Confluence integrations',
      'Advanced document analysis and context',
      'Team collaboration features',
      'Progress monitoring and alerts'
    ],
    status: 'planned',
    date: 'Q2 2025',
    icon: Settings,
    color: 'text-purple-500'
  },
  {
    id: 'analytics',
    phase: 'Phase 3',
    title: 'Analytics & Intelligence',
    description: 'Advanced analytics, reporting, and predictive insights',
    features: [
      'Project performance analytics',
      'Predictive timeline adjustments',
      'Resource utilization insights',
      'Custom reporting dashboards'
    ],
    status: 'planned',
    date: 'Q3 2025',
    icon: BarChart3,
    color: 'text-green-500'
  },
  {
    id: 'enterprise',
    phase: 'Phase 4',
    title: 'Enterprise Features',
    description: 'Scale for large organizations with advanced security',
    features: [
      'SSO and advanced security',
      'Multi-team workspace management',
      'Custom workflow automations',
      'API access and webhooks'
    ],
    status: 'future',
    date: 'Q4 2025',
    icon: Shield,
    color: 'text-orange-500'
  },
  {
    id: 'ai-advanced',
    phase: 'Phase 5',
    title: 'Advanced AI',
    description: 'Next-generation AI capabilities and autonomous features',
    features: [
      'Autonomous project optimization',
      'Natural language project queries',
      'Intelligent resource allocation',
      'Predictive risk management'
    ],
    status: 'future',
    date: 'Q1 2026',
    icon: Zap,
    color: 'text-yellow-500'
  }
]

const statusConfig: Record<StatusType, { icon: typeof Clock; label: string; className: string }> = {
  'in-progress': {
    icon: Clock,
    label: 'In Progress',
    className: 'text-blue-500 bg-blue-500/10 border-blue-500/20'
  },
  'planned': {
    icon: Circle,
    label: 'Planned',
    className: 'text-purple-500 bg-purple-500/10 border-purple-500/20'
  },
  'future': {
    icon: Calendar,
    label: 'Future',
    className: 'text-muted-foreground bg-muted/10 border-border/20'
  }
}

export default function RoadmapPage() {
  return (
    <div className="min-h-screen pt-24">
      <div className={styles.layout.container}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Development Roadmap
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Follow our journey as we build the future of AI-powered project planning. 
            Here&apos;s what we&apos;re working on and what&apos;s coming next.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-purple-500/30 to-muted-foreground/20"></div>

          {/* Roadmap items */}
          <div className="space-y-12">
            {roadmapItems.map((item, index) => {
              const Icon = item.icon
              const StatusIcon = statusConfig[item.status].icon
              
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.15, duration: 0.6 }}
                  className="relative flex items-start gap-8"
                >
                  {/* Timeline dot */}
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg ${item.color.includes('blue') ? 'bg-blue-500' : item.color.includes('purple') ? 'bg-purple-500' : item.color.includes('green') ? 'bg-green-500' : item.color.includes('orange') ? 'bg-orange-500' : 'bg-yellow-500'}`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className={`${styles.components.card} p-8 transition-all duration-300 hover:shadow-xl`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-medium text-muted-foreground">
                            {item.phase}
                          </span>
                          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border ${statusConfig[item.status].className}`}>
                            <StatusIcon className="w-3 h-3" />
                            {statusConfig[item.status].label}
                          </div>
                        </div>
                        <div className="text-sm font-medium text-muted-foreground">
                          {item.date}
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold mb-3">
                        {item.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                          Key Features
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {item.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20 mb-12"
        >
          <div className={`${styles.components.card} p-8 max-w-2xl mx-auto`}>
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">
              Shape Our Roadmap
            </h3>
            <p className="text-muted-foreground mb-6">
              Have ideas for features you&apos;d like to see? We&apos;d love to hear from you and 
              incorporate your feedback into our development plans.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.open('https://cal.com/joshuabenseth/30min', '_blank')}
                size="lg"
              >
                Schedule a Call
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={() => window.location.href = 'mailto:cloud@oreva.ai'}
              >
                Send Feedback
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}