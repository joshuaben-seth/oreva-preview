import { styles } from '@/lib/styles'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import WorkflowSection from './components/WorkflowSection'
import IntegrationsSection from './components/IntegrationsSection'
import ContactSection from './components/ContactSection'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className={styles.layout.container}>
        <div className="min-h-screen flex flex-col justify-center py-20">
          <HeroSection />
          
          {/* Product Preview Image */}
          <div className="mt-8 max-w-5xl mx-auto" style={{ width: '1200px', maxWidth: '90vw' }}>
            <Image 
              src="/webapp.gif"
              alt="Oreva Web App Preview"
              width={1200}
              height={400}
              className="w-full rounded-3xl border border-border/50 shadow-2xl object-contain"
              unoptimized
            />
          </div>
        </div>
      </main>
      
      <FeaturesSection />
      <WorkflowSection />
      <IntegrationsSection />
      <ContactSection />
    </div>
  )
}