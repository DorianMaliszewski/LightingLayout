import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lighting Layout',
  description: 'Design you room light layout',
}


export default function RootLayout({
  children,
}) {
  return (
    <html lang='fr'>
      <head />
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
