import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <>
    <div className="container mx-auto flex p-10 shadow-sm border justify-between">
        <div className="logo pr-8 text-violet-800 font-bold">
        <span className="loom text-3xl">
          Loom
          </span>
        </div>
        <ul className='flex'>
            <li className='space-x-10'>
                <Link href="/">Home</Link>
                <Link href="/dashboard">Dashboard</Link>
                <Link href="/about-us">About Us</Link>
                <Link href="/services">Services</Link>
                <Link href="/our-products">Our Product</Link>
            </li>
        </ul>
    </div>
    
    </>
  )
}
