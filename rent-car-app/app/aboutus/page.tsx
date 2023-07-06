import React from 'react'
import Link from 'next/link'

export default function aboutus() {
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
