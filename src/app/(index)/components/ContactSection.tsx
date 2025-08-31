'use client'

import { styles } from '@/lib/styles'
import Button from '@/components/Button'
import { motion } from 'framer-motion'
import { Mail, ArrowRight, Sparkles, Calendar } from 'lucide-react'

export default function ContactSection() {
  return (
    <section className="py-32 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className={styles.layout.container + ' relative z-10'}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-full text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Early Access Available
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Get Early Access
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join our waitlist or speak with us to learn how Oreva might help you and what features you think it should have.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className={`${styles.components.card} p-10 text-center backdrop-blur-sm transition-all duration-300 hover:shadow-lg`}>
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                <Mail className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">
                Get Early Access
              </h3>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Be the first to know when Oreva launches and get early access to beta testing. Receive updates and exclusive invitations.
              </p>
              <Button size="lg" className="w-full group">
                <span className="flex items-center gap-2">
                  Get Early Access
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className={`${styles.components.card} p-10 text-center backdrop-blur-sm transition-all duration-300 hover:shadow-lg`}>
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                <Calendar className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">
                Speak With Us
              </h3>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Tell us how the product might help you or what features you think it should have. Your input shapes our development.
              </p>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full group"
                onClick={() => window.open('https://cal.com/joshuabenseth/30min', '_blank')}
              >
                <span className="flex items-center gap-2">
                  Schedule a Call
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-muted/50 rounded-2xl backdrop-blur-sm border border-border/50">
            <Mail className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground">
              Have questions? Email us at <a href="mailto:cloud@oreva.ai" className="text-primary hover:underline font-medium">cloud@oreva.ai</a> or learn more about our development progress.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}