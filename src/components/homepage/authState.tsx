// src/components/AuthState.tsx
"use client"

import { useUser } from "@auth0/nextjs-auth0/client"
import { Button } from "~/components/ui/button"
import Link from "next/link"

export function AuthState() {
  const { user, isLoading } = useUser()

  if (isLoading) {
    return <Button disabled>Loading...</Button>
  }

  if (user) {
    return (
      <Button asChild>
        <Link href="/dashboard">Go to Dashboard</Link>
      </Button>
    )
  }

  return (
    <Button asChild>
      <Link href="/api/auth/login">Get Started</Link>
    </Button>
  )
}