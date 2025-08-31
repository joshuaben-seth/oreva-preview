// Standardized style classes for the application
// This file centralizes commonly used Tailwind classes to maintain consistency

export const styles = {
  // Button variants
  button: {
    primary: "bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-all duration-200 cursor-pointer",
    secondary: "bg-secondary text-secondary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-secondary/80 transition-all duration-200 cursor-pointer",
    ghost: "px-4 py-2 rounded-md text-sm font-medium hover:bg-secondary transition-all duration-200 cursor-pointer",
    icon: "p-2 rounded-md hover:bg-secondary transition-all duration-200 cursor-pointer",
  },

  // Navigation styles
  nav: {
    link: "text-sm font-medium hover:text-primary transition-colors duration-200 cursor-pointer",
    brand: "flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200 cursor-pointer",
    container: "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
  },

  // Layout styles
  layout: {
    container: "max-w-6xl mx-auto px-4",
    section: "min-h-screen bg-background",
    centered: "max-w-4xl mx-auto text-center space-y-8",
  },

  // Typography
  text: {
    hero: "text-5xl md:text-7xl font-bold tracking-tight",
    subtitle: "text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto",
    heading: "text-4xl font-bold",
  },

  typography: {
    h1: "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight",
    h2: "text-3xl md:text-4xl font-bold tracking-tight",
    h3: "text-xl md:text-2xl font-semibold",
    body: "text-base md:text-lg leading-relaxed text-muted-foreground",
  },

  components: {
    card: "bg-card border border-border rounded-lg shadow-sm",
  },

  // Animations
  animation: {
    fadeIn: "animate-in fade-in duration-500",
    slideUp: "animate-in slide-in-from-bottom-4 duration-500",
    scaleHover: "hover:scale-105 transition-transform duration-200",
  },

  // Common interactive elements
  interactive: {
    hover: "hover:opacity-80 transition-opacity duration-200 cursor-pointer",
    focus: "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
    disabled: "opacity-50 cursor-not-allowed",
  },
} as const

// Utility function to merge classes
export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ')
}