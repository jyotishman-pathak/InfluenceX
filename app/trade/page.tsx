import TradingChart from '@/components/chart/TradingChart'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import { Input } from "@/components/ui/input"




const Trade = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10">
      <Card className="mb-6">
        <CardHeader className="py-4">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <CardTitle className="text-blue-600 text-xl sm:text-2xl">Samay Raina (SM)</CardTitle>
            
            <div className="flex flex-col items-center text-base sm:text-lg">
              <p>Open</p>
              <CardDescription className="text-xl sm:text-2xl font-bold text-black">121</CardDescription>
            </div> 
          
            <div className="flex flex-col items-center text-base sm:text-lg">
              <p>High</p>
              <CardDescription className="text-xl sm:text-2xl font-bold text-black">21</CardDescription>
            </div> 

            <div className="flex flex-col items-center text-base sm:text-lg">
              <p>Low</p>
              <CardDescription className="text-xl sm:text-2xl font-bold text-black">131</CardDescription>
            </div> 
            
            <div className="flex flex-col items-center text-base sm:text-lg">
              <p>Close</p>
              <CardDescription className="text-xl sm:text-2xl font-bold text-black">221</CardDescription>
            </div> 
          </div>
        </CardHeader>
      </Card>
      
      <Card className="w-full flex flex-col md:flex-row gap-6">
        <div className="flex-1 h-[300px] sm:h-[500px] md:h-[690px]">
          <TradingChart />
        </div>

        <Card className='w-full md:w-[300px] h-auto flex flex-col'>
          <CardHeader className='border-b-2 p-2'>
            <CardTitle className='text-lg font-semibold'>Trade Options</CardTitle>
          </CardHeader>




          <CardContent className='p-4 flex flex-col gap-4'>
            <div className="flex gap-4">
              <Button className='bg-green-500 w-full'>Buy</Button>
              <Button className='bg-red-500 w-full'>Sell</Button>
            </div>

            




            <div className="flex gap-4">
              <Button variant={'link'}>Limit</Button>
              <Button variant={'link'}>Market</Button>
            </div>
            <CardDescription className='text-sm flex justify-between'>
              <p>Available balance</p>
              <p>$39.00</p>
            </CardDescription>
            <Input type="price" id="price" placeholder="Price" />
            <Input type="quantity" id="quantity" placeholder="Quantity" />
          </CardContent>
        </Card>
      </Card>
    </div>
  )
}

export default Trade
