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
      </main>
      <Footer />
    </div>
  )
}