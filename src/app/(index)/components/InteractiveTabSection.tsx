'use client'

import { useState } from 'react'
import Button from '@/components/Button'
import FeaturesTab from './tabs/FeaturesTab'
import PricingTab from './tabs/PricingTab'
import UpdatesTab from './tabs/UpdatesTab'
import StudentsTab from './tabs/StudentsTab'
import AppTab from './tabs/AppTab'

const tabs = [
  { id: 'features', label: 'Features', component: FeaturesTab },
  { id: 'pricing', label: 'Pricing', component: PricingTab },
  { id: 'updates', label: 'Updates', component: UpdatesTab },
  { id: 'students', label: 'Students', component: StudentsTab },
  { id: 'app', label: 'App', component: AppTab }
]

export default function InteractiveTabSection() {
  const [activeTab, setActiveTab] = useState('features')

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || FeaturesTab

  return (
    <div className="relative z-10 bg-background max-w-5xl mx-auto">
      <div className="bg-card/80 backdrop-blur-xl rounded-3xl border border-border/50 shadow-2xl overflow-hidden">
        {/* Tab Navigation */}
        <div className="flex border-b border-border/30 bg-muted/20">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 text-sm font-medium transition-all duration-200 hover:bg-muted/40 ${
                activeTab === tab.id 
                  ? 'text-foreground border-b-2 border-primary bg-muted/30' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {tab.label}
            </button>
          ))}
          <div className="ml-auto pr-4 py-4">
            <Button variant="ghost" size="sm">
              Login
            </Button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="p-8 min-h-[400px]">
          <ActiveComponent />
        </div>
      </div>
    </div>
  )
}