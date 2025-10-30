import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function TutorialsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-discord-darker via-discord-dark to-gray-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            <span className="text-discord-blurple">📚</span> Tutorials & Guides
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive tutorials covering all aspects of game server development, 
            Discord setup, and community management.
          </p>
        </div>

        {/* Tutorial Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 text-center">
            <div className="text-discord-green text-4xl mb-4">🎮</div>
            <h3 className="text-lg font-semibold text-white mb-2">DayZ Tutorials</h3>
            <p className="text-gray-300 text-sm">Server setup, modding, scripting</p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 text-center">
            <div className="text-discord-yellow text-4xl mb-4">🤖</div>
            <h3 className="text-lg font-semibold text-white mb-2">Discord Bots</h3>
            <p className="text-gray-300 text-sm">Bot development, commands, hosting</p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 text-center">
            <div className="text-discord-red text-4xl mb-4">🦀</div>
            <h3 className="text-lg font-semibold text-white mb-2">Rust Servers</h3>
            <p className="text-gray-300 text-sm">Plugin development, optimization</p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 text-center">
            <div className="text-discord-fuchsia text-4xl mb-4">⚙️</div>
            <h3 className="text-lg font-semibold text-white mb-2">Discord Setup</h3>
            <p className="text-gray-300 text-sm">Server configuration, moderation</p>
          </div>
        </div>

        {/* Featured Tutorials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Featured Tutorials</h2>
          <div className="space-y-6">
            {/* DayZ Tutorial */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <div className="flex items-start gap-4">
                <div className="text-discord-green text-3xl">🎮</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">Complete DayZ Server Setup Guide</h3>
                  <p className="text-gray-300 mb-4">
                    Step-by-step tutorial covering DayZ server installation, configuration, mod installation, 
                    and basic scripting. Perfect for beginners.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-discord-green/20 text-discord-green px-3 py-1 rounded-full text-sm">Beginner</span>
                    <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">30 mins</span>
                    <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">DayZ</span>
                  </div>
                  <Link href="/tutorials/dayz-server-setup" className="bg-discord-green hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors">
                    View Tutorial
                  </Link>
                </div>
              </div>
            </div>

            {/* Discord Bot Tutorial */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <div className="flex items-start gap-4">
                <div className="text-discord-yellow text-3xl">🤖</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">Build Your First Discord Bot</h3>
                  <p className="text-gray-300 mb-4">
                    Learn Discord.js fundamentals, create slash commands, handle events, and deploy your bot. 
                    Includes practical examples and best practices.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-discord-yellow/20 text-discord-yellow px-3 py-1 rounded-full text-sm">Beginner</span>
                    <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">45 mins</span>
                    <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Discord.js</span>
                  </div>
                  <Link href="/tutorials/discord-bot-basics" className="bg-discord-yellow hover:bg-yellow-600 text-black px-4 py-2 rounded-lg transition-colors">
                    View Tutorial
                  </Link>
                </div>
              </div>
            </div>

            {/* Rust Tutorial */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <div className="flex items-start gap-4">
                <div className="text-discord-red text-3xl">🦀</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">Rust Server Plugin Development</h3>
                  <p className="text-gray-300 mb-4">
                    Master uMod/Oxide plugin development with C#. Create custom commands, handle events, 
                    and implement advanced features for your Rust server.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-discord-red/20 text-discord-red px-3 py-1 rounded-full text-sm">Intermediate</span>
                    <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">60 mins</span>
                    <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">C# / Oxide</span>
                  </div>
                  <Link href="/tutorials/rust-plugins" className="bg-discord-red hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors">
                    View Tutorial
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Reference Guides */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Quick Reference Guides</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold text-discord-blurple mb-4">Essential Commands</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-semibold text-discord-green mb-1">DayZ Server Commands</h4>
                  <div className="bg-gray-900/50 p-2 rounded text-xs text-green-400">
                    #restart - Restart server<br/>
                    #kick playerName - Kick player<br/>
                    #ban playerName - Ban player
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-discord-yellow mb-1">Discord Bot Commands</h4>
                  <div className="bg-gray-900/50 p-2 rounded text-xs text-yellow-400">
                    /ping - Test bot response<br/>
                    /help - Show available commands<br/>
                    /serverinfo - Display server info
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold text-discord-fuchsia mb-4">Configuration Snippets</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-semibold text-discord-red mb-1">Rust Server Optimization</h4>
                  <div className="bg-gray-900/50 p-2 rounded text-xs text-red-400">
                    fps.limit 30<br/>
                    server.tickrate 30<br/>
                    global.maxthreads 8
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-discord-blurple mb-1">Discord Bot Intents</h4>
                  <div className="bg-gray-900/50 p-2 rounded text-xs text-blue-400">
                    GatewayIntentBits.Guilds<br/>
                    GatewayIntentBits.GuildMessages<br/>
                    GatewayIntentBits.MessageContent
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Path */}
        <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Recommended Learning Path</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-discord-green/20 text-discord-green rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-lg font-semibold text-white mb-2">Start with Basics</h3>
              <p className="text-gray-300 text-sm">Learn fundamental concepts of server hosting and Discord development.</p>
            </div>
            <div className="text-center">
              <div className="bg-discord-yellow/20 text-discord-yellow rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-lg font-semibold text-white mb-2">Practice with Examples</h3>
              <p className="text-gray-300 text-sm">Follow along with code examples and build your first projects.</p>
            </div>
            <div className="text-center">
              <div className="bg-discord-blurple/20 text-discord-blurple rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-lg font-semibold text-white mb-2">Build Advanced Features</h3>
              <p className="text-gray-300 text-sm">Create custom solutions and optimize your servers for production.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}