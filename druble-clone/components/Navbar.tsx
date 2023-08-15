import React from 'react'

export default function Navbar() {
  return (
    <div className="container mx-auto flex p-10">
        <div className="logo">
            SOKO App
        </div>
        <ul className='flex'>
            <li className='space-x-10'>
                <a href="">Home</a>
                <a href="">About Us</a>
                <a href="">Services</a>
                <a href="">Products</a>
                <a href="">Contct Us</a>
            </li>
        </ul>
        

    </div>
  )
}
