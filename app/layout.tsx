"use client";
import React from 'react'
import "./globals.css";
import AuthStatus from '@/components/Auth/AuthStatus';

import { SessionProvider } from 'next-auth/react';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <SessionProvider>
      
    <html lang="en">
      <body>
        <AuthStatus />

        {children}</body>
    </html>
    </SessionProvider>
  )
}