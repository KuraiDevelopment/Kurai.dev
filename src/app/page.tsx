import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-discord-darker via-discord-dark to-gray-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-6">
            Welcome to{' '}
            <span className="text-discord-blurple">Kurai.Dev</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Your hub for DayZ Server Development, Discord Bot Creation, and Rust Server Configuration. 
            Join our community of game server developers and Discord specialists.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="https://discord.gg/4adcpdj6rF" target="_blank" rel="noopener noreferrer" className="bg-discord-blurple hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Join Discord
            </a>
            <button className="border border-discord-blurple text-discord-blurple hover:bg-discord-blurple hover:text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
            <div className="text-discord-green text-3xl mb-4">🎮</div>
            <h3 className="text-xl font-semibold text-white mb-3">DayZ Server Development</h3>
            <p className="text-gray-300">
              Complete guides for DayZ server setup, mods, configurations, and scripting. From basic setup to advanced customization.
            </p>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
            <div className="text-discord-yellow text-3xl mb-4">🤖</div>
            <h3 className="text-xl font-semibold text-white mb-3">Discord Bot Development</h3>
            <p className="text-gray-300">
              Learn to create powerful Discord bots with modern frameworks. Code examples, tutorials, and best practices.
            </p>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
            <div className="text-discord-fuchsia text-3xl mb-4">⚙️</div>
            <h3 className="text-xl font-semibold text-white mb-3">Discord Server Setup</h3>
            <p className="text-gray-300">
              Comprehensive Discord server configuration guides, moderation setups, and community management strategies.
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
            <div className="text-discord-red text-3xl mb-4">🦀</div>
            <h3 className="text-xl font-semibold text-white mb-3">Rust Server Config</h3>
            <p className="text-gray-300">
              Master Rust server hosting, plugin development, and server optimization for the best player experience.
            </p>
          </div>
        </div>

        {/* Discord Embed Preview */}
        <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join the Dev Corner</h2>
          <p className="text-gray-300 mb-6">
            Connect with game server developers, Discord bot creators, and share your configurations and scripts!
          </p>
          <div className="inline-flex items-center gap-3 bg-discord-blurple hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-colors cursor-pointer">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.010c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            <a href="https://discord.gg/4adcpdj6rF" target="_blank" rel="noopener noreferrer" className="text-white">
              Join Our Discord Server
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}