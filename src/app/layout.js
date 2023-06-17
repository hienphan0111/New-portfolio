import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './provider';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Kevin Phan's Portfolio",
  description: "Kevin Phan's Portfolio",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
