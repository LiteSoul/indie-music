import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GRID_DATA_ITEMS } from './data'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          {GRID_DATA_ITEMS.map((gridDataItem) => {
            const {
              id,
              attributes,
            }: { id: number; attributes: { text: string } } = gridDataItem
            return <div key={id}>{attributes.text}</div>
          })}
        </div>
        <br />
        {children}
      </body>
    </html>
  )
}
