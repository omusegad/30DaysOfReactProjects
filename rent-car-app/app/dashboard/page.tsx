import Link from 'next/link'
import React from 'react'


export default function page() {
  return (
    <div className="container mx-auto">
      <ul>
        <li><Link href="/dashboard">Dashboard</Link> </li>
        <li><Link href="/user">User</Link></li>
        <li><Link href="/posts">Posts</Link></li>
        <li><Link href="/about">About</Link></li>
      </ul>
    </div>
  )
}


