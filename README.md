# Kurai.Dev - Game Server & Discord Development Hub

A modern, specialized website for the Kurai.Dev community focused on DayZ server development, Discord bot creation, server configurations, and Rust server setup. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🎮 Specializations

- **DayZ Server Development**: Complete setup guides, mod configurations, and scripting tutorials
- **Discord Bot Development**: Modern bot creation with frameworks, APIs, and best practices  
- **Discord Server Setup**: Community management, moderation tools, and server optimization
- **Rust Server Configuration**: Hosting guides, plugin development, and performance tuning

## 🚀 Features

- **Modern Design**: Clean, Discord-inspired design with dark theme
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **TypeScript**: Fully typed for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Next.js 14**: Latest React framework with App Router
- **Performance Optimized**: Built-in optimizations and best practices

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 18.0 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## 🛠️ Installation

1. **Install Node.js** (if not already installed):
   - Download and install from [nodejs.org](https://nodejs.org/)
   - Verify installation: `node --version` and `npm --version`

2. **Install Dependencies**:
   ```bash
   npm install
   ```

## 🏃‍♂️ Running the Development Server

To start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## 📁 Project Structure

```
kurai-dev-website/
├── src/
│   ├── app/
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout component
│   │   └── page.tsx            # Homepage component
│   └── components/
│       ├── Navigation.tsx      # Header navigation
│       └── Footer.tsx          # Footer component
├── public/                     # Static assets
├── .github/
│   └── copilot-instructions.md # AI assistant instructions
├── package.json               # Dependencies and scripts
├── tailwind.config.ts         # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── next.config.js            # Next.js configuration
```

## 🎨 Customization

### Discord Branding
The website uses Discord's official color palette:
- **Blurple**: `#5865F2` (Primary brand color)
- **Green**: `#57F287` (Success states)
- **Yellow**: `#FEE75C` (Warnings)
- **Red**: `#ED4245` (Errors)
- **Dark**: `#2C2F33` (Background)
- **Darker**: `#23272A` (Deeper background)

### Adding New Components
1. Create new component files in `src/components/`
2. Export as default function
3. Import and use in pages or other components

### Styling
- Uses Tailwind CSS for styling
- Custom Discord colors available as `discord-{color}`
- Responsive design with mobile-first approach

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically with each push

### Other Platforms
Build the project for production:
```bash
npm run build
npm start
```

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🛡️ Technologies Used

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Linting**: ESLint
- **Bundler**: Turbopack (development)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📞 Support

For support and questions:
- Join our Discord server
- Create an issue on GitHub
- Contact the development team

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Built with ❤️ for the Kurai.Dev community