import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function RustServersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-discord-darker via-discord-dark to-gray-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            <span className="text-discord-red">🦀</span> Rust Server Configuration
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Master Rust server hosting, plugin development, and optimization. 
            Complete guides for uMod/Oxide plugins and server management.
          </p>
        </div>

        {/* Server Setup Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Server Setup Guide</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold text-discord-red mb-4">1. SteamCMD Installation</h3>
              <div className="bg-gray-900/50 p-4 rounded-lg mb-4 overflow-x-auto">
                <code className="text-red-400 text-sm whitespace-pre">
{`# Linux installation
steamcmd +login anonymous +force_install_dir ./rust_server +app_update 258550 +quit

# Windows batch file
@echo off
steamcmd.exe +login anonymous +force_install_dir "C:\\RustServer" +app_update 258550 +quit
pause`}
                </code>
              </div>
              <p className="text-gray-300">Download and install Rust Dedicated Server using SteamCMD.</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold text-discord-yellow mb-4">2. Server Configuration</h3>
              <div className="bg-gray-900/50 p-4 rounded-lg mb-4 overflow-x-auto">
                <code className="text-yellow-400 text-sm whitespace-pre">
{`# server.cfg
server.hostname "Kurai.Dev Rust Server"
server.description "Custom Rust server with plugins"
server.headerimage "https://your-image-url.jpg"
server.maxplayers 100
server.worldsize 3000
server.seed 12345
server.saveinterval 300
decay.scale 1.0`}
                </code>
              </div>
              <p className="text-gray-300">Essential server configuration settings for optimal performance.</p>
            </div>
          </div>
        </div>

        {/* uMod/Oxide Plugins */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Popular uMod/Oxide Plugins</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-3">AdminHammer</h3>
              <p className="text-gray-300 mb-4">Essential admin tools for server management and moderation.</p>
              <div className="bg-gray-900/50 p-3 rounded text-xs text-red-400">
                /build - Toggle build mode
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-3">Kits</h3>
              <p className="text-gray-300 mb-4">Predefined item kits for players with cooldowns and permissions.</p>
              <div className="bg-gray-900/50 p-3 rounded text-xs text-yellow-400">
                /kit starter - Get starter kit
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-3">Economics</h3>
              <p className="text-gray-300 mb-4">Server economy system with currency and rewards.</p>
              <div className="bg-gray-900/50 p-3 rounded text-xs text-green-400">
                /balance - Check balance
              </div>
            </div>
          </div>
        </div>

        {/* Custom Plugin Development */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Custom Plugin Development</h2>
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold text-discord-blurple mb-4">Basic Plugin Structure</h3>
              <div className="bg-gray-900/50 p-4 rounded-lg mb-4 overflow-x-auto">
                <code className="text-blue-400 text-sm whitespace-pre">
{`using Oxide.Core;
using Oxide.Core.Plugins;

namespace Oxide.Plugins
{
    [Info("WelcomeMessage", "YourName", "1.0.0")]
    [Description("Sends welcome message to new players")]
    public class WelcomeMessage : RustPlugin
    {
        void OnPlayerConnected(BasePlayer player)
        {
            if (player == null) return;
            
            string welcomeMsg = $"Welcome to Kurai.Dev server, {player.displayName}!";
            
            // Send message to all players
            Server.Broadcast(welcomeMsg);
            
            // Send private message to connecting player
            Player.Message(player, "Thanks for joining our community!");
        }
        
        [ChatCommand("info")]
        void InfoCommand(BasePlayer player, string command, string[] args)
        {
            Player.Message(player, "Server Info: Custom Rust server by Kurai.Dev");
        }
    }
}`}
                </code>
              </div>
              <p className="text-gray-300">Basic plugin template with player connection handling and chat commands.</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold text-discord-green mb-4">Advanced Features Example</h3>
              <div className="bg-gray-900/50 p-4 rounded-lg mb-4 overflow-x-auto">
                <code className="text-green-400 text-sm whitespace-pre">
{`// Custom teleportation system
[ChatCommand("home")]
void HomeCommand(BasePlayer player, string command, string[] args)
{
    var homeData = GetPlayerHome(player.userID);
    if (homeData == null)
    {
        Player.Message(player, "You don&apos;t have a home set! Use /sethome");
        return;
    }
    
    // Check cooldown
    if (IsOnCooldown(player.userID, "home"))
    {
        var remaining = GetCooldownRemaining(player.userID, "home");
        Player.Message(player, $"Home cooldown: {remaining} seconds");
        return;
    }
    
    // Teleport player
    TeleportPlayer(player, homeData.Position);
    SetCooldown(player.userID, "home", 300); // 5 minute cooldown
    Player.Message(player, "Teleported to your home!");
}`}
                </code>
              </div>
              <p className="text-gray-300">Advanced plugin features with data persistence and cooldown systems.</p>
            </div>
          </div>
        </div>

        {/* Server Optimization */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Server Optimization</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold text-discord-fuchsia mb-4">Performance Settings</h3>
              <div className="bg-gray-900/50 p-4 rounded-lg mb-4">
                <code className="text-pink-400 text-sm whitespace-pre">
{`# Performance optimization
fps.limit 30
global.maxthreads 8
server.tickrate 30
ai.think true
ai.move true
spawn.min_rate 0.5
spawn.max_rate 1.0`}
                </code>
              </div>
              <p className="text-gray-300">Optimize server performance for better player experience.</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold text-discord-yellow mb-4">Memory Management</h3>
              <div className="bg-gray-900/50 p-4 rounded-lg mb-4">
                <code className="text-yellow-400 text-sm whitespace-pre">
{`# Memory settings
gc.collect 256
pool.mode 2
global.perf 2
debug.checktriggers false
culling.safemode true
graphics.itemskins false`}
                </code>
              </div>
              <p className="text-gray-300">Memory optimization settings to reduce server lag and crashes.</p>
            </div>
          </div>
        </div>

        {/* Resources Section */}
        <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Essential Tools & Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-discord-red mb-3">Server Management</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• uMod/Oxide - Plugin framework</li>
                <li>• RustEdit - Map editing tool</li>
                <li>• Rust Admin - Web panel</li>
                <li>• BattlEye - Anti-cheat system</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-discord-green mb-3">Monitoring & Analytics</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Rust Server Manager - GUI tool</li>
                <li>• Discord webhooks - Server logs</li>
                <li>• Performance monitoring</li>
                <li>• Player statistics tracking</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}