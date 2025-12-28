"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { useLanguageStore } from "@/lib/store"

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguageStore()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="font-medium hover:bg-muted"
    >
      <span className={language === 'en' ? 'font-bold' : 'opacity-50'}>EN</span>
      <span className="mx-1 opacity-30">|</span>
      <span className={language === 'ur' ? 'font-bold font-sans' : 'opacity-50 font-sans'}>اردو</span>
    </Button>
  )
}
