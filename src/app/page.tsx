'use client'

import { useState } from 'react'
import AIOrb from "@/components/AIOrb";

type Mode = 'static' | 'listening' | 'thinking'

export default function Home() {
  const [orbMode, setOrbMode] = useState<Mode>('static')

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex">
      {/* Left side - AI Orb Canvas */}
      <div className="w-1/2 h-screen relative">
        <AIOrb mode={orbMode} className="absolute inset-0" />
        
        {/* Mode controls for testing */}
        <div className="absolute top-4 left-4 z-10 space-y-2">
          <button 
            onClick={() => setOrbMode('static')}
            className={`px-3 py-1 rounded text-sm ${orbMode === 'static' ? 'bg-blue-600' : 'bg-gray-700'}`}
          >
            Static
          </button>
          <button 
            onClick={() => setOrbMode('listening')}
            className={`px-3 py-1 rounded text-sm ${orbMode === 'listening' ? 'bg-blue-600' : 'bg-gray-700'}`}
          >
            Listening Now
          </button>
          <button 
            onClick={() => setOrbMode('thinking')}
            className={`px-3 py-1 rounded text-sm ${orbMode === 'thinking' ? 'bg-blue-600' : 'bg-gray-700'}`}
          >
            Thinking
          </button>
        </div>
      </div>

      {/* Right side - Reserved for web interfaces */}
      <div className="w-1/2 h-screen bg-gray-900/50 border-l border-gray-700 flex items-center justify-center">
        <div className="text-center text-gray-400">
          <h2 className="text-xl mb-2">Interface Area</h2>
          <p className="text-sm">Reserved for AI-generated web interfaces</p>
        </div>
      </div>
    </div>
  );
}
