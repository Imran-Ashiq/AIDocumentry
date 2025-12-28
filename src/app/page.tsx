'use client'

import { motion, useScroll, useTransform, useSpring, Variants } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Slider } from '@/components/ui/slider'
import { ChevronRight, Brain, Database, Cpu, AlertCircle, Heart, Languages, Sparkles, Lock, Linkedin, Mail } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'
import { ThemeProvider } from '@/components/theme-provider'
import { useLanguageStore } from '@/lib/store'
import { translations } from '@/lib/translations'
import { LanguageToggle } from '@/components/language-toggle'
import { TypewriterEffect } from '@/components/ui/typewriter-effect'
import { CinematicHero } from '@/components/ui/cinematic-hero'
import Image from 'next/image'

function AIDocumentaryContent() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [expandedCard, setExpandedCard] = useState<string | null>(null)
  const [dataSliderValue, setDataSliderValue] = useState([50])
  const containerRef = useRef<HTMLDivElement>(null)

  const { language } = useLanguageStore()
  const t = translations[language]
  const isRTL = language === 'ur'

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr'
  }, [language, isRTL])

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current
      const progress = scrollTop / (scrollHeight - clientHeight)
      setScrollProgress(Math.min(progress, 1))
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
      return () => container.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants: Variants = reducedMotion ? {} : {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  return (
    <div 
      className="min-h-screen bg-background text-foreground"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Header Controls - Top Left */}
      <div className={`fixed top-4 ${isRTL ? 'right-4' : 'left-4'} z-40 flex items-center gap-2 bg-background/50 backdrop-blur-sm p-2 rounded-lg border border-border/50`}>
        <ThemeToggle />
        <div className="w-px h-4 bg-border" />
        <LanguageToggle />
      </div>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX, transformOrigin: isRTL ? 'right' : 'left' }}
      />

      {/* Scroll Container */}
      <div
        ref={containerRef}
        className="h-screen overflow-y-auto overflow-x-hidden scroll-smooth"
        style={{ scrollBehavior: reducedMotion ? 'auto' : 'smooth' }}
      >
        {/* Chapter Navigation */}
        <nav className={`fixed top-4 ${isRTL ? 'left-4' : 'right-4'} z-40 bg-card/80 backdrop-blur-sm p-4 rounded-lg border border-border`}>
          <div className="text-xs font-semibold mb-2 uppercase tracking-wider text-muted-foreground">
            {t.nav.progress}
          </div>
          <div className="flex flex-col gap-1 text-sm">
            {t.nav.chapters.map((chapter, index) => (
              <div
                key={chapter}
                className={`flex items-center gap-2 transition-colors ${
                  index / 6 <= scrollProgress ? 'text-foreground' : 'text-muted-foreground'
                }`}
              >
                <div
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    index / 6 <= scrollProgress ? 'bg-primary scale-125' : 'bg-muted-foreground'
                  }`}
                />
                <span className="text-xs">{chapter}</span>
              </div>
            ))}
          </div>
        </nav>

        <motion.main
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto px-6 py-20"
        >
          {/* INTRO SECTION */}
          <CinematicHero className="min-h-screen flex flex-col justify-center items-center text-center mb-32 -mx-6 px-6">
            <motion.div variants={itemVariants} className="mb-8">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6 glitch-hover cursor-default transition-colors duration-300">
                {t.intro.title}
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-8" />
            </motion.div>

            <motion.p variants={itemVariants} className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-light leading-relaxed max-w-3xl">
              {t.intro.subtitle1}
            </motion.p>

            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-muted-foreground/70 mt-6 max-w-2xl leading-relaxed">
              {t.intro.subtitle2}
            </motion.p>

            <motion.div variants={itemVariants} className="mt-20 max-w-2xl space-y-6 text-lg text-muted-foreground text-left mx-auto">
              <div className="min-h-[100px]">
                <TypewriterEffect text={t.intro.p1} delay={1000} speed={40} className="block mb-4" />
                <TypewriterEffect text={t.intro.p2} delay={3000} speed={40} className="block mb-4" />
                <TypewriterEffect text={t.intro.p3} delay={5000} speed={40} className="block" />
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-20 animate-bounce"
              style={{ animationDuration: '2s' }}
            >
              <ChevronRight className={`w-8 h-8 text-muted-foreground ${isRTL ? 'rotate-180' : 'rotate-90'}`} />
            </motion.div>
          </CinematicHero>

          {/* CHAPTER 1: BEFORE THE HYPE */}
          <section className="min-h-screen flex flex-col justify-center mb-32">
            <motion.div variants={itemVariants}>
              <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                {t.chapter1.label}
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-12">
                {t.chapter1.title}
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="max-w-2xl text-lg text-muted-foreground leading-relaxed mb-16">
              <p className="mb-6">
                {t.chapter1.p1}
              </p>
              <p className="mb-6">
                {t.chapter1.p2}
              </p>
            </motion.div>

            {/* Timeline */}
            <motion.div variants={itemVariants} className="space-y-8">
              {t.chapter1.timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  variants={itemVariants}
                  className="flex gap-6 group"
                >
                  <div className={`flex-shrink-0 w-24 ${isRTL ? 'text-left' : 'text-right'}`}>
                    <div className="text-sm font-mono text-muted-foreground group-hover:text-primary transition-colors">
                      {item.year}
                    </div>
                  </div>
                  <div className="w-px bg-border group-hover:bg-primary transition-colors" />
                  <div className="flex-1 pb-8">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className={`mt-16 p-6 bg-muted/50 rounded-lg ${isRTL ? 'border-r-4' : 'border-l-4'} border-primary`}>
              <p className="text-lg font-medium">
                {t.chapter1.summary}
              </p>
            </motion.div>
          </section>

          {/* CHAPTER 2: WHAT CHANGED */}
          <section className="min-h-screen flex flex-col justify-center mb-32">
            <motion.div variants={itemVariants}>
              <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                {t.chapter2.label}
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-12">
                {t.chapter2.title}
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="max-w-2xl text-lg text-muted-foreground leading-relaxed mb-16">
              <p className="mb-6">
                {t.chapter2.p1}
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-6 mb-16">
              {t.chapter2.cards.map((item, index) => (
                <Card key={item.title} className="border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="text-primary mb-4">
                      {index === 0 && <Database className="w-8 h-8" />}
                      {index === 1 && <Cpu className="w-8 h-8" />}
                      {index === 2 && <Brain className="w-8 h-8" />}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>

            {/* Interactive Data Slider */}
            <motion.div variants={itemVariants} className="mb-12">
              <h3 className="text-2xl font-semibold mb-6">{t.chapter2.scaleTitle}</h3>
              <p className="text-muted-foreground mb-8">
                {t.chapter2.scaleDesc}
              </p>

              <Card className="p-6">
                <div className="mb-6">
                  <Slider
                    value={dataSliderValue}
                    onValueChange={setDataSliderValue}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {Array.from({ length: 16 }).map((_, i) => {
                    const isActive = i < (dataSliderValue[0] / 100) * 16
                    return (
                      <div
                        key={i}
                        className={`h-12 rounded-md transition-all duration-300 ${
                          isActive
                            ? 'bg-primary opacity-80'
                            : 'bg-muted'
                        }`}
                        style={{
                          opacity: isActive ? 0.5 + (dataSliderValue[0] / 200) : 0.3,
                        }}
                      />
                    )
                  })}
                </div>
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  {dataSliderValue[0] < 30 && (language === 'en' ? 'Limited patterns recognized' : 'محدود پیٹرن پہچانے گئے')}
                  {dataSliderValue[0] >= 30 && dataSliderValue[0] < 60 && (language === 'en' ? 'Basic patterns emerging' : 'بنیادی پیٹرن ابھر رہے ہیں')}
                  {dataSliderValue[0] >= 60 && dataSliderValue[0] < 85 && (language === 'en' ? 'Complex patterns detected' : 'پیچیدہ پیٹرن کا پتہ چلا')}
                  {dataSliderValue[0] >= 85 && (language === 'en' ? 'Sophisticated patterns identified' : 'نفیس پیٹرن کی نشاندہی کی گئی')}
                </p>
              </Card>
            </motion.div>
          </section>

          {/* CHAPTER 3: WHAT AI IS (AND IS NOT) */}
          <section className="min-h-screen flex flex-col justify-center mb-32">
            <motion.div variants={itemVariants}>
              <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                {t.chapter3.label}
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-12">
                {t.chapter3.title}
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="max-w-2xl text-lg text-muted-foreground leading-relaxed mb-16">
              <p className="mb-6">
                {t.chapter3.p1}
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              {t.chapter3.myths.map((item, index) => (
                <Card key={index} className="border-border hover:border-primary/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="text-sm font-semibold text-destructive mb-2">
                      {item.myth}
                    </div>
                    <div className="text-sm font-semibold text-primary mb-2">
                      {language === 'en' ? 'Reality:' : 'حقیقت:'}
                    </div>
                    <p className="text-muted-foreground">{item.reality}</p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="mt-16 p-8 bg-muted/50 rounded-lg text-center">
              <p className="text-2xl font-bold mb-4">
                {t.chapter3.summaryTitle}
              </p>
              <p className="text-muted-foreground">
                {t.chapter3.summaryDesc}
              </p>
            </motion.div>
          </section>

          {/* CHAPTER 4: WHERE AI ACTUALLY HELPS */}
          <section className="min-h-screen flex flex-col justify-center mb-32">
            <motion.div variants={itemVariants}>
              <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                {t.chapter4.label}
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-12">
                {t.chapter4.title}
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="max-w-2xl text-lg text-muted-foreground leading-relaxed mb-16">
              <p className="mb-6">
                {t.chapter4.p1}
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6">
              {t.chapter4.cards.map((item, index) => (
                <Card
                  key={item.id}
                  className={`border-border cursor-pointer hover:border-primary/50 transition-all ${
                    expandedCard === item.id ? 'bg-muted/30' : ''
                  }`}
                  onClick={() => setExpandedCard(expandedCard === item.id ? null : item.id)}
                >
                  <CardContent className="p-6">
                    <div className="text-primary mb-4">
                      {item.id === 'medical' && <Heart className="w-8 h-8" />}
                      {item.id === 'translation' && <Languages className="w-8 h-8" />}
                      {item.id === 'recommendations' && <Sparkles className="w-8 h-8" />}
                      {item.id === 'accessibility' && <Brain className="w-8 h-8" />}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.description}</p>
                    {expandedCard === item.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="pt-4 border-t border-border"
                      >
                        <p className="text-sm text-muted-foreground">{item.expanded}</p>
                      </motion.div>
                    )}
                    <div className="flex items-center gap-2 text-sm text-primary mt-4">
                      <span>{expandedCard === item.id ? (language === 'en' ? 'Show less' : 'کم دکھائیں') : (language === 'en' ? 'Learn more' : 'مزید جانیں')}</span>
                      <ChevronRight
                        className={`w-4 h-4 transition-transform ${
                          expandedCard === item.id ? 'rotate-90' : (isRTL ? 'rotate-180' : '')
                        }`}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </section>

          {/* CHAPTER 5: THE LIMITATIONS */}
          <section className="min-h-screen flex flex-col justify-center mb-32">
            <motion.div variants={itemVariants}>
              <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                {t.chapter5.label}
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-12">
                {t.chapter5.title}
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="max-w-2xl text-lg text-muted-foreground leading-relaxed mb-16">
              <p className="mb-6">
                {t.chapter5.p1}
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              {t.chapter5.cards.map((item, index) => (
                <Card key={item.title} className="border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        {index === 0 && <AlertCircle className="w-6 h-6 text-destructive" />}
                        {index === 1 && <Sparkles className="w-6 h-6 text-destructive" />}
                        {index === 2 && <Database className="w-6 h-6 text-destructive" />}
                        {index === 3 && <Brain className="w-6 h-6 text-destructive" />}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground mb-4">{item.description}</p>
                        <div className="bg-destructive/10 border border-destructive/20 rounded-md p-4">
                          <p className="text-sm font-medium text-destructive mb-1">{language === 'en' ? 'Example:' : 'مثال:'}</p>
                          <p className="text-sm text-destructive/80">{item.example}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="mt-16 p-8 bg-muted/50 rounded-lg">
              <p className="text-lg text-muted-foreground text-center">
                {t.chapter5.summary}
              </p>
            </motion.div>
          </section>

          {/* FINAL CHAPTER: THE TAKEAWAY */}
          <section className="min-h-screen flex flex-col justify-center items-center text-center mb-32">
            <motion.div variants={itemVariants}>
              <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                {t.final.label}
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-16">
                {t.final.title}
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="max-w-2xl space-y-12 mb-20">
              {t.final.cards.map((item, index) => (
                <Card key={index} className={index === 0 ? "border-primary/20 bg-primary/5" : "border-border"}>
                  <CardContent className="p-8">
                    <p className={`text-xl font-semibold mb-2 ${index === 0 ? "text-2xl font-bold text-primary" : ""}`}>{item.title}</p>
                    {item.desc && (
                      <p className="text-muted-foreground">
                        {item.desc}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="max-w-3xl">
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-12 whitespace-pre-line">
                {t.final.mainText}
              </p>
            </motion.div>
          </section>

          {/* AUTHOR SECTION - DOCUMENTARY CREDITS */}
          <motion.section
            variants={itemVariants}
            className="min-h-[70vh] flex flex-col justify-center items-center text-center py-20 border-t border-border/50"
            role="contentinfo"
            aria-label="Author credits"
          >
            {/* Minimal divider */}
            <div className="w-16 h-px bg-border mb-12" />

            {/* Author Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: reducedMotion ? 0 : 0.2, duration: reducedMotion ? 0 : 0.8 }}
              className="mb-8 relative w-24 h-24 md:w-42 md:h-42 rounded-full overflow-hidden border-2 border-muted shadow-xl grayscale hover:grayscale-0 transition-all duration-500"
            >
              <Image 
                src="/auther.png" 
                alt="Muhammad Imran"
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reducedMotion ? 0 : 0.3, duration: reducedMotion ? 0 : 0.8 }}
              className="mb-4"
            >
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
                {t.author.name}
              </h3>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reducedMotion ? 0 : 0.4, duration: reducedMotion ? 0 : 0.8 }}
              className="mb-8"
            >
              <p className="text-sm md:text-base text-muted-foreground tracking-wide uppercase">
                {t.author.title}
              </p>
            </motion.div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reducedMotion ? 0 : 0.5, duration: reducedMotion ? 0 : 0.8 }}
              className="max-w-lg mb-12"
            >
              <p className="text-base text-muted-foreground/80 italic leading-relaxed">
                {t.author.quote}
              </p>
            </motion.div>

            {/* Contact Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reducedMotion ? 0 : 0.6, duration: reducedMotion ? 0 : 0.8 }}
              className="flex items-center gap-8"
            >
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/muhammad-imran-90787b255/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md px-2 py-1"
                aria-label="Connect on LinkedIn"
              >
                <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>{t.author.linkedin}</span>
              </a>

              {/* Email */}
              <a
                href="mailto:imranbwpk@gmail.com"
                className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md px-2 py-1"
                aria-label="Send email"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>{t.author.email}</span>
              </a>
            </motion.div>

            {/* Credits footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: reducedMotion ? 0 : 0.8, duration: reducedMotion ? 0 : 0.8 }}
              className="mt-32 w-full border-t border-primary/10 pt-12"
            >
              <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                  <ThemeToggle />
                  <div className="hidden md:block h-4 w-px bg-border" />
                  <p className="text-xs text-muted-foreground/60">
                    &copy; {new Date().getFullYear()} AI Hype vs Reality
                  </p>
                </div>

                <div className="flex flex-col items-center md:items-end gap-1">
                  <p className="text-xs text-muted-foreground/50 uppercase tracking-widest">
                    {t.author.footer}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.section>
        </motion.main>
      </div>
    </div>
  )
}

export default function AIDocumentary() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="ai-documentary-theme">
      <AIDocumentaryContent />
    </ThemeProvider>
  )
}
