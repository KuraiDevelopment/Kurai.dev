import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function RustPluginsTutorial() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-discord-darker via-discord-dark to-gray-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link href="/tutorials" className="text-discord-blurple hover:text-blue-400 transition-colors">
            ← Back to Tutorials
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-discord-red text-4xl">🦀</span>
            <div>
              <h1 className="text-4xl font-bold text-white">Rust Server Plugin Development</h1>
              <div className="flex gap-3 mt-2">
                <span className="bg-discord-red/20 text-discord-red px-3 py-1 rounded-full text-sm">Intermediate</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">60 mins</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">C# / Oxide</span>
              </div>
            </div>
          </div>
          <p className="text-xl text-gray-300">
            Master uMod/Oxide plugin development with C#. Create custom commands, handle events, 
            and implement advanced features for your Rust server.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Table of Contents</h2>
          <ol className="space-y-2 text-gray-300">
            <li><a href="#prerequisites" className="text-discord-blurple hover:text-blue-400">1. Prerequisites & Setup</a></li>
            <li><a href="#oxide-basics" className="text-discord-blurple hover:text-blue-400">2. Oxide Framework Basics</a></li>
            <li><a href="#first-plugin" className="text-discord-blurple hover:text-blue-400">3. Your First Plugin</a></li>
            <li><a href="#commands" className="text-discord-blurple hover:text-blue-400">4. Chat Commands</a></li>
            <li><a href="#events" className="text-discord-blurple hover:text-blue-400">5. Event Handling</a></li>
            <li><a href="#data-storage" className="text-discord-blurple hover:text-blue-400">6. Data Storage</a></li>
            <li><a href="#advanced" className="text-discord-blurple hover:text-blue-400">7. Advanced Features</a></li>
          </ol>
        </div>

        {/* Prerequisites */}
        <section id="prerequisites" className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">1. Prerequisites & Setup</h2>
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold text-discord-red mb-4">Requirements</h3>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li>• <strong>Rust Server:</strong> Running with uMod/Oxide installed</li>
              <li>• <strong>C# Knowledge:</strong> Basic understanding of C# programming</li>
              <li>• <strong>IDE:</strong> Visual Studio, VS Code, or JetBrains Rider</li>
              <li>• <strong>uMod References:</strong> Oxide.Core.dll and Assembly-CSharp.dll</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-discord-yellow mb-4">Setting Up Development Environment</h3>
            <div className="bg-gray-900/50 p-4 rounded-lg mb-4 overflow-x-auto">
              <code className="text-yellow-400 text-sm whitespace-pre">
{`# Download required DLLs from your server
/rust_server/RustDedicated_Data/Managed/
├── Assembly-CSharp.dll
├── UnityEngine.dll
└── mscorlib.dll

# Download Oxide references
/rust_server/oxide/
├── Oxide.Core.dll
├── Oxide.Rust.dll
└── Oxide.Unity.dll`}
              </code>
            </div>
            
            <div className="bg-blue-900/20 border border-blue-500/30 p-4 rounded-lg">
              <p className="text-blue-300 text-sm">
                <strong>💡 Tip:</strong> Create a new C# Class Library project in Visual Studio and reference these DLLs for IntelliSense support.
              </p>
            </div>
          </div>
        </section>

        {/* Oxide Basics */}
        <section id="oxide-basics" className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">2. Oxide Framework Basics</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold text-discord-blurple mb-4">Plugin Structure Overview</h3>
            
            <div className="bg-gray-900/50 p-4 rounded-lg mb-4 overflow-x-auto">
              <code className="text-blue-400 text-sm whitespace-pre">
{`using Oxide.Core;
using Oxide.Core.Plugins;

namespace Oxide.Plugins
{
    [Info("PluginName", "YourName", "1.0.0")]
    [Description("Plugin description")]
    public class PluginName : RustPlugin
    {
        // Plugin code goes here
    }
}`}
              </code>
            </div>

            <h3 className="text-xl font-semibold text-discord-green mb-4">Key Components</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-white mb-2">Plugin Attributes</h4>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• <strong>[Info]:</strong> Plugin metadata</li>
                  <li>• <strong>[Description]:</strong> Plugin description</li>
                  <li>• <strong>[Permission]:</strong> Define permissions</li>
                  <li>• <strong>[Command]:</strong> Console commands</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Core Methods</h4>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• <strong>Init():</strong> Plugin initialization</li>
                  <li>• <strong>Loaded():</strong> After plugin loads</li>
                  <li>• <strong>Unload():</strong> Plugin cleanup</li>
                  <li>• <strong>OnServerInitialized():</strong> Server ready</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* First Plugin */}
        <section id="first-plugin" className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">3. Your First Plugin</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold text-discord-fuchsia mb-4">Welcome Message Plugin</h3>
            
            <div className="bg-gray-900/50 p-4 rounded-lg mb-4 overflow-x-auto">
              <code className="text-pink-400 text-sm whitespace-pre">
{`using System;
using Oxide.Core;
using Oxide.Core.Plugins;

namespace Oxide.Plugins
{
    [Info("WelcomeMessage", "Kurai", "1.0.0")]
    [Description("Sends welcome messages to new players")]
    public class WelcomeMessage : RustPlugin
    {
        #region Configuration
        private Configuration config;
        
        private class Configuration
        {
            public string WelcomeMessage = "Welcome to Kurai.Dev Rust Server, {player}!";
            public bool BroadcastToAll = true;
            public int DelaySeconds = 5;
        }
        
        protected override void LoadConfig()
        {
            base.LoadConfig();
            config = Config.ReadObject<Configuration>();
            SaveConfig();
        }
        
        protected override void SaveConfig() => Config.WriteObject(config);
        
        protected override void LoadDefaultConfig() => config = new Configuration();
        #endregion
        
        #region Hooks
        void OnPlayerConnected(BasePlayer player)
        {
            if (player == null) return;
            
            // Delay the welcome message
            timer.Once(config.DelaySeconds, () =>
            {
                if (player != null && player.IsConnected)
                {
                    SendWelcomeMessage(player);
                }
            });
        }
        #endregion
        
        #region Helper Methods
        private void SendWelcomeMessage(BasePlayer player)
        {
            string message = config.WelcomeMessage.Replace("{player}", player.displayName);
            
            if (config.BroadcastToAll)
            {
                // Send to all players
                Server.Broadcast(message);
            }
            else
            {
                // Send only to the connecting player
                Player.Message(player, message);
            }
        }
        #endregion
    }
}`}
              </code>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-white mb-2">Installation Steps</h4>
              <ol className="space-y-2 text-gray-300 text-sm">
                <li>1. Save the code as <code>WelcomeMessage.cs</code></li>
                <li>2. Upload to <code>/oxide/plugins/</code> folder</li>
                <li>3. The plugin will auto-compile and load</li>
                <li>4. Check <code>/oxide/config/WelcomeMessage.json</code> for configuration</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Commands */}
        <section id="commands" className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">4. Chat Commands</h2>
          
          <div className="space-y-6">
            {/* Basic Commands */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold text-discord-green mb-4">Basic Chat Commands</h3>
              
              <div className="bg-gray-900/50 p-4 rounded-lg overflow-x-auto">
                <code className="text-green-400 text-sm whitespace-pre">
{`[ChatCommand("info")]
void InfoCommand(BasePlayer player, string command, string[] args)
{
    Player.Message(player, "🌟 Kurai.Dev Rust Server");
    Player.Message(player, "📊 Players Online: " + BasePlayer.activePlayerList.Count);
    Player.Message(player, "⏰ Server Time: " + DateTime.Now.ToString("HH:mm"));
}

[ChatCommand("kit")]
void KitCommand(BasePlayer player, string command, string[] args)
{
    // Check if player already received kit
    if (HasReceievedKit(player))
    {
        Player.Message(player, "❌ You have already received your starter kit!");
        return;
    }
    
    // Give starter items
    GiveStarterKit(player);
    SaveKitData(player);
    Player.Message(player, "✅ Starter kit received!");
}

[ChatCommand("home")]
void HomeCommand(BasePlayer player, string command, string[] args)
{
    if (args.Length == 0)
    {
        TeleportToHome(player);
    }
    else if (args[0].ToLower() == "set")
    {
        SetHome(player);
    }
    else
    {
        Player.Message(player, "Usage: /home or /home set");
    }
}

private bool HasReceievedKit(BasePlayer player)
{
    // Check data file or use oxide data storage
    return Interface.Oxide.DataFileSystem.ExistsDatafile(\$"kits/{player.userID}");
}

private void GiveStarterKit(BasePlayer player)
{
    // Give items to player
    player.inventory.GiveItem(ItemManager.CreateByName("wood", 1000));
    player.inventory.GiveItem(ItemManager.CreateByName("stones", 1000));
    player.inventory.GiveItem(ItemManager.CreateByName("cloth", 100));
    player.inventory.GiveItem(ItemManager.CreateByName("metal.ore", 500));
}

private void SaveKitData(BasePlayer player)
{
    var data = new { received = DateTime.Now };
    Interface.Oxide.DataFileSystem.WriteObject(\$"kits/{player.userID}", data);
}`}
                </code>
              </div>
            </div>

            {/* Advanced Commands */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold text-discord-yellow mb-4">Advanced Commands with Permissions</h3>
              
              <div className="bg-gray-900/50 p-4 rounded-lg overflow-x-auto">
                <code className="text-yellow-400 text-sm whitespace-pre">
{`// Define permissions in Init()
void Init()
{
    permission.RegisterPermission("welcomemessage.admin", this);
    permission.RegisterPermission("welcomemessage.vip", this);
}

[ChatCommand("heal")]
void HealCommand(BasePlayer player, string command, string[] args)
{
    if (!permission.UserHasPermission(player.UserIDString, "welcomemessage.admin"))
    {
        Player.Message(player, "❌ You don&apos;t have permission to use this command!");
        return;
    }
    
    BasePlayer target = player;
    
    // Check if admin wants to heal another player
    if (args.Length > 0)
    {
        target = FindPlayer(args[0]);
        if (target == null)
        {
            Player.Message(player, "❌ Player not found!");
            return;
        }
    }
    
    // Heal the target
    target.Heal(target.MaxHealth());
    target.metabolism.hydration.value = target.metabolism.hydration.max;
    target.metabolism.calories.value = target.metabolism.calories.max;
    
    Player.Message(player, \$"✅ {target.displayName} has been healed!");
    if (target != player)
        Player.Message(target, "✅ You have been healed by an admin!");
}

[ChatCommand("tp")]
void TeleportCommand(BasePlayer player, string command, string[] args)
{
    if (!permission.UserHasPermission(player.UserIDString, "welcomemessage.admin"))
    {
        Player.Message(player, "❌ No permission!");
        return;
    }
    
    if (args.Length < 1)
    {
        Player.Message(player, "Usage: /tp <player>");
        return;
    }
    
    BasePlayer target = FindPlayer(args[0]);
    if (target == null)
    {
        Player.Message(player, "❌ Player not found!");
        return;
    }
    
    player.Teleport(target.transform.position);
    Player.Message(player, \$"📍 Teleported to {target.displayName}");
}

private BasePlayer FindPlayer(string nameOrId)
{
    foreach (var player in BasePlayer.activePlayerList)
    {
        if (player.displayName.ToLower().Contains(nameOrId.ToLower()) || 
            player.UserIDString == nameOrId)
            return player;
    }
    return null;
}`}
                </code>
              </div>
            </div>
          </div>
        </section>

        {/* Events */}
        <section id="events" className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">5. Event Handling</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold text-discord-blurple mb-4">Common Rust Events</h3>
            
            <div className="bg-gray-900/50 p-4 rounded-lg overflow-x-auto">
              <code className="text-blue-400 text-sm whitespace-pre">
{`// Player events
void OnPlayerConnected(BasePlayer player)
{
    Puts(\$"{player.displayName} connected to the server");
}

void OnPlayerDisconnected(BasePlayer player, string reason)
{
    Puts(\$"{player.displayName} disconnected: {reason}");
}

void OnPlayerDeath(BasePlayer player, HitInfo info)
{
    if (player == null) return;
    
    string deathMessage = \$"{player.displayName} died";
    
    if (info?.InitiatorPlayer != null)
    {
        deathMessage = \$"{player.displayName} was killed by {info.InitiatorPlayer.displayName}";
        
        // Give reward to killer
        info.InitiatorPlayer.inventory.GiveItem(ItemManager.CreateByName("scrap", 10));
        Player.Message(info.InitiatorPlayer, "💰 +10 scrap for the kill!");
    }
    
    Server.Broadcast(deathMessage);
}

// Item/Entity events
void OnEntityBuilt(Planner plan, GameObject go)
{
    var player = plan.GetOwnerPlayer();
    var entity = go.GetComponent<BaseEntity>();
    
    if (player != null && entity != null)
    {
        Puts(\$"{player.displayName} built a {entity.ShortPrefabName}");
        
        // Example: Prevent building in certain areas
        if (IsInNoBuilddZone(entity.transform.position))
        {
            Player.Message(player, "❌ Building is not allowed in this area!");
            entity.Kill();
            return;
        }
    }
}

void OnLootEntity(BasePlayer player, BaseEntity entity)
{
    if (entity is LootContainer)
    {
        Player.Message(player, "🎁 You opened a loot container!");
        
        // Log loot events for admin monitoring
        Puts(\$"{player.displayName} looted {entity.ShortPrefabName} at {entity.transform.position}");
    }
}

// Chat events
void OnPlayerChat(BasePlayer player, string message, ConVar.Chat.ChatChannel channel)
{
    // Filter bad words
    if (ContainsBadWords(message))
    {
        Player.Message(player, "❌ Please watch your language!");
        return false; // Prevent message from being sent
    }
    
    // VIP chat colors
    if (permission.UserHasPermission(player.UserIDString, "welcomemessage.vip"))
    {
        // Modify message for VIP players
        var newMessage = \$"<color=#FFD700>[VIP]</color> {player.displayName}: {message}";
        Server.Broadcast(newMessage);
        return false; // Prevent original message
    }
    
    return true; // Allow message
}

private bool IsInNoBuilddZone(Vector3 position)
{
    // Define no-build zones (example coordinates)
    var noBuildZones = new[]
    {
        new { center = new Vector3(0, 0, 0), radius = 100f }
    };
    
    foreach (var zone in noBuildZones)
    {
        if (Vector3.Distance(position, zone.center) < zone.radius)
            return true;
    }
    
    return false;
}

private bool ContainsBadWords(string message)
{
    var badWords = new[] { "badword1", "badword2" }; // Add your list
    return badWords.Any(word => message.ToLower().Contains(word));
}`}
              </code>
            </div>
          </div>
        </section>

        {/* Data Storage */}
        <section id="data-storage" className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">6. Data Storage</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold text-discord-fuchsia mb-4">Persistent Data Management</h3>
            
            <div className="bg-gray-900/50 p-4 rounded-lg mb-4 overflow-x-auto">
              <code className="text-pink-400 text-sm whitespace-pre">
{`// Data classes
public class PlayerData
{
    public string Name { get; set; }
    public DateTime LastSeen { get; set; }
    public Vector3 HomeLocation { get; set; }
    public int PlayTime { get; set; }
    public List<string> Kits { get; set; } = new List<string>();
}

public class ServerData
{
    public Dictionary<ulong, PlayerData> Players { get; set; } = new Dictionary<ulong, PlayerData>();
    public DateTime LastWipe { get; set; }
    public int TotalConnections { get; set; }
}

// Storage management
private ServerData serverData;
private const string DataFileName = "KuraiData";

void Loaded()
{
    // Load data on plugin start
    serverData = Interface.Oxide.DataFileSystem.ReadObject<ServerData>(DataFileName);
}

void Unload()
{
    // Save data on plugin unload
    SaveData();
}

void OnServerSave()
{
    // Save data when server saves
    SaveData();
}

private void SaveData()
{
    Interface.Oxide.DataFileSystem.WriteObject(DataFileName, serverData);
}

// Player data methods
private PlayerData GetPlayerData(BasePlayer player)
{
    if (!serverData.Players.ContainsKey(player.userID))
    {
        serverData.Players[player.userID] = new PlayerData
        {
            Name = player.displayName,
            LastSeen = DateTime.Now
        };
    }
    
    return serverData.Players[player.userID];
}

private void UpdatePlayerData(BasePlayer player)
{
    var data = GetPlayerData(player);
    data.Name = player.displayName;
    data.LastSeen = DateTime.Now;
    SaveData();
}

// Example: Home system with data storage
[ChatCommand("sethome")]
void SetHomeCommand(BasePlayer player, string command, string[] args)
{
    var data = GetPlayerData(player);
    data.HomeLocation = player.transform.position;
    SaveData();
    
    Player.Message(player, "🏠 Home location set!");
}

[ChatCommand("home")]
void HomeCommand(BasePlayer player, string command, string[] args)
{
    var data = GetPlayerData(player);
    
    if (data.HomeLocation == Vector3.zero)
    {
        Player.Message(player, "❌ You haven't set a home location! Use /sethome");
        return;
    }
    
    player.Teleport(data.HomeLocation);
    Player.Message(player, "🏠 Teleported to your home!");
}

// Stats tracking
void OnPlayerConnected(BasePlayer player)
{
    UpdatePlayerData(player);
    serverData.TotalConnections++;
}

[ChatCommand("stats")]
void StatsCommand(BasePlayer player, string command, string[] args)
{
    var data = GetPlayerData(player);
    
    Player.Message(player, "📊 Your Stats:");
    Player.Message(player, \$"👤 Name: {data.Name}");
    Player.Message(player, \$"🕒 Last Seen: {data.LastSeen}");
    Player.Message(player, \$"🎮 Play Time: {data.PlayTime} minutes");
    Player.Message(player, \$"📦 Kits Used: {data.Kits.Count}");
}`}
              </code>
            </div>
          </div>
        </section>

        {/* Advanced Features */}
        <section id="advanced" className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">7. Advanced Features</h2>
          
          <div className="space-y-6">
            {/* Timers and Coroutines */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold text-discord-green mb-4">Timers and Scheduled Tasks</h3>
              
              <div className="bg-gray-900/50 p-4 rounded-lg overflow-x-auto">
                <code className="text-green-400 text-sm whitespace-pre">
{`// Timer examples
private Timer broadcastTimer;
private Timer saveTimer;

void OnServerInitialized()
{
    // Repeating broadcast every 5 minutes
    broadcastTimer = timer.Repeat(300f, 0, () =>
    {
        Server.Broadcast("🌟 Welcome to Kurai.Dev Rust Server! Type /info for commands");
    });
    
    // Auto-save every 10 minutes
    saveTimer = timer.Repeat(600f, 0, SaveData);
}

void Unload()
{
    // Clean up timers
    broadcastTimer?.Destroy();
    saveTimer?.Destroy();
}

// Cooldown system
private Dictionary<ulong, DateTime> teleportCooldowns = new Dictionary<ulong, DateTime>();

[ChatCommand("tpr")]
void TeleportRequestCommand(BasePlayer player, string command, string[] args)
{
    // Check cooldown
    if (teleportCooldowns.ContainsKey(player.userID))
    {
        var timeSince = DateTime.Now - teleportCooldowns[player.userID];
        var cooldownTime = TimeSpan.FromMinutes(5);
        
        if (timeSince < cooldownTime)
        {
            var remaining = cooldownTime - timeSince;
            Player.Message(player, \$"⏱️ Teleport cooldown: {remaining.Minutes}m {remaining.Seconds}s");
            return;
        }
    }
    
    // Process teleport request...
    teleportCooldowns[player.userID] = DateTime.Now;
}`}
                </code>
              </div>
            </div>

            {/* Web Requests */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold text-discord-yellow mb-4">Web API Integration</h3>
              
              <div className="bg-gray-900/50 p-4 rounded-lg overflow-x-auto">
                <code className="text-yellow-400 text-sm whitespace-pre">
{`// Discord webhook integration
private void SendDiscordMessage(string message)
{
    var webhookUrl = "YOUR_DISCORD_WEBHOOK_URL";
    var payload = new
    {
        content = message,
        username = "Rust Server Bot"
    };
    
    webrequest.Enqueue(webhookUrl, JsonConvert.SerializeObject(payload), 
        (code, response) =>
        {
            if (code != 200)
                Puts(\$"Discord webhook failed: {code}");
        }, this, RequestMethod.POST, 
        new Dictionary<string, string>
        {
            {"Content-Type", "application/json"}
        });
}

// Usage in events
void OnPlayerConnected(BasePlayer player)
{
    SendDiscordMessage(\$"📢 {player.displayName} joined the server!");
}

void OnPlayerDeath(BasePlayer player, HitInfo info)
{
    if (info?.InitiatorPlayer != null)
    {
        SendDiscordMessage(\$"💀 {player.displayName} was killed by {info.InitiatorPlayer.displayName}!");
    }
}

// Steam API integration (check VAC bans)
void OnPlayerConnected(BasePlayer player)
{
    CheckPlayerBans(player);
}

private void CheckPlayerBans(BasePlayer player)
{
    var steamApiKey = "YOUR_STEAM_API_KEY";
    var url = \$"https://api.steampowered.com/ISteamUser/GetPlayerBans/v1/?key={steamApiKey}&steamids={player.userID}";
    
    webrequest.Enqueue(url, null, (code, response) =>
    {
        if (code == 200)
        {
            // Parse JSON response and check for bans
            // Kick player if they have recent VAC bans
        }
    }, this);
}`}
                </code>
              </div>
            </div>
          </div>
        </section>

        {/* Success Message */}
        <div className="bg-green-900/20 border border-green-500/30 p-6 rounded-xl mb-12">
          <h3 className="text-xl font-semibold text-green-400 mb-4">🎉 Plugin Development Mastered!</h3>
          <p className="text-green-300 mb-4">
            Congratulations! You now have the knowledge to create sophisticated Rust server plugins. 
            You can handle events, create commands, manage data, and integrate with external APIs.
          </p>
          
          <div>
            <h4 className="font-semibold text-white mb-2">Next Steps:</h4>
            <ul className="text-green-300 text-sm space-y-1">
              <li>• Explore uMod plugin marketplace for inspiration</li>
              <li>• Learn about Rust&apos;s networking for advanced features</li>
              <li>• Implement complex game mechanics (economies, PvP zones)</li>
              <li>• Create web dashboards for server management</li>
              <li>• Contribute to the Rust modding community</li>
            </ul>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
          <div className="flex justify-between items-center">
            <Link href="/tutorials/discord-bot-basics" className="bg-discord-yellow hover:bg-yellow-600 text-black px-6 py-3 rounded-lg transition-colors">
              ← Previous: Discord Bot Basics
            </Link>
            <div className="text-center">
              <p className="text-gray-300">Ready to build amazing Rust plugins!</p>
            </div>
            <Link href="/tutorials" className="bg-discord-blurple hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors">
              Back to All Tutorials →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
