"use client";
import React from 'react'
import "./globals.css";
import { SessionContext } from '@/context/SessionContext';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
 <html lang="en">
 <SessionContext.Provider value={null}>
  <body>
      {children}
  </body> 
    </SessionContext.Provider>
    </html>

  )
}