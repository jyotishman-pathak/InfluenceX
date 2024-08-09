"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { signIn, signOut, useSession } from "next-auth/react"

const Navbar = () => {
    const { data: session } = useSession()

    return (
        <nav className='w-full h-[60px] flex bg-black justify-between items-center'>
            <div>
                <h1 className='text-white text-3xl font-extrabold '>InfluenceX</h1>
            </div>
           
            <div>
                {session?.user ? (
                    <Button onClick={() => signOut()}>LogOut</Button>
                ) : (
                    <Button onClick={() => signIn()}>Login</Button>
                )}
            </div>
        </nav>
    )
}

export default Navbar
