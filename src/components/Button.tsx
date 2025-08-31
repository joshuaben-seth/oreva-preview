'use client'

import { forwardRef } from 'react'
import { styles, cn } from '@/lib/styles'

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onDrag' | 'onDragEnd' | 'onDragStart' | 'onAnimationStart' | 'onAnimationEnd' | 'onAnimationIteration'> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'icon'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  animate?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'right',
  animate = true,
  className,
  disabled,
  ...props
}, ref) => {
  const focusClasses = 'focus:outline-none'
  const disabledClasses = disabled ? styles.interactive.disabled : ''
  
  const variantClasses = {
    primary: 'bg-gradient-to-br from-gray-800/90 via-gray-900/80 to-gray-950/70 hover:from-gray-700/95 hover:via-gray-800/85 hover:to-gray-900/75 text-white dark:from-gray-600/25 dark:via-gray-700/15 dark:to-gray-800/10 dark:hover:from-gray-500/35 dark:hover:via-gray-600/20 dark:hover:to-gray-700/15 backdrop-blur-2xl shadow-2xl hover:shadow-4xl relative overflow-hidden border border-white/20 dark:border-white/10',
    secondary: 'bg-gradient-to-br from-gray-200/60 via-gray-100/40 to-gray-50/30 hover:from-gray-300/70 hover:via-gray-200/50 hover:to-gray-100/40 text-gray-800 dark:from-black/15 dark:via-black/8 dark:to-black/5 dark:hover:from-black/20 dark:hover:via-black/12 dark:hover:to-black/8 dark:text-foreground backdrop-blur-2xl shadow-xl hover:shadow-2xl relative overflow-hidden',
    ghost: 'bg-transparent hover:bg-gray-100/50 dark:hover:bg-white/8 text-foreground',
    icon: 'bg-gradient-to-br from-gray-200/40 via-gray-100/30 to-gray-50/20 hover:from-gray-300/50 hover:via-gray-200/40 hover:to-gray-100/30 text-gray-700 dark:from-black/15 dark:via-black/8 dark:to-black/5 dark:hover:from-black/20 dark:hover:via-black/12 dark:hover:to-black/8 dark:text-foreground backdrop-blur-2xl shadow-lg hover:shadow-xl relative overflow-hidden',
  }
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs rounded-lg',
    md: 'px-4 py-2 text-sm rounded-xl',
    lg: 'px-6 py-3 text-base rounded-xl',
  }

  const buttonContent = (
    <>
      {icon && iconPosition === 'left' && icon}
      {children}
      {icon && iconPosition === 'right' && icon}
    </>
  )

  if (animate && !disabled) {
    return (
      <button
        ref={ref}
        className={cn(
          'flex items-center justify-center gap-2 font-medium cursor-pointer transition-all duration-700 ease-in-out group isolate contain-layout contain-paint',
          variantClasses[variant],
          focusClasses,
          sizeClasses[size],
          disabledClasses,
          className
        )}
        disabled={disabled}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">
          {buttonContent}
        </span>
        
        {variant === 'primary' && (
          <>
            {/* Solid background base */}
            <div className="absolute inset-0 bg-gray-950 dark:bg-gray-800 rounded-xl" />
            
            {/* Glass-like resting state effects */}
            <div 
              className="absolute top-0 left-0 right-0 h-px opacity-60"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)',
              }}
            />
            
            <div 
              className="absolute top-1 left-1 right-1 h-px opacity-40"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent)',
              }}
            />
            
            <div 
              className="absolute bottom-0 left-0 right-0 h-px opacity-30"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), transparent)',
              }}
            />
            
            <div 
              className="absolute inset-1 opacity-25 rounded-lg"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, transparent 50%)',
              }}
            />
            
            {/* Subtle inner glow */}
            <div 
              className="absolute inset-0 opacity-20 rounded-xl"
              style={{
                background: 'radial-gradient(ellipse at top, rgba(255, 255, 255, 0.3), transparent 70%)',
              }}
            />
            
            {/* Enhanced Hover Effects */}
            {/* Top Edge Glass Shine */}
            <div 
              className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-800 ease-out"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.9), transparent)',
              }}
            />
            
            {/* Bottom Lustrous Glow */}
            <div 
              className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-out"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.8), transparent)',
                filter: 'blur(1px)',
              }}
            />
            
            {/* Animated Shimmer Sweep */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-600 ease-out overflow-hidden"
            >
              <div 
                className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1200 ease-in-out"
                style={{
                  background: 'linear-gradient(105deg, transparent 40%, rgba(255, 255, 255, 0.6) 50%, transparent 60%)',
                }}
              />
            </div>
          </>
        )}
      </button>
    )
  }

  return (
    <button
      ref={ref}
      className={cn(
        'flex items-center justify-center gap-2 font-medium cursor-pointer transition-all duration-700 ease-in-out isolate contain-layout contain-paint',
        variantClasses[variant],
        focusClasses,
        sizeClasses[size],
        disabledClasses,
        className
      )}
      disabled={disabled}
      {...props}
    >
      {buttonContent}
    </button>
  )
})

Button.displayName = 'Button'

export default Button