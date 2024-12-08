export type ThemeMode = 'light' | 'dark' | 'system'

export interface ThemeColors {
  primary: string
  secondary: string
  accent: string
  background: string
  foreground: string
  muted: string
  'muted-foreground': string
  border: string
  ring: string
}

export interface ThemeShadows {
  sm: string
  md: string
  lg: string
  xl: string
}

export interface ThemeBreakpoints {
  sm: string
  md: string
  lg: string
  xl: string
  '2xl': string
}

export interface ThemeSpacing {
  px: string
  0: string
  0.5: string
  1: string
  2: string
  3: string
  4: string
  5: string
  6: string
  8: string
  10: string
  12: string
  16: string
  20: string
  24: string
  32: string
  40: string
  48: string
  56: string
  64: string
}

export interface ThemeTypography {
  fontFamily: {
    sans: string[]
    serif: string[]
    mono: string[]
  }
  fontSize: {
    xs: string
    sm: string
    base: string
    lg: string
    xl: string
    '2xl': string
    '3xl': string
    '4xl': string
    '5xl': string
  }
  fontWeight: {
    light: number
    normal: number
    medium: number
    semibold: number
    bold: number
  }
  lineHeight: {
    none: number
    tight: number
    snug: number
    normal: number
    relaxed: number
    loose: number
  }
  letterSpacing: {
    tighter: string
    tight: string
    normal: string
    wide: string
    wider: string
    widest: string
  }
}

export interface ThemeConfig {
  mode: ThemeMode
  colors: ThemeColors
  shadows: ThemeShadows
  breakpoints: ThemeBreakpoints
  spacing: ThemeSpacing
  typography: ThemeTypography
  borderRadius: {
    none: string
    sm: string
    md: string
    lg: string
    full: string
  }
  transitions: {
    duration: {
      fast: string
      normal: string
      slow: string
    }
    timing: {
      ease: string
      linear: string
      'ease-in': string
      'ease-out': string
      'ease-in-out': string
    }
  }
}
