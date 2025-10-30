'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-discord-darker/95 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-discord-blurple">
              Kurai.Dev
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/dayz-servers" className="text-gray-300 hover:text-white transition-colors">
                DayZ Servers
              </Link>
              <Link href="/discord-bots" className="text-gray-300 hover:text-white transition-colors">
                Discord Bots
              </Link>
              <Link href="/rust-servers" className="text-gray-300 hover:text-white transition-colors">
                Rust Servers
              </Link>
              <Link href="/tutorials" className="text-gray-300 hover:text-white transition-colors">
                Tutorials
              </Link>
              <a href="https://discord.gg/4adcpdj6rF" target="_blank" rel="noopener noreferrer" className="bg-discord-blurple hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                Join Discord
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="block text-gray-300 hover:text-white py-2">
                Home
              </Link>
              <Link href="/dayz-servers" className="block text-gray-300 hover:text-white py-2">
                DayZ Servers
              </Link>
              <Link href="/discord-bots" className="block text-gray-300 hover:text-white py-2">
                Discord Bots
              </Link>
              <Link href="/rust-servers" className="block text-gray-300 hover:text-white py-2">
                Rust Servers
              </Link>
              <Link href="/tutorials" className="block text-gray-300 hover:text-white py-2">
                Tutorials
              </Link>
              <a href="https://discord.gg/4adcpdj6rF" target="_blank" rel="noopener noreferrer" className="w-full mt-2 bg-discord-blurple hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors block text-center">
                Join Discord
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}