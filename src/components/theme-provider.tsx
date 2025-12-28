"use client"

import * as React from "react"

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeProviderContext = React.createContext<ThemeProviderState | undefined>(
  undefined
)

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  storageKey = "ai-documentary-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = React.useState<Theme>(defaultTheme)
  const [mounted, setMounted] = React.useState(false)

  // Apply theme to DOM and read from storage
  React.useEffect(() => {
    setMounted(true)

    // Read stored theme
    const stored = localStorage.getItem(storageKey) as Theme | null

    if (stored) {
      setTheme(stored)
    } else {
      // Default to dark mode if no preference
      setTheme("dark")
    }
  }, [storageKey])

  const applyTheme = React.useCallback((theme: Theme) => {
    const root = window.document.documentElement
    root.classList.remove("light", "dark")

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      root.classList.add(systemTheme)
    } else {
      root.classList.add(theme)
    }
  }, [])

  // Apply theme whenever it changes
  React.useEffect(() => {
    if (!mounted) return

    applyTheme(theme)
    localStorage.setItem(storageKey, theme)
  }, [theme, storageKey, mounted, applyTheme])

  // Listen for system theme changes
  React.useEffect(() => {
    if (!mounted) return

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    const handleChange = () => {
      if (theme === "system") {
        applyTheme("system")
      }
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [theme, mounted, applyTheme])

  const value = React.useMemo(
    () => ({
      theme,
      setTheme: (theme: Theme) => setTheme(theme),
    }),
    [theme]
  )

  // Don't render children until mounted to prevent FOUC
  // Also prevents "useTheme must be used within a ThemeProvider" error
  if (!mounted) {
    return (
      <ThemeProviderContext.Provider {...props} value={value}>
        {children}
      </ThemeProviderContext.Provider>
    )
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = React.useContext(ThemeProviderContext)

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }

  return context
}
