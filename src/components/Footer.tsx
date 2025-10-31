import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-discord-darker border-t border-gray-700">
      <div className="container mx-auto px-4 py-8">
        {/* Discord Widget Section */}
        <div className="mb-8 text-center">
          <h3 className="text-2xl font-bold text-discord-blurple mb-4">Join Our Community</h3>
          <p className="text-gray-300 mb-6">Connect with other developers, get help, and stay updated!</p>
          <div className="flex justify-center">
            <iframe 
              src="https://discord.com/widget?id=1427428229928452128&theme=dark" 
              width="350" 
              height="500" 
              allowTransparency={true}
              frameBorder="0" 
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              className="rounded-lg border border-gray-700"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-discord-blurple mb-4">Kurai.Dev</h3>
            <p className="text-gray-300 mb-4">
              Your go-to resource for DayZ server development, Discord bot creation, and Rust server configuration.
            </p>
            <div className="flex space-x-4">
              <a href="https://discord.gg/4adcpdj6rF" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-discord-blurple transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.010c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-discord-blurple transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.087.636-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              <Link href="/dayz-servers" className="text-gray-300 hover:text-white transition-colors text-sm">DayZ Servers</Link>
              <Link href="/discord-bots" className="text-gray-300 hover:text-white transition-colors text-sm">Discord Bots</Link>
              <Link href="/rust-servers" className="text-gray-300 hover:text-white transition-colors text-sm">Rust Servers</Link>
              <Link href="/tutorials" className="text-gray-300 hover:text-white transition-colors text-sm">Tutorials</Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
            <div className="grid grid-cols-1 gap-y-2">
              <Link href="/tutorials" className="text-gray-300 hover:text-white transition-colors text-sm">Documentation</Link>
              <Link href="/tutorials" className="text-gray-300 hover:text-white transition-colors text-sm">Guides</Link>
              <Link href="/tutorials" className="text-gray-300 hover:text-white transition-colors text-sm">FAQ</Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400">
            © 2024 Kurai.Dev. All rights reserved. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}