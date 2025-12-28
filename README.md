# The Rise of AI (Without Hype)

An interactive web documentary that demystifies Artificial Intelligence. No marketing buzzwords, no sci-fi fear-mongering—just a clear, visual explanation of how AI actually works, what it can do, and where it fails.

## 🌟 Project Vision

In a world saturated with "AI will save us" and "AI will destroy us" narratives, this project aims to provide a grounded, "Aam Fahm" (Common Understanding) perspective. It breaks down complex concepts like Neural Networks, LLMs, and Machine Learning into digestible, interactive visual stories.

## ✨ Key Features

- **Cinematic Experience**: Immersive storytelling with custom spotlight effects, film grain, and smooth Framer Motion animations.
- **Interactive Visualizations**: Play with neural network sliders to see how patterns emerge from data.
- **Bilingual Support**: Fully localized in **English** and **Urdu** (RTL support included).
- **Zero Hype**: A commitment to factual accuracy over sensationalism.
- **Responsive Design**: Optimized for all devices, from mobile phones to large desktop screens.
- **Dark/Light Mode**: Seamless theme switching for comfortable reading.

## 🛠️ Technology Stack

Built with a modern, performance-focused stack:

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: TypeScript

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Imran-Ashiq/AIDocumentry.git
    cd AIDocumentry
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # or
    bun install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Deployment

This project is optimized for deployment on **Heroku** or **Vercel**.

### Heroku Deployment Steps

1.  Create a new app on Heroku.
2.  Connect your GitHub repository.
3.  **Important**: Set the `NEXT_PUBLIC_APP_URL` config var to your Heroku app URL (e.g., `https://your-app.herokuapp.com`).
4.  Deploy the `main` branch.

## 📂 Project Structure

```
src/
├── app/                 # Next.js App Router (Pages & Layouts)
│   ├── page.tsx         # Main Documentary Page
│   ├── layout.tsx       # Root Layout & SEO
│   └── globals.css      # Global Styles & Tailwind
├── components/          # React Components
│   ├── ui/              # Reusable UI elements (CinematicHero, Cards, etc.)
│   └── ...              # Feature-specific components
├── lib/                 # Utilities
│   ├── translations.ts  # English/Urdu Content Dictionary
│   └── utils.ts         # Helper functions
└── public/              # Static Assets
```

## 👤 Author

**Muhammad Imran**
- *Software Engineer | AI Systems Architect*
- [LinkedIn](https://www.linkedin.com/in/muhammad-imran-90787b255/)
- Email: imranbwpk@gmail.com

---

*Designed and Engineered with purpose.*
