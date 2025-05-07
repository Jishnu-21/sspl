"use client"

import React from 'react'
import ResponsiveWrapper from './ResponsiveWrapper'

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
