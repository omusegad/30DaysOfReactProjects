import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className="container mx-auto relative py-3">
        <div className="flex items-center justify-between">
            <div className="pt-2">
               <Image src="/simple.png" alt="me" width="90" height="90" />
            </div>
            <div className="hidden md:flex space-x-8 uppercase">
                <Link href="" className='hover:text-redish'> Our Products</Link>
                <Link href="" className='hover:text-redish'> Pricing</Link>
                <Link href="" className='hover:text-redish'> About Us</Link>
                <Link href="" className='hover:text-redish'> Careers </Link>
                <Link href="" className='hover:text-redish'> Our Community</Link>
                <Link href="" className='hover:text-redish'> Contact</Link>
            </div>
            <a href="" className='hidden md:block bg-redish text-white px-5 py-2 rounded-full'>Get Started </a>
        </div>
    </nav>
  )
}

export default Navbar