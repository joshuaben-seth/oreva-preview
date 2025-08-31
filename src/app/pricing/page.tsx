'use client'

import { styles } from '@/lib/styles'
import Button from '@/components/Button'
import { motion } from 'framer-motion'
import { Check, Zap, Users, Infinity, ArrowRight, Star, Sparkles } from 'lucide-react'

const pricingPlans = [
  {
    id: 'free',
    name: 'Free',
    price: '$0',
    period: '/month',
    credits: '2,000 credits',
    description: 'Perfect for getting started with intelligent project planning',
    features: [
      '2,000 free credits per month',
      'AI brainstorming sessions',
      'Visual project canvas & whiteboard',
      'Basic Jira & Linear integrations',
      'Community support',
      'Human approval workflow'
    ],
    cta: 'Get Early Access',
    popular: false,
    icon: Sparkles,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'pro',
    name: 'Professional',
    price: '$200',
    period: '/user/month',
    credits: '50,000 credits',
    description: 'For teams ready to transform their project planning process',
    features: [
      '50,000 credits per month',
      'Context-aware AI with team understanding',
      'Full Jira, Linear, Notion & Confluence integration',
      'Automated task creation with approval',
      'Daily progress monitoring & alerts',
      'Iterative plan refinement',
      'Priority support',
      'Pay-as-you-go for extra usage'
    ],
    cta: 'Get Early Access',
    popular: true,
    icon: Zap,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'unlimited',
    name: 'Unlimited',
    price: '$1,000',
    period: '/user/month',
    credits: 'Unlimited credits',
    description: 'For large teams requiring unlimited intelligent project assistance',
    features: [
      'Unlimited AI credits',
      'Everything in Professional',
      'Advanced progress analytics & predictions',
      'Custom tool integrations',
      'Dedicated success manager',
      'SLA guarantees',
      'Priority feature development',
      'White-label deployment options'
    ],
    cta: 'Share Your Needs',
    popular: false,
    icon: Infinity,
    color: 'from-orange-500 to-red-500'
  }
]

const faqs = [
  {
    question: 'When will Oreva be available?',
    answer: 'Oreva is currently in development with an MVP planned for Q1 2025. Join our early access list to be notified when we launch and get priority access to beta testing.'
  },
  {
    question: 'What are credits and how will they work?',
    answer: 'Credits will be consumed when you use AI features like intelligent brainstorming sessions, visual plan creation, document analysis, and automated task generation. Different actions will consume different amounts based on complexity.'
  },
  {
    question: 'How will Oreva integrate with my existing tools?',
    answer: 'Oreva will connect directly to your project management tools (Jira, Linear) and documentation systems (Notion, Confluence) to understand your team context and automate task creation with your approval.'
  },
  {
    question: 'Can I influence what features get built?',
    answer: 'Absolutely! We&apos;re actively seeking feedback from potential users. Schedule a call with us to share your project planning challenges and help prioritize our feature development.'
  }
]

export default function PricingPage() {
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
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transform how your team plans and executes projects with AI that understands your context and workflow.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {pricingPlans.map((plan, index) => {
            const Icon = plan.icon
            
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.15, duration: 0.6 }}
                className={`relative ${plan.popular ? 'md:scale-105 z-10' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-medium rounded-full">
                      <Star className="w-3 h-3" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className={`${styles.components.card} p-8 h-full transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 ${plan.popular ? 'border-primary/50' : ''}`}>
                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center gap-1 mb-2">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                    <div className="text-sm font-medium text-primary mb-3">
                      {plan.credits}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button 
                    variant={plan.popular ? 'primary' : 'outline'}
                    size="lg" 
                    className="w-full group"
                    onClick={() => {
                      if (plan.id === 'unlimited') {
                        window.open('https://cal.com/joshuabenseth/30min', '_blank')
                      }
                    }}
                  >
                    <span className="flex items-center gap-2">
                      {plan.cta}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                  </Button>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Pay-as-you-go info */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className={`${styles.components.card} p-8 max-w-4xl mx-auto`}>
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">
              Help Shape Oreva
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              These are our planned pricing tiers for when Oreva launches. During development, we&apos;d love to understand 
              your team&apos;s needs to ensure we build the right features for your use case.
            </p>
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <Button 
                  size="lg"
                  onClick={() => window.open('https://cal.com/joshuabenseth/30min', '_blank')}
                >
                  Tell Us Your Requirements
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Schedule a call to discuss your team&apos;s project planning needs
              </p>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 + index * 0.1, duration: 0.6 }}
                className={`${styles.components.card} p-6`}
              >
                <h3 className="text-lg font-semibold mb-3">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className={`${styles.components.card} p-8 max-w-2xl mx-auto`}>
            <h3 className="text-2xl font-bold mb-4">
              Be Part of Oreva&apos;s Journey
            </h3>
            <p className="text-muted-foreground mb-6">
              Get early access when we launch or help us build the features your team needs most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Get Early Access
              </Button>
              <Button 
                variant="ghost" 
                size="lg"
                onClick={() => window.open('https://cal.com/joshuabenseth/30min', '_blank')}
              >
                Share Your Needs
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}