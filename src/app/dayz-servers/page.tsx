import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function DayZServersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-discord-darker via-discord-dark to-gray-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            <span className="text-discord-green">🎮</span> DayZ Server Development
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Complete guides, configurations, and scripts for running successful DayZ servers. 
            From basic setup to advanced modding and custom scripting.
          </p>
        </div>

        {/* Quick Start Guide */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Quick Start Guide</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold text-discord-green mb-4">1. Server Installation</h3>
              <div className="bg-gray-900/50 p-4 rounded-lg mb-4">
                <code className="text-green-400 text-sm">
                  # Download SteamCMD<br/>
                  steamcmd +login anonymous +force_install_dir ./DayZServer +app_update 223350 +quit<br/>
                  <br/>
                  # Start Server<br/>
                  DayZServer_x64.exe -config=serverDZ.cfg -port=2302 -profiles=ServerProfile
                </code>
              </div>
              <p className="text-gray-300">Basic server installation using SteamCMD and initial startup commands.</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold text-discord-yellow mb-4">2. Server Configuration</h3>
              <div className="bg-gray-900/50 p-4 rounded-lg mb-4">
                <code className="text-yellow-400 text-sm">
                  hostname = &quot;Kurai.Dev DayZ Server&quot;;<br/>
                  password = &quot;&quot;;<br/>
                  passwordAdmin = &quot;yourAdminPass&quot;;<br/>
                  maxPlayers = 60;<br/>
                  verifySignatures = 2;<br/>
                  forceSameBuild = 1;
                </code>
              </div>
              <p className="text-gray-300">Essential serverDZ.cfg settings for optimal server performance.</p>
            </div>
          </div>
        </div>

        {/* Popular Mods Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Popular Server Mods</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-3">CF (Community Framework)</h3>
              <p className="text-gray-300 mb-4">Essential modding framework for advanced server features.</p>
              <div className="bg-gray-900/50 p-3 rounded text-xs text-green-400">
                Workshop ID: 1559212036
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-3">Trader</h3>
              <p className="text-gray-300 mb-4">Add trading posts and economy systems to your server.</p>
              <div className="bg-gray-900/50 p-3 rounded text-xs text-green-400">
                Workshop ID: 1590841260
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-3">Base Building Plus</h3>
              <p className="text-gray-300 mb-4">Enhanced base building with additional structures.</p>
              <div className="bg-gray-900/50 p-3 rounded text-xs text-green-400">
                Workshop ID: 1710977250
              </div>
            </div>
          </div>
        </div>

        {/* Custom Scripts Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Custom Script Examples</h2>
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold text-discord-blurple mb-4">Welcome Message Script</h3>
              <div className="bg-gray-900/50 p-4 rounded-lg mb-4 overflow-x-auto">
                <code className="text-blue-400 text-sm whitespace-pre">
{`modded class MissionServer extends MissionBase
{
    void MissionServer()
    {
        // Constructor
    }
    
    override void OnClientNewEvent(PlayerIdentity identity, PlayerBase player)
    {
        super.OnClientNewEvent(identity, player);
        
        string welcomeMsg = "Welcome to Kurai.Dev DayZ Server, " + identity.GetName() + "!";
        Param1<string> msgParam = new Param1<string>(welcomeMsg);
        GetGame().RPCSingleParam(player, ERPCs.RPC_USER_ACTION_MESSAGE, msgParam, true, identity);
    }
}`}
                </code>
              </div>
              <p className="text-gray-300">Custom welcome message that greets players when they join the server.</p>
            </div>
          </div>
        </div>

        {/* Resources Section */}
        <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Additional Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-discord-green mb-3">Configuration Files</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• serverDZ.cfg - Main server configuration</li>
                <li>• globals.xml - Loot spawn settings</li>
                <li>• events.xml - Dynamic event configuration</li>
                <li>• types.xml - Item spawn definitions</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-discord-yellow mb-3">Useful Tools</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• DayZ Editor - Map editing tools</li>
                <li>• Community Offline Mode - Local testing</li>
                <li>• DayZ SA Launcher - Server browser</li>
                <li>• DZSA Launcher - Mod management</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}