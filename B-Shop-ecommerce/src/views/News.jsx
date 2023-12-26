import React, { useEffect } from 'react'
import Layout from '../components/Layout/Layout'
import PostTypes from '../apptypes/postTypes'
import { useState } from 'react'
import Postcard from '../components/Postcard'
const BASE_URL = "https://jsonplaceholder.typicode.com";


export default function News() {

    // const[posts, setPosts] = useState<Array<PostTypes>>([]);
    // useEffect(() => {
    //     const fectposts = async () => {
    //        const result = await fetch(`{BASE_URL}/posts`)
    //        .then(result => result.json())
    //        .then((data) => setPosts(data))
    //     }
    // }, [setPosts])

  return (
    <>
        <Layout>
            <div className="container">
             
            </div>
      </Layout>
    </>

  )
}
