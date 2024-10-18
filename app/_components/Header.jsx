import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const Header = () => {
  return (
    <div className='flex justify-between p-5 shadow-lg'>
      <Image src = {"/logo.svg"} width = {250} height = {100}/>
      <Button>Get Started</Button>
    </div>
    
  )
}

export default Header