import { Inter } from 'next/font/google'
import { CssVarsProvider } from '@mui/joy/styles'
import CssBaseline from '@mui/joy/CssBaseline'
import type { Metadata } from 'next'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wynncraft Helper - Essential Guide',
  description: 'Your guide to mastering Wynncraft MMORPG - classes, skill points, and build optimization',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CssVarsProvider defaultMode="dark">
          <CssBaseline />
          <Header />
          {children}
        </CssVarsProvider>
      </body>
    </html>
  )
}
