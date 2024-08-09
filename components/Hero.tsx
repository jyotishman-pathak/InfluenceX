"use client";

import React from 'react';
import { Button } from './ui/button';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation'; // Use next/navigation in app directory

const Hero = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>; // Optional: Show a loading state while fetching session
  }

  return (
    <main>
      <div className="flex flex-col items-center w-full h-screen">
        <div>
          <h1 className="text-[40px] font-extrabold bg-clip-text 
          text-transparent bg-gradient-to-r
           from-purple-400 via-pink-500 to-red-500
            animate-gradient-move pt-3">
            A Decentralized
          </h1>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-600">
            Youtubers <span className='text-blue-500'>Trading</span> Platform
          </h1>
        </div>
        <div className='p-5'>
          {!session?.user ? 
            <Button onClick={() => signIn()}>Sign Up with Google</Button> :
            <Button onClick={() => router.push("/dashboard")} className='bg-blue-400'>Go to Dashboard</Button>
          }
        </div>
      </div>
    </main>
  );
};

export default Hero;
