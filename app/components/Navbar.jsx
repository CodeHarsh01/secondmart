'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaSign, FaSignInAlt } from 'react-icons/fa';
import { RiMenu3Fill } from "react-icons/ri";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className='bg-white px-4 sm:px-6 py-4 shadow-md flex justify-between items-center'>
        <Link href="/">
          <img src='/Logo.png' alt="logo" className="w-26 sm:w-32" />
        </Link>
        <div className='hidden md:flex gap-4 items-center font-medium'>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/T&C">Terms and conditions</Link>
          <Link href="/contact">Contact</Link>
        <div className='bg-blue-600 flex items-center gap-2 text-white px-4 py-3 rounded-md'>
          <FaSignInAlt/>  
          <Link href="/signup"> Login</Link>
        </div>
        </div>
        <div className='flex items-center md:hidden'>
          <button onClick={()=>setIsOpen(!isOpen)} className='text-2xl cursor-pointer'>
            <RiMenu3Fill/>
          </button>
        </div>
        </div>
        {/* Mobile menu  */}
        <div className={`my-auto bg-white shadow-md sm:border-t-0 px-5 ${isOpen && 'border-t'}`}>
        <div className={`flex flex-col gap-4 font-medium  transition-all duration-200 overflow-hidden ${isOpen ? 'max-h-90 py-5' : 'max-h-0'}`}>
        <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/T&C">Terms and conditions</Link>
          <Link href="/contact">Contact</Link>
        <div className='bg-blue-600 text-white px-4 py-2 rounded-md w-20'>
          <Link href="/">Login</Link>
        </div>
        </div>
      </div>
    </div>
  )
}
