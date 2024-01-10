import './globals.css'
import { Inter } from 'next/font/google'
import { Header } from './containers/Header'
import { Nav } from './containers/Nav'
import { Footer } from './containers/Footer'
import { Network } from './containers/Network'
import { configSite } from './service/configSite'
import { CartProvider } from './components/CartContext';

const inter = Inter({ subsets: ['latin'] })

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Xe Điện Vui',
    default: 'Xe Điện Vui',
  },
  description: 'Xe Điện Vui'
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const site = await configSite();
  const data = site.response.data[0];
  return (
    <CartProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header data={data} />
          <Nav />
          {children}
          <Footer data={data} />
          <Network />
        </body>
      </html>
    </CartProvider>
  )
}
