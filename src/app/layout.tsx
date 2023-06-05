import Header from '@/components/Header'
import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'], 
  subsets: ['latin'] 
})

export const metadata = {
  title: 'Pet Shop Amigos do Johnny',
  description: 'Pet Shop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
