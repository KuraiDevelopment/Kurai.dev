import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function DiscordBotsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-discord-darker via-discord-dark to-gray-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            <span className="text-discord-yellow">🤖</span> Discord Bot Development
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Create powerful Discord bots with modern frameworks. From simple commands to advanced 
            moderation systems and server management tools.
          </p>
        </div>

        {/* Getting Started Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Getting Started</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold text-discord-blurple mb-4">1. Bot Setup (Discord.js)</h3>
              <div className="bg-gray-900/50 p-4 rounded-lg mb-4 overflow-x-auto">
                <code className="text-blue-400 text-sm whitespace-pre">
{`npm init -y
npm install discord.js
npm install dotenv

# Create bot on Discord Developer Portal
# Get your bot token
# Add to .env file
TOKEN=your_bot_token_here`}
                </code>
              </div>
              <p className="text-gray-300">Set up a new Discord.js project and configure your bot token.</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold text-discord-green mb-4">2. Basic Bot Structure</h3>
              <div className="bg-gray-900/50 p-4 rounded-lg mb-4 overflow-x-auto">
                <code className="text-green-400 text-sm whitespace-pre">
{`const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.login(process.env.TOKEN);`}
                </code>
              </div>
              <p className="text-gray-300">Basic bot initialization with essential intents configured.</p>
            </div>
          </div>
        </div>

        {/* Command Examples */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Command Examples</h2>
          <div className="space-y-6">
            {/* Slash Command Example */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold text-discord-fuchsia mb-4">Slash Command - Server Info</h3>
              <div className="bg-gray-900/50 p-4 rounded-lg mb-4 overflow-x-auto">
                <code className="text-pink-400 text-sm whitespace-pre">
{`const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('serverinfo')
        .setDescription('Get information about the server'),
    
    async execute(interaction) {
        const { guild } = interaction;
        
        const embed = new EmbedBuilder()
            .setTitle(\`\${guild.name} Server Info\`)
            .setColor('#5865F2')
            .addFields(
                { name: 'Members', value: \`\${guild.memberCount}\`, inline: true },
                { name: 'Created', value: \`<t:\${Math.floor(guild.createdTimestamp / 1000)}:F>\`, inline: true },
                { name: 'Channels', value: \`\${guild.channels.cache.size}\`, inline: true }
            )
            .setThumbnail(guild.iconURL());
            
        await interaction.reply({ embeds: [embed] });
    }
};`}
                </code>
              </div>
              <p className="text-gray-300">A slash command that displays server information in an embed.</p>
            </div>

            {/* Moderation Command */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold text-discord-red mb-4">Moderation Command - Kick User</h3>
              <div className="bg-gray-900/50 p-4 rounded-lg mb-4 overflow-x-auto">
                <code className="text-red-400 text-sm whitespace-pre">
{`module.exports = {
    data: new SlashCommandBuilder()
        .setName('kick')
        .setDescription('Kick a member from the server')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('User to kick')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('reason')
                .setDescription('Reason for kick')),
    
    async execute(interaction) {
        if (!interaction.member.permissions.has('KICK_MEMBERS')) {
            return interaction.reply({ 
                content: 'You need kick permissions!', 
                ephemeral: true 
            });
        }
        
        const user = interaction.options.getUser('user');
        const reason = interaction.options.getString('reason') || 'No reason provided';
        
        try {
            await interaction.guild.members.kick(user, reason);
            await interaction.reply(\`Successfully kicked \${user.tag}\`);
        } catch (error) {
            await interaction.reply('Failed to kick user.');
        }
    }
};`}
                </code>
              </div>
              <p className="text-gray-300">Moderation command with permission checks and error handling.</p>
            </div>
          </div>
        </div>

        {/* Advanced Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Advanced Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <h3 className="text-lg font-semibold text-discord-green mb-3">Database Integration</h3>
              <p className="text-gray-300 mb-4">Connect to MongoDB or SQLite for persistent data storage.</p>
              <div className="bg-gray-900/50 p-3 rounded text-xs text-green-400">
                npm install mongoose sqlite3
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <h3 className="text-lg font-semibold text-discord-yellow mb-3">Event Handling</h3>
              <p className="text-gray-300 mb-4">Advanced event listeners for member joins, reactions, and more.</p>
              <div className="bg-gray-900/50 p-3 rounded text-xs text-yellow-400">
                messageReactionAdd, guildMemberAdd
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <h3 className="text-lg font-semibold text-discord-fuchsia mb-3">Web Dashboard</h3>
              <p className="text-gray-300 mb-4">Create web interfaces for bot configuration and management.</p>
              <div className="bg-gray-900/50 p-3 rounded text-xs text-pink-400">
                Express.js + OAuth2
              </div>
            </div>
          </div>
        </div>

        {/* Popular Libraries */}
        <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Popular Bot Libraries & Tools</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-discord-blurple mb-3">JavaScript/Node.js</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Discord.js - Most popular library</li>
                <li>• Eris - Lightweight alternative</li>
                <li>• Sapphire Framework - Advanced features</li>
                <li>• Commando - Command handling</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-discord-green mb-3">Other Languages</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Discord.py (Python)</li>
                <li>• JDA (Java)</li>
                <li>• Discord.NET (C#)</li>
                <li>• Serenity (Rust)</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}