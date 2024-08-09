"use client"

import React, { useEffect, useState } from 'react'
import { CiWallet } from "react-icons/ci";
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import db from "@/app/db";
















const  TransactionHistory = ()=>{
  const [transaction,setTransaction] = useState(false)
  return(
    <Card>
  <CardHeader>
    <div className="border-black">
      <Button variant={'link'}>Tokens</Button>
      <Button variant={'link'}>NFTs</Button>
      <Button variant={'link'}>Activity</Button>
    </div>
</CardHeader>

<CardContent>
  {!transaction ? 
  <div className="flex flex-col items-center justify-center">
    <h1 className='text-xl font-bold'>You Don't have any assets yet!</h1>
    <p className='mt-1 text-gray-500'>Start by buying or depositing funds</p>
    <Button className='mt-4'> + Add Funds</Button>

  </div>
    :
    <h1>transaction</h1>

}
</CardContent>
</Card>
  )
}


const Wallet = () => {
  const [click, setClick] = useState(false); 


  

  

  const setClickHandler = () => {
    setClick(true); 
    setTimeout(() => {
      setClick(false)
    }, 4000); 
  };

  return (
    <div className="w-full p-0">
            <Card>
                <CardHeader>
                <p className='text-gray-500 text-sm text-[10px] flex items-center gap-2'>
            <CiWallet/>
            InfluenceX Account Assets
            </p>
            <div className="flex justify-between">
            <CardHeader className='font-extrabold text-xl  flex'>
                $ 39.00
            
            </CardHeader>

            <CardHeader>
                <CardTitle ><Button onClick={()=>setClickHandler()} variant={'outline'}> {click? "Copied" : "Copy wallet Address" } </Button></CardTitle>
            </CardHeader>

            </div>
            <CardContent className='flex justify-center gap-4 '>
              <Button variant={'default'} className='w-[110px]'>Send</Button>
              <Button variant={'outline'} className='w-[110px]' >Add Funds</Button>
              <Button variant={'outline'} className='w-[110px]' >Withdraw</Button>
              <Button variant={'outline'} className='w-[110px]' >Swap</Button>
            </CardContent>

                </CardHeader>
            </Card>

<TransactionHistory/>

     



    </div>
  )
}

export default Wallet