import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function DayZServerSetupTutorial() {
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
            <span className="text-discord-green text-4xl">🎮</span>
            <div>
              <h1 className="text-4xl font-bold text-white">Complete DayZ Server Setup Guide</h1>
              <div className="flex gap-3 mt-2">
                <span className="bg-discord-green/20 text-discord-green px-3 py-1 rounded-full text-sm">Beginner</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">30 mins</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">DayZ</span>
              </div>
            </div>
          </div>
          <p className="text-xl text-gray-300">
            Learn how to set up a complete DayZ server from scratch, including installation, configuration, 
            mod management, and basic customization.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Table of Contents</h2>
          <ol className="space-y-2 text-gray-300">
            <li><a href="#prerequisites" className="text-discord-blurple hover:text-blue-400">1. Prerequisites</a></li>
            <li><a href="#steamcmd" className="text-discord-blurple hover:text-blue-400">2. Installing SteamCMD</a></li>
            <li><a href="#server-files" className="text-discord-blurple hover:text-blue-400">3. Downloading Server Files</a></li>
            <li><a href="#configuration" className="text-discord-blurple hover:text-blue-400">4. Server Configuration</a></li>
            <li><a href="#mods" className="text-discord-blurple hover:text-blue-400">5. Installing Mods</a></li>
            <li><a href="#startup" className="text-discord-blurple hover:text-blue-400">6. Starting Your Server</a></li>
            <li><a href="#troubleshooting" className="text-discord-blurple hover:text-blue-400">7. Troubleshooting</a></li>
          </ol>
        </div>

        {/* Prerequisites */}
        <section id="prerequisites" className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">1. Prerequisites</h2>
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold text-discord-yellow mb-4">System Requirements</h3>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li>• <strong>OS:</strong> Windows Server 2016+ or Linux (Ubuntu 18.04+)</li>
              <li>• <strong>CPU:</strong> 4+ cores (Intel i5-8400 or AMD Ryzen 5 2600)</li>
              <li>• <strong>RAM:</strong> 8GB minimum, 16GB recommended</li>
              <li>• <strong>Storage:</strong> 50GB+ available space (SSD recommended)</li>
              <li>• <strong>Network:</strong> Stable internet connection with static IP</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-discord-green mb-4">Required Software</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• SteamCMD (Steam Console Client)</li>
              <li>• DayZ Server files</li>
              <li>• Text editor (Notepad++, VS Code, or nano)</li>
              <li>• FTP client (optional, for remote management)</li>
            </ul>
          </div>
        </section>

        {/* SteamCMD Installation */}
        <section id="steamcmd" className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">2. Installing SteamCMD</h2>
          
          {/* Windows Installation */}
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 mb-6">
            <h3 className="text-xl font-semibold text-discord-blurple mb-4">Windows Installation</h3>
            <ol className="space-y-4 text-gray-300">
              <li>
                <strong>1. Download SteamCMD:</strong>
                <div className="bg-gray-900/50 p-4 rounded-lg mt-2">
                  <p className="text-sm mb-2">Download from: https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip</p>
                </div>
              </li>
              <li>
                <strong>2. Extract to folder:</strong>
                <div className="bg-gray-900/50 p-4 rounded-lg mt-2">
                  <code className="text-blue-400 text-sm">
                    C:\steamcmd\
                  </code>
                </div>
              </li>
              <li>
                <strong>3. Run SteamCMD.exe</strong> - This will update itself automatically
              </li>
            </ol>
          </div>

          {/* Linux Installation */}
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold text-discord-green mb-4">Linux Installation</h3>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <code className="text-green-400 text-sm whitespace-pre">
{`# Update system
sudo apt update && sudo apt upgrade -y

# Install dependencies
sudo apt install lib32gcc1 steamcmd -y

# Create steam user
sudo useradd -m steam
sudo su - steam

# Create directories
mkdir ~/steamcmd ~/DayZServer
cd ~/steamcmd

# Download SteamCMD
wget https://steamcdn-a.akamaihd.net/client/installer/steamcmd_linux.tar.gz
tar -xvzf steamcmd_linux.tar.gz

# Run SteamCMD
./steamcmd.sh`}
              </code>
            </div>
          </div>
        </section>

        {/* Server Files */}
        <section id="server-files" className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">3. Downloading Server Files</h2>
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
            <p className="text-gray-300 mb-4">
              Use SteamCMD to download the DayZ Dedicated Server files:
            </p>
            
            <div className="bg-gray-900/50 p-4 rounded-lg mb-4">
              <code className="text-yellow-400 text-sm whitespace-pre">
{`# Windows
steamcmd.exe +login anonymous +force_install_dir "C:\\DayZServer" +app_update 223350 +quit

# Linux
./steamcmd.sh +login anonymous +force_install_dir /home/steam/DayZServer +app_update 223350 +quit`}
              </code>
            </div>

            <div className="bg-blue-900/20 border border-blue-500/30 p-4 rounded-lg">
              <p className="text-blue-300 text-sm">
                <strong>💡 Tip:</strong> The download is approximately 15GB, so ensure you have sufficient bandwidth and storage space.
              </p>
            </div>
          </div>
        </section>

        {/* Configuration */}
        <section id="configuration" className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">4. Server Configuration</h2>
          
          {/* Create Config File */}
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 mb-6">
            <h3 className="text-xl font-semibold text-discord-fuchsia mb-4">Create serverDZ.cfg</h3>
            <p className="text-gray-300 mb-4">
              Create a configuration file in your server directory:
            </p>
            
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <code className="text-pink-400 text-sm whitespace-pre">
{`hostname = "Kurai.Dev DayZ Server - [Vanilla/PvP]";
password = "";
passwordAdmin = "YourSecureAdminPassword123";
maxPlayers = 60;

verifySignatures = 2;
forceSameBuild = 1;
disableVoN = 0;
vonCodecQuality = 7;
disable3rdPerson = 0;
disableCrosshair = 0;
disablePersonalLight = 1;
lightingConfig = 1;
serverTime = "SystemTime";
serverTimeAcceleration = 12;
serverNightTimeAcceleration = 4;
serverTimePersistent = 0;
guaranteedUpdates = 1;
loginQueueConcurrentPlayers = 5;
loginQueueMaxPlayers = 500;
instanceId = 1;
storeHouseStateDisabled = false;
storageAutoFix = 1;

class Missions
{
    class DayZ
    {
        template = "dayzOffline.chernarusplus";
    };
};`}
              </code>
            </div>
          </div>

          {/* Key Settings Explained */}
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold text-discord-yellow mb-4">Key Settings Explained</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-white mb-2">Basic Settings</h4>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• <strong>hostname:</strong> Server name in browser</li>
                  <li>• <strong>password:</strong> Player join password</li>
                  <li>• <strong>passwordAdmin:</strong> Admin access password</li>
                  <li>• <strong>maxPlayers:</strong> Maximum concurrent players</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Gameplay Settings</h4>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• <strong>disable3rdPerson:</strong> Force first-person only</li>
                  <li>• <strong>disableCrosshair:</strong> Remove crosshair</li>
                  <li>• <strong>serverTimeAcceleration:</strong> Day/night cycle speed</li>
                  <li>• <strong>verifySignatures:</strong> Anti-cheat level</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Mods */}
        <section id="mods" className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">5. Installing Mods</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 mb-6">
            <h3 className="text-xl font-semibold text-discord-green mb-4">Essential Mods Setup</h3>
            
            <div className="mb-6">
              <h4 className="font-semibold text-white mb-3">1. Download Mods via SteamCMD</h4>
              <div className="bg-gray-900/50 p-4 rounded-lg mb-3">
                <code className="text-green-400 text-sm whitespace-pre">
{`# Download Community Framework (CF)
steamcmd.exe +login anonymous +workshop_download_item 221100 1559212036 +quit

# Download additional mods
steamcmd.exe +login anonymous +workshop_download_item 221100 1590841260 +quit  # Trader
steamcmd.exe +login anonymous +workshop_download_item 221100 1710977250 +quit  # BBP`}
                </code>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-white mb-3">2. Create Mod Keys Folder</h4>
              <p className="text-gray-300 text-sm mb-2">Copy .bikey files from each mod to your server keys folder:</p>
              <div className="bg-gray-900/50 p-4 rounded-lg">
                <code className="text-yellow-400 text-sm">
                  DayZServer/keys/
                </code>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-3">3. Update Startup Parameters</h4>
              <div className="bg-gray-900/50 p-4 rounded-lg">
                <code className="text-blue-400 text-sm whitespace-pre">
{`DayZServer_x64.exe -config=serverDZ.cfg -port=2302 -profiles=ServerProfile -dologs -adminlog -netlog -freezecheck "-mod=@CF;@Trader;@BBP"`}
                </code>
              </div>
            </div>
          </div>
        </section>

        {/* Startup */}
        <section id="startup" className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">6. Starting Your Server</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold text-discord-blurple mb-4">Startup Script</h3>
            
            <div className="mb-6">
              <h4 className="font-semibold text-white mb-3">Windows Batch File (start_server.bat)</h4>
              <div className="bg-gray-900/50 p-4 rounded-lg">
                <code className="text-blue-400 text-sm whitespace-pre">
{`@echo off
title Kurai.Dev DayZ Server
echo Starting DayZ Server...

cd /d "C:\\DayZServer"
DayZServer_x64.exe -config=serverDZ.cfg -port=2302 -profiles=ServerProfile -dologs -adminlog -netlog -freezecheck

pause`}
                </code>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-3">Linux Start Script (start_server.sh)</h4>
              <div className="bg-gray-900/50 p-4 rounded-lg">
                <code className="text-green-400 text-sm whitespace-pre">
{`#!/bin/bash
echo "Starting DayZ Server..."

cd /home/steam/DayZServer
./DayZServer -config=serverDZ.cfg -port=2302 -profiles=ServerProfile -dologs -adminlog -netlog -freezecheck

echo "Server stopped."
read -p "Press Enter to continue..."

# Make executable: chmod +x start_server.sh`}
                </code>
              </div>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section id="troubleshooting" className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">7. Troubleshooting</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold text-discord-red mb-4">Common Issues</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">Server Won&apos;t Start</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Check if ports 2302-2306 are open</li>
                    <li>• Verify config file syntax</li>
                    <li>• Check server logs in ServerProfile folder</li>
                    <li>• Ensure proper mod key files</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-2">Players Can&apos;t Connect</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Verify firewall settings</li>
                    <li>• Check router port forwarding</li>
                    <li>• Confirm server is listed in browser</li>
                    <li>• Test with direct IP connection</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-2">Mod Issues</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Ensure mod versions match between server/client</li>
                    <li>• Check mod dependencies (e.g., CF for other mods)</li>
                    <li>• Verify mod keys are in keys folder</li>
                    <li>• Check mod load order in startup parameters</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-900/20 border border-green-500/30 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-green-400 mb-4">🎉 Congratulations!</h3>
              <p className="text-green-300">
                You&apos;ve successfully set up your DayZ server! Your server should now be running and visible 
                in the DayZ server browser. Players can connect using your server IP and port.
              </p>
              
              <div className="mt-4">
                <h4 className="font-semibold text-white mb-2">Next Steps:</h4>
                <ul className="text-green-300 text-sm space-y-1">
                  <li>• Set up admin permissions</li>
                  <li>• Configure server restart schedule</li>
                  <li>• Add custom spawn points</li>
                  <li>• Install additional quality-of-life mods</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Navigation */}
        <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
          <div className="flex justify-between items-center">
            <Link href="/tutorials" className="bg-discord-blurple hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors">
              ← Back to Tutorials
            </Link>
            <div className="text-center">
              <p className="text-gray-300">Need help? Join our Discord community!</p>
            </div>
            <Link href="/tutorials/discord-bot-basics" className="bg-discord-yellow hover:bg-yellow-600 text-black px-6 py-3 rounded-lg transition-colors">
              Next: Discord Bot Basics →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}