import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import ThemeRegistry from './components/ThemeRegistry'
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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeRegistry>
          <Header />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  )
}
