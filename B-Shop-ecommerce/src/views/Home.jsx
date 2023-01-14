import React from 'react'
import Layout from '../components/Layout/Layout'
import { UseGetProducts } from "../data/api-hooks";


export default function Home() {
  return (
    <>
        <Layout>
            <div className="container">
            <UseGetProducts />
            </div>
      </Layout>
    </>
  )
}
