import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <Image src = {"/logo.svg"} width = {250} height = {100}/>
  )
}

export default Header