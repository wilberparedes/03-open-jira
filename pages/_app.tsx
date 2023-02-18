import type { AppProps } from 'next/app'

import { CssBaseline, ThemeProvider } from '@mui/material'

import { UIProvider } from '@/context'
import { lightTheme, darkTheme } from '@/themes'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </UIProvider>
  )
}
