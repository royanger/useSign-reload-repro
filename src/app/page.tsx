'use client'

import { useSignIn } from "@clerk/nextjs"


export default function Home() {
  const { signIn } = useSignIn()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <button onClick={() => signIn?.reload()} className="bg-gray-300 px-4 py-6 rounded">useSign Reload</button>
    </main>
  )
}
