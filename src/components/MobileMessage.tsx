'use client';

import { useEffect, useState } from 'react';
import { isMobilePhone } from '@/lib/utils/device';
import Button from '@/components/Button';
import { useEarlyAccess } from '@/components/EarlyAccessProvider';

interface MobileMessageProps {
  children: React.ReactNode;
}

export default function MobileMessage({ children }: MobileMessageProps) {
  const [showMobileMessage, setShowMobileMessage] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const { openEarlyAccess } = useEarlyAccess();

  useEffect(() => {
    setIsClient(true);
    setShowMobileMessage(isMobilePhone());
  }, []);

  // Show nothing during SSR to prevent hydration mismatch
  if (!isClient) {
    return <>{children}</>;
  }

  if (showMobileMessage) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <div className="max-w-md space-y-6 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Oreva</h1>
            <p className="text-sm text-muted-foreground">AI-Powered Project Planning Assistant</p>
          </div>
          
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Oreva helps project managers create comprehensive project plans through intelligent brainstorming sessions, connecting to your existing tools like Jira and Linear.
            </p>
            
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="font-medium mb-2">📱 Mobile Experience</p>
              <p className="text-sm text-muted-foreground">
                For the best experience with our interactive planning interface and visual canvas, please visit us on your laptop or tablet.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col gap-3">
                <Button 
                  size="lg" 
                  className="w-full"
                  onClick={openEarlyAccess}
                >
                  Get Early Access
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full"
                  onClick={() => window.open('https://cal.com/joshuabenseth/30min', '_blank')}
                >
                  Speak With Us
                </Button>
              </div>
              
              <div className="space-y-2 pt-2">
                <p className="text-sm font-medium">Currently in Development</p>
                <p className="text-xs text-muted-foreground">
                  Contact us at <a href="mailto:cloud@oreva.ai" className="text-primary hover:underline">cloud@oreva.ai</a> for updates
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}