import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function DiscordBotBasicsTutorial() {
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
            <span className="text-discord-yellow text-4xl">🤖</span>
            <div>
              <h1 className="text-4xl font-bold text-white">Build Your First Discord Bot</h1>
              <div className="flex gap-3 mt-2">
                <span className="bg-discord-yellow/20 text-discord-yellow px-3 py-1 rounded-full text-sm">Beginner</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">45 mins</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Discord.js</span>
              </div>
            </div>
          </div>
          <p className="text-xl text-gray-300">
            Learn Discord.js fundamentals, create slash commands, handle events, and deploy your bot. 
            This comprehensive guide covers everything you need to get started.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Table of Contents</h2>
          <ol className="space-y-2 text-gray-300">
            <li><a href="#setup" className="text-discord-blurple hover:text-blue-400">1. Initial Setup</a></li>
            <li><a href="#bot-creation" className="text-discord-blurple hover:text-blue-400">2. Creating Discord Application</a></li>
            <li><a href="#project-setup" className="text-discord-blurple hover:text-blue-400">3. Project Setup</a></li>
            <li><a href="#basic-bot" className="text-discord-blurple hover:text-blue-400">4. Basic Bot Structure</a></li>
            <li><a href="#slash-commands" className="text-discord-blurple hover:text-blue-400">5. Slash Commands</a></li>
            <li><a href="#events" className="text-discord-blurple hover:text-blue-400">6. Event Handling</a></li>
            <li><a href="#deployment" className="text-discord-blurple hover:text-blue-400">7. Deployment</a></li>
          </ol>
        </div>

        {/* Setup */}
        <section id="setup" className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">1. Initial Setup</h2>
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold text-discord-yellow mb-4">Prerequisites</h3>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li>• <strong>Node.js:</strong> Version 16.11.0 or higher</li>
              <li>• <strong>npm:</strong> Comes with Node.js</li>
              <li>• <strong>Code Editor:</strong> VS Code, Sublime Text, etc.</li>
              <li>• <strong>Discord Account:</strong> For creating the bot application</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-discord-green mb-4">Check Your Installation</h3>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <code className="text-green-400 text-sm whitespace-pre">
{`# Check Node.js version
node --version

# Check npm version
npm --version

# Should return v16.11.0+ and 8.0.0+ respectively`}
              </code>
            </div>
          </div>
        </section>

        {/* Bot Creation */}
        <section id="bot-creation" className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">2. Creating Discord Application</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold text-discord-blurple mb-4">Step-by-Step Bot Creation</h3>
            
            <ol className="space-y-4 text-gray-300">
              <li>
                <strong>1. Visit Discord Developer Portal:</strong>
                <div className="bg-gray-900/50 p-3 rounded-lg mt-2">
                  <p className="text-sm">Go to: https://discord.com/developers/applications</p>
                </div>
              </li>
              
              <li>
                <strong>2. Create New Application:</strong>
                <ul className="mt-2 ml-4 space-y-1 text-sm">
                  <li>• Click &quot;New Application&quot;</li>
                  <li>• Enter your bot name (e.g., &quot;Kurai Bot&quot;)</li>
                  <li>• Click &quot;Create&quot;</li>
                </ul>
              </li>
              
              <li>
                <strong>3. Navigate to Bot Section:</strong>
                <ul className="mt-2 ml-4 space-y-1 text-sm">
                  <li>• Click &quot;Bot&quot; in the left sidebar</li>
                  <li>• Click &quot;Add Bot&quot;</li>
                  <li>• Confirm by clicking &quot;Yes, do it!&quot;</li>
                </ul>
              </li>
              
              <li>
                <strong>4. Configure Bot Settings:</strong>
                <div className="bg-gray-900/50 p-3 rounded-lg mt-2">
                  <code className="text-yellow-400 text-sm whitespace-pre">
{`✅ Public Bot: OFF (recommended for learning)
✅ Requires OAuth2 Code Grant: OFF
✅ Presence Intent: ON
✅ Server Members Intent: ON  
✅ Message Content Intent: ON`}
                  </code>
                </div>
              </li>
              
              <li>
                <strong>5. Copy Bot Token:</strong>
                <div className="bg-yellow-900/20 border border-yellow-500/30 p-3 rounded-lg mt-2">
                  <p className="text-yellow-300 text-sm">
                    <strong>⚠️ Important:</strong> Keep this token secret! Never share it publicly or commit it to version control.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* Project Setup */}
        <section id="project-setup" className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">3. Project Setup</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold text-discord-fuchsia mb-4">Initialize Your Project</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-white mb-2">1. Create Project Directory</h4>
                <div className="bg-gray-900/50 p-4 rounded-lg">
                  <code className="text-pink-400 text-sm whitespace-pre">
{`mkdir my-discord-bot
cd my-discord-bot
npm init -y`}
                  </code>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2">2. Install Dependencies</h4>
                <div className="bg-gray-900/50 p-4 rounded-lg">
                  <code className="text-blue-400 text-sm whitespace-pre">
{`# Install Discord.js
npm install discord.js

# Install environment variables handler
npm install dotenv

# Install development dependencies
npm install --save-dev nodemon`}
                  </code>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2">3. Create Project Structure</h4>
                <div className="bg-gray-900/50 p-4 rounded-lg">
                  <code className="text-green-400 text-sm whitespace-pre">
{`my-discord-bot/
├── commands/
├── events/
├── config/
├── .env
├── index.js
└── package.json`}
                  </code>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2">4. Create Environment File</h4>
                <p className="text-gray-300 text-sm mb-2">Create <code>.env</code> file in your project root:</p>
                <div className="bg-gray-900/50 p-4 rounded-lg">
                  <code className="text-yellow-400 text-sm">
                    TOKEN=your_bot_token_here<br/>
                    CLIENT_ID=your_client_id_here<br/>
                    GUILD_ID=your_test_server_id_here
                  </code>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Basic Bot */}
        <section id="basic-bot" className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">4. Basic Bot Structure</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold text-discord-green mb-4">Create Your First Bot (index.js)</h3>
            
            <div className="bg-gray-900/50 p-4 rounded-lg mb-4">
              <code className="text-green-400 text-sm whitespace-pre">
{`const { Client, GatewayIntentBits, Events } = require('discord.js');
require('dotenv').config();

// Create a new client instance
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers
    ]
});

// When the client is ready, run this code
client.once(Events.ClientReady, readyClient => {
    console.log(\`✅ Ready! Logged in as \${readyClient.user.tag}\`);
});

// Handle message events
client.on(Events.MessageCreate, message => {
    // Ignore messages from bots
    if (message.author.bot) return;
    
    // Simple ping command
    if (message.content === '!ping') {
        message.reply('Pong! 🏓');
    }
    
    // Server info command
    if (message.content === '!serverinfo') {
        const { guild } = message;
        const embed = {
            color: 0x5865F2,
            title: \`\${guild.name} Server Info\`,
            fields: [
                {
                    name: 'Members',
                    value: \`\${guild.memberCount}\`,
                    inline: true
                },
                {
                    name: 'Channels',
                    value: \`\${guild.channels.cache.size}\`,
                    inline: true
                },
                {
                    name: 'Created',
                    value: \`<t:\${Math.floor(guild.createdTimestamp / 1000)}:F>\`,
                    inline: true
                }
            ],
            thumbnail: {
                url: guild.iconURL()
            },
            timestamp: new Date().toISOString()
        };
        
        message.reply({ embeds: [embed] });
    }
});

// Handle errors
client.on(Events.Error, error => {
    console.error('Discord client error:', error);
});

// Login to Discord with your bot token
client.login(process.env.TOKEN);`}
              </code>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-2">Update package.json Scripts</h4>
              <div className="bg-gray-900/50 p-4 rounded-lg">
                <code className="text-blue-400 text-sm whitespace-pre">
{`"scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
}`}
                </code>
              </div>
            </div>
          </div>
        </section>

        {/* Slash Commands */}
        <section id="slash-commands" className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">5. Slash Commands</h2>
          
          <div className="space-y-6">
            {/* Command Registration */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold text-discord-blurple mb-4">Command Registration (deploy-commands.js)</h3>
              
              <div className="bg-gray-900/50 p-4 rounded-lg">
                <code className="text-blue-400 text-sm whitespace-pre">
{`const { REST, Routes, SlashCommandBuilder } = require('discord.js');
require('dotenv').config();

const commands = [
    new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!'),
        
    new SlashCommandBuilder()
        .setName('user')
        .setDescription('Provides information about the user.')
        .addUserOption(option =>
            option
                .setName('target')
                .setDescription('The user to get info about')
                .setRequired(false)),
                
    new SlashCommandBuilder()
        .setName('server')
        .setDescription('Provides information about the server.'),
        
    new SlashCommandBuilder()
        .setName('kick')
        .setDescription('Kick a member from the server')
        .addUserOption(option =>
            option
                .setName('user')
                .setDescription('User to kick')
                .setRequired(true))
        .addStringOption(option =>
            option
                .setName('reason')
                .setDescription('Reason for kick'))
].map(command => command.toJSON());

const rest = new REST().setToken(process.env.TOKEN);

(async () => {
    try {
        console.log(\`Started refreshing \${commands.length} application (/) commands.\`);

        const data = await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands },
        );

        console.log(\`Successfully reloaded \${data.length} application (/) commands.\`);
    } catch (error) {
        console.error(error);
    }
})();`}
                </code>
              </div>
            </div>

            {/* Command Handling */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold text-discord-yellow mb-4">Command Handling (Add to index.js)</h3>
              
              <div className="bg-gray-900/50 p-4 rounded-lg">
                <code className="text-yellow-400 text-sm whitespace-pre">
{`// Add this to your index.js file
client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'ping') {
        await interaction.reply('Pong! 🏓');
    } else if (commandName === 'user') {
        const user = interaction.options.getUser('target') || interaction.user;
        
        const embed = {
            color: 0x5865F2,
            title: \`User Information\`,
            fields: [
                {
                    name: 'Username',
                    value: user.tag,
                    inline: true
                },
                {
                    name: 'User ID',
                    value: user.id,
                    inline: true
                },
                {
                    name: 'Account Created',
                    value: \`<t:\${Math.floor(user.createdTimestamp / 1000)}:F>\`,
                    inline: false
                }
            ],
            thumbnail: {
                url: user.displayAvatarURL()
            }
        };
        
        await interaction.reply({ embeds: [embed] });
    } else if (commandName === 'server') {
        const { guild } = interaction;
        
        const embed = {
            color: 0x5865F2,
            title: \`\${guild.name} Server Information\`,
            fields: [
                {
                    name: 'Total Members',
                    value: \`\${guild.memberCount}\`,
                    inline: true
                },
                {
                    name: 'Total Channels',
                    value: \`\${guild.channels.cache.size}\`,
                    inline: true
                },
                {
                    name: 'Server Created',
                    value: \`<t:\${Math.floor(guild.createdTimestamp / 1000)}:F>\`,
                    inline: false
                }
            ],
            thumbnail: {
                url: guild.iconURL()
            }
        };
        
        await interaction.reply({ embeds: [embed] });
    } else if (commandName === 'kick') {
        // Check if user has kick permissions
        if (!interaction.member.permissions.has('KICK_MEMBERS')) {
            return interaction.reply({
                content: '❌ You need kick permissions to use this command!',
                ephemeral: true
            });
        }
        
        const user = interaction.options.getUser('user');
        const reason = interaction.options.getString('reason') || 'No reason provided';
        
        try {
            await interaction.guild.members.kick(user, reason);
            await interaction.reply(\`✅ Successfully kicked \${user.tag}. Reason: \${reason}\`);
        } catch (error) {
            console.error(error);
            await interaction.reply({
                content: '❌ Failed to kick user. Check my permissions and try again.',
                ephemeral: true
            });
        }
    }
});`}
                </code>
              </div>
            </div>
          </div>
        </section>

        {/* Events */}
        <section id="events" className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">6. Event Handling</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold text-discord-fuchsia mb-4">Advanced Event Handling</h3>
            
            <div className="bg-gray-900/50 p-4 rounded-lg mb-4">
              <code className="text-pink-400 text-sm whitespace-pre">
{`// Member join event
client.on(Events.GuildMemberAdd, member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'general');
    if (!channel) return;
    
    const embed = {
        color: 0x00FF00,
        title: '🎉 Welcome to the Server!',
        description: \`Welcome \${member.user}, to **\${member.guild.name}**!\`,
        fields: [
            {
                name: 'Member Count',
                value: \`We now have \${member.guild.memberCount} members!\`,
                inline: true
            }
        ],
        thumbnail: {
            url: member.user.displayAvatarURL()
        },
        timestamp: new Date().toISOString()
    };
    
    channel.send({ embeds: [embed] });
});

// Member leave event
client.on(Events.GuildMemberRemove, member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'general');
    if (!channel) return;
    
    channel.send(\`👋 \${member.user.tag} has left the server. We now have \${member.guild.memberCount} members.\`);
});

// Message reaction event
client.on(Events.MessageReactionAdd, async (reaction, user) => {
    // When a reaction is received, check if the structure is partial
    if (reaction.partial) {
        try {
            await reaction.fetch();
        } catch (error) {
            console.error('Something went wrong when fetching the message:', error);
            return;
        }
    }
    
    // Role reaction system example
    if (reaction.emoji.name === '🎮' && reaction.message.id === 'YOUR_MESSAGE_ID') {
        const role = reaction.message.guild.roles.cache.find(role => role.name === 'Gamer');
        if (role) {
            const member = reaction.message.guild.members.cache.get(user.id);
            member.roles.add(role);
        }
    }
});`}
              </code>
            </div>
          </div>
        </section>

        {/* Deployment */}
        <section id="deployment" className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">7. Deployment</h2>
          
          <div className="space-y-6">
            {/* Local Testing */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold text-discord-green mb-4">Local Testing</h3>
              
              <ol className="space-y-3 text-gray-300">
                <li>
                  <strong>1. Deploy Commands:</strong>
                  <div className="bg-gray-900/50 p-3 rounded-lg mt-2">
                    <code className="text-green-400 text-sm">node deploy-commands.js</code>
                  </div>
                </li>
                
                <li>
                  <strong>2. Run Your Bot:</strong>
                  <div className="bg-gray-900/50 p-3 rounded-lg mt-2">
                    <code className="text-green-400 text-sm">npm run dev</code>
                  </div>
                </li>
                
                <li>
                  <strong>3. Invite Bot to Server:</strong>
                  <div className="bg-gray-900/50 p-3 rounded-lg mt-2">
                    <code className="text-blue-400 text-sm">
                      https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=8&scope=bot%20applications.commands
                    </code>
                  </div>
                </li>
              </ol>
            </div>

            {/* Production Deployment */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold text-discord-blurple mb-4">Production Deployment Options</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">VPS/Dedicated Server</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Install Node.js and npm</li>
                    <li>• Use PM2 for process management</li>
                    <li>• Set up automatic restarts</li>
                    <li>• Configure environment variables</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-2">Cloud Platforms</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Heroku (free tier available)</li>
                    <li>• Railway</li>
                    <li>• Render</li>
                    <li>• Google Cloud Platform</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Message */}
        <div className="bg-green-900/20 border border-green-500/30 p-6 rounded-xl mb-12">
          <h3 className="text-xl font-semibold text-green-400 mb-4">🎉 Congratulations!</h3>
          <p className="text-green-300 mb-4">
            You've successfully created your first Discord bot! Your bot can now respond to slash commands, 
            handle events, and interact with users in your Discord server.
          </p>
          
          <div>
            <h4 className="font-semibold text-white mb-2">What's Next?</h4>
            <ul className="text-green-300 text-sm space-y-1">
              <li>• Add database integration for persistent data</li>
              <li>• Create more complex commands with subcommands</li>
              <li>• Implement moderation features</li>
              <li>• Add music or game features</li>
              <li>• Deploy to a cloud platform for 24/7 uptime</li>
            </ul>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
          <div className="flex justify-between items-center">
            <Link href="/tutorials/dayz-server-setup" className="bg-discord-green hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors">
              ← Previous: DayZ Server Setup
            </Link>
            <div className="text-center">
              <p className="text-gray-300">Need help? Join our Discord community!</p>
            </div>
            <Link href="/tutorials/rust-plugins" className="bg-discord-red hover:bg-red-600 text-white px-6 py-3 rounded-lg transition-colors">
              Next: Rust Plugin Development →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}