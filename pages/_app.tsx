import type { AppProps } from 'next/app'

import { CssBaseline, ThemeProvider } from '@mui/material'
import { SnackbarProvider } from 'notistack'

import { EntriesProvider, UIProvider } from '@/context'
import { lightTheme } from '@/themes'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider maxSnack={3}>
      <EntriesProvider>
        <UIProvider>
          <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </UIProvider>
      </EntriesProvider>
    </SnackbarProvider>
  )
}
