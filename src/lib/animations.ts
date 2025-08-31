'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'

// Letter shifting animation hook (without active state styling)
export function useLetterShift(text: string) {
  const [isHovered, setIsHovered] = useState(false)
  
  const letters = text.split('')
  
  const containerVariants = {
    initial: {},
    hovered: {
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.05
      }
    }
  }
  
  const letterVariants = {
    initial: {
      opacity: 1,
      filter: 'blur(0px)'
    },
    hovered: {
      opacity: [1, 0.7, 1],
      filter: ['blur(0px)', 'blur(0.3px)', 'blur(0px)'],
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        times: [0, 0.5, 1]
      }
    }
  }
  
  const AnimatedText = () => React.createElement(
    motion.span,
    {
      className: "relative inline-block cursor-pointer",
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      variants: containerVariants,
      initial: "initial",
      animate: isHovered ? "hovered" : "initial"
    },
    letters.map((letter, index) => React.createElement(
      motion.span,
      {
        key: index,
        className: "inline-block",
        variants: letterVariants,
        style: {
          display: letter === ' ' ? 'inline' : 'inline-block',
          minWidth: letter === ' ' ? '0.25em' : 'auto'
        }
      },
      letter === ' ' ? '\u00A0' : letter
    ))
  )
  
  return {
    AnimatedText,
    isHovered,
    setIsHovered
  }
}

// Glass shimmer effect for backgrounds
export const glassShimmer = {
  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), transparent 50%)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
}

// Subtle glow variants
export const glowVariants = {
  subtle: {
    boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
  },
  medium: {
    boxShadow: '0 0 30px rgba(255, 255, 255, 0.2)',
  },
  strong: {
    boxShadow: '0 0 40px rgba(255, 255, 255, 0.3)',
  }
}