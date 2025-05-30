
import React from 'react'
import ResponsiveWrapper from './ResponsiveWrapper'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - SSPL",
  description: "Welcome to SSPL, your trusted digital agency.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ResponsiveWrapper>
      {children}
    </ResponsiveWrapper>
  )
}
