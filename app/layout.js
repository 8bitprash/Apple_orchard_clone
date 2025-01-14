import './globals.css'
import { Inter } from 'next/font/google'
import { Poppins } from 'next/font/google'
import Header from './Header'
import Footer from './Footer'
const poppins= Poppins({
  weight:['400','500','600','700'],
  subsets:['latin']
})
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Apple Orchard: Your Virtual Haven for All Things Apple',
  description: 'Build with NextJS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <Header/>
        <main>
        {children}
        </main>
        <Footer/>
        </body>
    </html>
  )
}
