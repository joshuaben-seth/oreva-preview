'use client'

import Button from '@/components/Button'
import { styles } from '@/lib/styles'
import AnimatedHeroTitle from './AnimatedHeroTitle'
import { useEarlyAccess } from '@/components/EarlyAccessProvider'

export default function HeroSection() {
  const { openEarlyAccess } = useEarlyAccess()

  return (
    <div className="h-[35vh] flex items-center">
      <div className={styles.layout.centered + ' w-full'}>
        <div className="space-y-4">
          <AnimatedHeroTitle />
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="min-w-[200px]" onClick={openEarlyAccess}>
              Get Early Access
            </Button>
            <Button 
              variant="ghost" 
              size="lg" 
              className="min-w-[200px]"
              onClick={() => window.open('https://cal.com/joshuabenseth/30min', '_blank')}
            >
              Speak With Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}