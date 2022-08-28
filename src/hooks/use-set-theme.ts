import React, { useEffect } from 'react'

export type Theme = 'default' | 'anton' | 'alex'

export const useSetTheme = (theme: Theme) => {
  useEffect(() => {
    document.documentElement.setAttribute('theme', theme)

    return () => document.documentElement.setAttribute('theme', 'default')
  }, [theme])
}
