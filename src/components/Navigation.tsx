'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState, useRef, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Sun, Moon, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Button from './Button'
import { styles, cn } from '@/lib/styles'
import { useLetterShift } from '@/lib/animations'

interface NavItemProps {
  href: string
  label: string
  theme: string | undefined
  onItemRef: (href: string, ref: HTMLAnchorElement | null) => void
}

function NavItem({ href, label, theme, onItemRef }: NavItemProps) {
  const { AnimatedText } = useLetterShift(label)
  const itemRef = useRef<HTMLAnchorElement>(null)
  
  useEffect(() => {
    onItemRef(href, itemRef.current)
  }, [href, onItemRef])
  
  return (
    <Link 
      ref={itemRef}
      href={href} 
      className={cn(
        styles.nav.link,
        "transition-colors duration-2000 ease-in-out relative",
        theme === 'light' ? "text-gray-300 hover:text-white" : "text-white hover:text-gray-200"
      )}
    >
      <AnimatedText />
    </Link>
  )
}

export default function Navigation() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const [itemRefs, setItemRefs] = useState<Record<string, HTMLAnchorElement>>({})
  const [activeIndicator, setActiveIndicator] = useState({ left: 0, width: 0 })
  
  const navItems = [
    { href: '/features', label: 'Features' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/enterprise', label: 'Enterprise' },
    { href: '/integrations', label: 'Integrations' }
  ]

  const handleItemRef = useCallback((href: string, ref: HTMLAnchorElement | null) => {
    if (ref) {
      setItemRefs(prev => ({ ...prev, [href]: ref }))
    }
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const activeItem = itemRefs[pathname]
    if (activeItem) {
      const rect = activeItem.getBoundingClientRect()
      const containerRect = activeItem.closest('.hidden.md\\:flex')?.getBoundingClientRect()
      if (containerRect) {
        setActiveIndicator({
          left: rect.left - containerRect.left - 8,
          width: rect.width + 16
        })
      }
    } else {
      // Hide indicator when not on a nav page
      setActiveIndicator({ left: 0, width: 0 })
    }
  }, [pathname, itemRefs, mounted])

  if (!mounted) {
    return null
  }

  return (
    <nav className="fixed top-8 left-0 right-0 z-50">
      <div className={cn(
        styles.layout.container, 
        "h-16 flex items-center justify-between transition-all duration-2500 ease-in-out rounded-full px-6 mx-4 shadow-xl",
        theme === 'light' ? "bg-black" : "bg-black"
      )}>
        <div className="flex items-center space-x-6">
          <Link href="/" className={cn(
            styles.nav.brand,
            "transition-colors duration-2000 ease-in-out",
            theme === 'light' ? "text-white hover:text-gray-200" : "text-white hover:text-gray-200"
          )}>
            <Image src="/icon.png" alt="Logo" width={24} height={24} />
            <span className="font-semibold text-base">Oreva</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6 relative">
            {/* Sliding active indicator */}
            {activeIndicator.width > 0 && (
              <motion.div
                className="absolute rounded-lg pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.3), 0 2px 8px rgba(0, 0, 0, 0.2)',
                  height: '32px',
                  top: '50%',
                  transform: 'translateY(-50%)'
                }}
                animate={{
                  left: activeIndicator.left,
                  width: activeIndicator.width
                }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 25
                }}
              />
            )}
            
            {navItems.map((item) => (
              <NavItem
                key={item.href}
                href={item.href}
                label={item.label}
                theme={theme}
                onItemRef={handleItemRef}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Button
            variant="ghost"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
            className={cn(
              "transition-colors duration-2000 ease-in-out",
              theme === 'light' ? "text-gray-300 hover:text-white hover:bg-white/10" : "text-white hover:text-gray-200 hover:bg-white/10"
            )}
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          
          <Button
            variant="primary"
            size="sm"
            icon={<ArrowRight className="h-4 w-4" />}
            iconPosition="right"
            className="whitespace-nowrap"
          >
            Get Early Access
          </Button>
        </div>
      </div>
    </nav>
  )
}