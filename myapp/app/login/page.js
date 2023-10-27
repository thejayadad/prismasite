
'use client'
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


import React from 'react'

const Login = () => {
    const { status } = useSession();

    const router = useRouter();
  
    if (status === "loading") {
      return <div>Loading...</div>;
    }
  
    if (status === "authenticated") {
      router.push("/")
    }
  return (
    <section>
        <button onClick={() => signIn()}>Sign In WIth Google</button>
    </section>
  )
}

export default Login