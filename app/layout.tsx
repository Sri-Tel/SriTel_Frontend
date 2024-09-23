"use client";
import React from 'react'
import "./globals.css";
import { AuthProvider } from '@/context/AuthContext';
import ChatwootWidget from '../components/ui/chatwoot';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <AuthProvider>
 <html lang="en">
 
  <body>
    <ChatwootWidget />
      {children}
  </body> 
    
    </html>
    </AuthProvider>

  )
}