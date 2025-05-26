# Ommkar Ankit Rout - Cybersecurity Portfolio

A hacker-themed personal portfolio website showcasing cybersecurity expertise, AI/ML projects, and professional experience.

## 🚀 Features

- **Dark Hacker Theme** with Matrix-style green colors and terminal aesthetics
- **Interactive Terminal** simulator with custom commands
- **Matrix Rain Animation** background effect
- **Responsive Design** optimized for all devices
- **Terminal-Style Navigation** with smooth scrolling
- **Professional Sections**: About, Projects, Skills, Experience, Education, Contact

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + Custom CSS animations
- **UI Components**: Radix UI + shadcn/ui
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React + React Icons
- **Animations**: Framer Motion

## 📁 Project Structure

```
├── src/
│   ├── components/         # React components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utilities and configurations
│   ├── pages/             # Page components
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── shared/                # Shared types and schemas
├── server/                # Express backend (optional)
├── index.html             # HTML template
├── vercel.json            # Vercel deployment config
└── vite.config.deploy.ts  # Production build config
```

## 🚀 Deploy to Vercel

### Method 1: Direct Upload
1. Download the project as a ZIP file
2. Extract and upload to your GitHub repository
3. Connect repository to Vercel
4. Deploy automatically

### Method 2: GitHub Integration
1. Push this code to your GitHub repository
2. Import repository in Vercel
3. Vercel will auto-detect the configuration

### Method 3: Vercel CLI
```bash
npm install -g vercel
vercel
```

## 📋 Build Commands

The project includes a `vercel.json` configuration file that tells Vercel:
- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Dev Command**: `npm run dev`

## 🎨 Customization

### Colors & Theme
Edit `src/index.css` to modify:
- Matrix green: `--matrix: 136 100% 50%`
- Cyber cyan: `--cyber-cyan: 180 100% 50%`
- Dark background: `--dark-bg: 240 10% 3.9%`

### Content
Update personal information in:
- `src/components/hero-section.tsx` - Main intro
- `src/components/about-section.tsx` - About content
- `src/components/experience-section.tsx` - Work & education
- `src/components/projects-section.tsx` - Portfolio projects
- `src/components/contact-section.tsx` - Contact details

## 📞 Contact Information

- **Email**: omkarankit2004@gmail.com
- **LinkedIn**: [linkedin.com/in/ohmicguy](https://www.linkedin.com/in/ohmicguy)
- **Location**: Jajpur, Odisha, India

---

Built with ❤️ using terminal aesthetics and hacker-inspired design