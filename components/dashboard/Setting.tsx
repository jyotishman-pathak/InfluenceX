import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Button } from '../ui/button'
import { IoMdSettings } from "react-icons/io";

const Setting = () => {
  return (
    <div>
    <Sheet>
  <SheetTrigger>
  <IoMdSettings size={30} />
   
    </SheetTrigger>
  <SheetContent>

    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
</div>

  )
}

export default Setting