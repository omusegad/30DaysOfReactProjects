import React from 'react'
import Link from 'next/link'

type Post = {
  id:number,
  title:string,
  body:string
}

export default async function page() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data : Post[] = await res.json()
//  console.table(data)

  return (
    data.map(post => (
      <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
      </div>
    ))
  
  );
}


