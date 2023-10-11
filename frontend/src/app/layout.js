'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import { Provider } from 'react-redux'
import { NextUIProvider } from "@nextui-org/react";
import { AppNavbar } from "./_components"
import store from "../redux/store"

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NextUIProvider>
    <Provider store={store}>
        <AppNavbar />
       Cuong Ngoc
        {children} //@renderbody()
        </Provider>
    </NextUIProvider>
        </body>
    </html>
  )
}
