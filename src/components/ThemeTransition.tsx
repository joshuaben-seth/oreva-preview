'use client'

export default function ThemeTransition({ children }: { children: React.ReactNode }) {
  const darkStyle = {
    backgroundImage: `
      radial-gradient(ellipse 120% 120% at 50% 50%, 
        rgba(0, 0, 0, 0.4) 0%, 
        rgba(0, 0, 0, 0.85) 65%, 
        rgba(0, 0, 0, 1) 100%
      ),
      linear-gradient(-45deg, 
        rgba(59, 130, 246, 0.03),
        rgba(139, 92, 246, 0.03), 
        rgba(236, 72, 153, 0.03), 
        rgba(34, 197, 94, 0.03)
      )
    `,
    backgroundSize: 'cover, 400% 400%',
    backgroundPosition: 'center, 0% 50%',
    backgroundRepeat: 'no-repeat, no-repeat',
    animation: 'gradientMove 60s ease infinite',
  }

  return (
    <div 
      className="min-h-screen"
      style={darkStyle}
    >
      {children}
    </div>
  )
}