import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'

export default function Login() {
  const [token, setToken] = useState(localStorage.getItem('token') || null)

//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [error, setError] = useState('')
  const url = "https://fakestoreapi.com/auth/login";

    const login = (username, password) =>  {
        fetch(url,{
            method: 'POST',
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
              }),
          
        })
        .then( res => res.json())
        .then( data => console.log(data))
        .catch( err => console.log(err))
    }

    login("mor_2314", "83r5^_") 


//   useEffect(() => {

//   });


  return (
    <>
      <Layout>
        <div className="container">
            <hr />
            <div className="col-lg-12">
                <h3>Register Today</h3>
            </div>
            <div className="col-lg-6">
                <div className="form-group">
                <input
                type="text"
                value={email}
                onChange ={ (e) => {setEmail(e.target.value)}}
                className="form-control mb-3"
                placeholder="Email"
                ></input>
               </div>
            </div>
      
          <div className="col-lg-6">
            <div className="form-group">
                <input
                type="password"
                value={password}
                onChange={(e) => {setPassword(e.target.value)}}
                className="form-control col-lg-6"
                placeholder="Password"
                ></input>
            </div>
          </div>
          
          <input className='mt-4' type="submit" value="SUBMIT"/>
        </div>
      </Layout>
    </>
  )
}
