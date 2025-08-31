'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Calendar, Send, CheckCircle, AlertCircle } from 'lucide-react'
import Button from '@/components/Button'
import { styles, cn } from '@/lib/styles'

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  role: string
  headaches: string[]
}

interface EarlyAccessBottomSheetProps {
  isOpen: boolean
  onClose: () => void
}

const HEADACHE_OPTIONS = [
  'Manual data entry and repetitive tasks',
  'Poor integration between systems',
  'Time-consuming report generation',
  'Lack of real-time insights',
  'Difficulty tracking performance metrics',
  'Complex workflow management',
  'Data accuracy and consistency issues',
  'Limited automation capabilities'
]

export default function EarlyAccessBottomSheet({ isOpen, onClose }: EarlyAccessBottomSheetProps) {
  const [step, setStep] = useState<'form' | 'booking' | 'success'>('form')
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    headaches: []
  })
  const [isLoading, setIsLoading] = useState(false)
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null)
  const [selectedMeetingTime, setSelectedMeetingTime] = useState<string>('')

  // Mock meeting time slots
  const meetingTimes = [
    'Tomorrow 2:00 PM',
    'Tomorrow 4:00 PM', 
    'Day after 10:00 AM',
    'Day after 2:00 PM',
    'Day after 4:00 PM'
  ]

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleHeadacheToggle = (headache: string) => {
    setFormData(prev => ({
      ...prev,
      headaches: prev.headaches.includes(headache)
        ? prev.headaches.filter(h => h !== headache)
        : [...prev.headaches, headache]
    }))
  }

  const showToast = (type: 'success' | 'error', message: string) => {
    setToast({ type, message })
    setTimeout(() => setToast(null), 5000)
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email) {
      showToast('error', 'Please fill in all required fields')
      return
    }

    setIsLoading(true)
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Simulate random failure for demo (20% chance)
      if (Math.random() < 0.2) {
        throw new Error('Submission failed')
      }
      
      showToast('success', 'Form submitted successfully!')
      setStep('booking')
    } catch (error) {
      console.log(error)
      showToast('error', 'Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleBookMeeting = async () => {
    if (!selectedMeetingTime) {
      showToast('error', 'Please select a meeting time')
      return
    }

    setIsLoading(true)
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Simulate random failure for demo (15% chance)
      if (Math.random() < 0.15) {
        throw new Error('Booking failed')
      }
      
      showToast('success', 'Meeting booked successfully!')
      setStep('success')
    } catch (error) {
      console.log(error)
      showToast('error', 'Failed to book meeting. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSkipMeeting = () => {
    setStep('success')
  }

  const reset = () => {
    setStep('form')
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      role: '',
      headaches: []
    })
    setSelectedMeetingTime('')
    setToast(null)
  }

  const handleClose = () => {
    reset()
    onClose()
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop with content blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 z-50"
              style={{ backdropFilter: 'blur(8px)' }}
            >
              <div className="absolute inset-0 bg-black/30" />
            </motion.div>

            {/* Bottom Sheet */}
            <motion.div
              initial={{ y: '100%', scale: 0.95 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: '100%', scale: 0.95 }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 md:left-1/2 md:right-auto md:-translate-x-1/2 z-50 max-h-[85vh] overflow-hidden md:w-full md:max-w-2xl md:bottom-8 md:rounded-3xl"
            >
              <div className="bg-background/95 backdrop-blur-2xl border-t-2 md:border-2 border-white/20 dark:border-white/10 rounded-t-3xl md:rounded-3xl shadow-2xl relative overflow-hidden">
                {/* Enhanced glassy overlay with defined boundary */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-white/10 dark:from-white/5 dark:via-white/2 dark:to-white/5" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/20 dark:ring-white/10 rounded-t-3xl md:rounded-3xl" />
                <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between p-8 border-b border-white/10 dark:border-white/5">
                  <div>
                    <h2 className={cn(styles.typography.h2, "text-2xl mb-2")}>
                      {step === 'form' && 'Get Early Access'}
                      {step === 'booking' && 'Book a Meeting'}
                      {step === 'success' && 'All Set!'}
                    </h2>
                    {step === 'form' && (
                      <p className="text-muted-foreground text-sm">
                        Join our waitlist and be the first to experience Oreva
                      </p>
                    )}
                    {step === 'booking' && (
                      <p className="text-muted-foreground text-sm">
                        Schedule a quick 15-minute call to discuss your needs
                      </p>
                    )}
                  </div>
                  <button
                    onClick={handleClose}
                    className="p-2 rounded-xl hover:bg-white/10 dark:hover:bg-white/5 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Content */}
                <div className="p-8 overflow-y-auto max-h-[calc(85vh-140px)]">
                  {step === 'form' && (
                    <form onSubmit={handleFormSubmit} className="space-y-5">
                      {/* Personal Information Section */}
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <h3 className="text-sm font-medium text-foreground mr-4">Personal Information</h3>
                          <div className="flex-1 h-px bg-gradient-to-r from-border via-border/50 to-transparent"></div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-medium mb-2 text-foreground">Name *</label>
                            <input
                              type="text"
                              value={formData.name}
                              onChange={(e) => handleInputChange('name', e.target.value)}
                              className="w-full px-3 py-2 rounded-xl border border-white/20 dark:border-white/10 bg-white/10 dark:bg-white/5 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/20 transition-all placeholder-muted-foreground text-sm"
                              placeholder="Your full name"
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-medium mb-2 text-foreground">Email *</label>
                            <input
                              type="email"
                              value={formData.email}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                              className="w-full px-3 py-2 rounded-xl border border-white/20 dark:border-white/10 bg-white/10 dark:bg-white/5 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/20 transition-all placeholder-muted-foreground text-sm"
                              placeholder="your@email.com"
                              required
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-medium mb-2 text-foreground">Phone (WhatsApp preferred)</label>
                            <input
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => handleInputChange('phone', e.target.value)}
                              className="w-full px-3 py-2 rounded-xl border border-white/20 dark:border-white/10 bg-white/10 dark:bg-white/5 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/20 transition-all placeholder-muted-foreground text-sm"
                              placeholder="+1 (555) 123-4567"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-medium mb-2 text-foreground">Company</label>
                            <input
                              type="text"
                              value={formData.company}
                              onChange={(e) => handleInputChange('company', e.target.value)}
                              className="w-full px-3 py-2 rounded-xl border border-white/20 dark:border-white/10 bg-white/10 dark:bg-white/5 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/20 transition-all placeholder-muted-foreground text-sm"
                              placeholder="Company name"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-medium mb-2 text-foreground">What do you do at your company?</label>
                          <input
                            type="text"
                            value={formData.role}
                            onChange={(e) => handleInputChange('role', e.target.value)}
                            className="w-full px-3 py-2 rounded-xl border border-white/20 dark:border-white/10 bg-white/10 dark:bg-white/5 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/20 transition-all placeholder-muted-foreground text-sm"
                            placeholder="e.g., Operations Manager, CEO, Data Analyst"
                          />
                        </div>
                      </div>

                      {/* Pain Points Section */}
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <h3 className="text-sm font-medium text-foreground mr-4">Your Challenges</h3>
                          <div className="flex-1 h-px bg-gradient-to-r from-border via-border/50 to-transparent"></div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {HEADACHE_OPTIONS.map((headache) => (
                            <button
                              key={headache}
                              type="button"
                              onClick={() => handleHeadacheToggle(headache)}
                              className={cn(
                                "px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border cursor-pointer select-none",
                                formData.headaches.includes(headache)
                                  ? "bg-primary/20 text-primary border-primary/40 ring-2 ring-primary/20 hover:bg-primary/30 hover:border-primary/50 hover:ring-primary/30 hover:scale-105"
                                  : "bg-white/5 dark:bg-white/5 text-muted-foreground border-white/20 dark:border-white/10 hover:bg-white/15 dark:hover:bg-white/15 hover:text-foreground hover:border-white/40 dark:hover:border-white/25 hover:scale-105 hover:shadow-md active:scale-95"
                              )}
                            >
                              {headache}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className="pt-2">
                        <Button 
                          type="submit" 
                          size="md" 
                          disabled={isLoading}
                          className="w-full"
                          icon={isLoading ? undefined : <Send size={14} />}
                        >
                          {isLoading ? 'Submitting...' : 'Submit Application'}
                        </Button>
                      </div>
                    </form>
                  )}

                  {step === 'booking' && (
                    <div className="space-y-8">
                      <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                          <CheckCircle className="text-white" size={32} />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">Application Submitted!</h3>
                          <p className="text-muted-foreground">Would you like to book a quick 15-minute meeting to discuss your needs?</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="text-center">
                          <h4 className="text-lg font-medium mb-1">Available Times</h4>
                          <p className="text-sm text-muted-foreground">Select a time that works for you</p>
                        </div>
                        
                        <div className="space-y-3">
                          {meetingTimes.map((time) => (
                            <button
                              key={time}
                              type="button"
                              onClick={() => setSelectedMeetingTime(time)}
                              className={cn(
                                "w-full flex items-center justify-between p-4 rounded-2xl border transition-all duration-200",
                                selectedMeetingTime === time
                                  ? "bg-primary/20 border-primary/40 ring-2 ring-primary/20"
                                  : "bg-white/5 dark:bg-white/5 border-white/20 dark:border-white/10 hover:bg-white/10 dark:hover:bg-white/10 hover:border-white/30 dark:hover:border-white/20"
                              )}
                            >
                              <div className="flex items-center gap-3">
                                <Calendar size={18} className={selectedMeetingTime === time ? "text-primary" : "text-muted-foreground"} />
                                <span className={selectedMeetingTime === time ? "text-primary font-medium" : "text-foreground"}>{time}</span>
                              </div>
                              {selectedMeetingTime === time && (
                                <CheckCircle size={18} className="text-primary" />
                              )}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3 pt-2">
                        <Button 
                          variant="secondary" 
                          size="lg" 
                          onClick={handleSkipMeeting}
                          className="flex-1"
                        >
                          Skip for now
                        </Button>
                        <Button 
                          size="lg" 
                          onClick={handleBookMeeting}
                          disabled={isLoading || !selectedMeetingTime}
                          className="flex-1"
                          icon={<Calendar size={16} />}
                        >
                          {isLoading ? 'Booking...' : 'Book Meeting'}
                        </Button>
                      </div>
                    </div>
                  )}

                  {step === 'success' && (
                    <div className="text-center space-y-8">
                      <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-2xl">
                        <CheckCircle className="text-white" size={40} />
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-2xl font-bold">You&apos;re all set!</h3>
                        <div className="space-y-2 max-w-md mx-auto">
                          <p className="text-muted-foreground">
                            We&apos;ll be in touch soon with your early access invitation.
                          </p>
                          {selectedMeetingTime && (
                            <p className="text-primary font-medium">
                              📅 Your meeting is scheduled for {selectedMeetingTime}
                            </p>
                          )}
                        </div>
                      </div>
                      <Button size="lg" onClick={handleClose} className="w-full max-w-xs mx-auto">
                        Done
                      </Button>
                    </div>
                  )}
                </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Toast Notifications */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-[60] max-w-sm"
          >
            <div className={cn(
              "flex items-center gap-3 p-4 rounded-xl shadow-lg border",
              toast.type === 'success' 
                ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200"
                : "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200"
            )}>
              {toast.type === 'success' ? (
                <CheckCircle size={20} className="text-green-500" />
              ) : (
                <AlertCircle size={20} className="text-red-500" />
              )}
              <p className="text-sm font-medium">{toast.message}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}