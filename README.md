# Keen Keeper

A modern web application designed to help you maintain and nurture your friendships through organized tracking and analytics.

## Description

Keen Keep is a relationship management tool that helps you stay connected with your friends. Track interactions, set contact goals, monitor relationship health, and gain insights into your social connections through beautiful visualizations and intuitive interfaces.

## Live Demo

🚀 **[View Live Application]([https://keen-keep-pui6fjwt7-asifahmedakash32-8581s-projects.vercel.app](https://keen-keep-g45b5av9c-asifahmedakash32-8581s-projects.vercel.app/))**

Experience Keen Keep in action! The live demo showcases all features including friend management, timeline tracking, and analytics.

## Technologies Used

- **Framework**: Next.js 16.2.3
- **Frontend**: React 19.2.4
- **Styling**: Tailwind CSS 4, DaisyUI 5.5.19
- **Charts**: Recharts 3.8.1
- **Icons**: React Icons 5.6.0
- **Build Tools**: ESLint 9, Babel Plugin React Compiler
- **Deployment**: Optimized for Vercel

## Features

### 🏠 Dashboard
- Overview of total friends and relationship status
- Monthly interaction statistics
- Quick access to friend management

### 👥 Friend Management
- Visual friend cards with profile pictures
- Status tracking (On Track, Almost Due, Overdue)
- Tag-based organization
- Days since last contact display

### 📅 Timeline
- Complete history of all interactions
- Filter by friend or interaction type
- Sort by newest or oldest first
- Support for text, call, and video interactions

### 📊 Analytics
- Interactive pie charts showing interaction distribution
- Friendship health metrics
- Data-driven insights for relationship maintenance

### 💾 Local Storage
- Persistent data storage in browser
- No account required - works offline
- Privacy-focused approach

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.js
│   ├── page.js
│   ├── card/[id]/          # Individual friend detail pages
│   ├── components/         # Shared components
│   ├── home/               # Dashboard page
│   │   ├── page.jsx
│   │   └── components/     # Home page components
│   ├── stats/              # Analytics page
│   └── timeline/           # Timeline page
│       ├── page.jsx
│       └── components/
├── context/                # React contexts for state management
├── data/                   # Static data files
└── utils/                  # Utility functions
```

## Acknowledgments

- **Programming Hero**: Special thanks to [Programming Hero](https://web.programming-hero.com) for providing the comprehensive web development learning platform and guidelines that made this project possible
- Built with [Next.js](https://nextjs.org/)
- UI components powered by [DaisyUI](https://daisyui.com/)
- Charts provided by [Recharts](https://recharts.org/)
