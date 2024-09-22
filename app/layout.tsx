"use client";
import React from 'react'
import "./globals.css";
import { AuthProvider } from '@/context/AuthContext';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <AuthProvider>
 <html lang="en">
 
  <body>
      {children}
  </body> 
    
    </html>
    </AuthProvider>

  )
}