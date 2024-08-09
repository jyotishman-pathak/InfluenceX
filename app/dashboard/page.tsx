"use client"
import { useSession } from 'next-auth/react'
import React from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { Button } from '@/components/ui/button'
import { Badge } from "@/components/ui/badge"
import TodayTrade from '@/components/dashboard/TodayTrade'
import Setting from '@/components/dashboard/Setting'
import topPerformingYouTubers from '../constants'  // Ensure this path is correct

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import Wallet from '@/components/Wallet'





const Dashboard = () => {
  const { data: session } = useSession()

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-6">
    
    
   
    
    
      <Card className="w-full max-w-4xl mx-auto shadow-lg rounded-lg bg-white">
        <CardHeader className="flex items-center p-6 border-b border-gray-200">
          <div className="flex-1">
            <CardTitle>
              <h1 className="text-2xl font-bold text-gray-800">
                Welcome Back,
                <span className="ml-2 font-semibold text-gray-600">
                  {session?.user?.name} !
                </span>
              </h1>
            </CardTitle>
          </div>
          <div className="flex justify-between items-end">
            <div className="flex-shrink-0 flex flex-col items-center">
              <Avatar>
                <AvatarImage
                  width={60}
                  height={60}
                  className="rounded-full border-2 border-gray-300"
                  src={session?.user?.image}
                />
              </Avatar>
              <Badge variant="outline" className='bg-purple-600 mt-4'>Pro</Badge>
            </div>
            <Setting />
          </div>
        </CardHeader>
        <CardContent className="p-6 ">
         <Wallet/>
        </CardContent>




        <CardFooter className="p-6 border-t border-gray-200">
          <div className="flex justify-center w-full gap-10">
            <Button>Today's Summary</Button>
            <Button>Advanced Trades</Button>
            <Button>Portfolio Overview</Button>
            <Button>Trade History</Button>
          </div>
        </CardFooter>

       
      </Card>
     
     


    </div>
  )
}

export default Dashboard
