import React, { useState } from 'react'
import Form from '../components/Form'
import Navbar from '../components/Navbar'
import Animation from '../components/Animation'
import axios from "axios"
import { useNavigate } from 'react-router'
const Login = () => {

  const [loginData, setLoginData] = useState({ username: "", password: "" })
  const [authed, setAuthed] = useState();
  const navigate = useNavigate();
    // handling change ...-> apply this function to all values
    const handleChange = (e) => {
      setLoginData({ ...loginData, [e.target.name]: e.target.value})
    }
  
    // handling submit
    const handleSubmit = async (e) => {
      e.preventDefault()
      
      try {
        
        const response = await fetch("http://localhost:5000/api/users/login", {
          method: "POST",
          headers: { "Content-Type": "application/json"},
          body: JSON.stringify(loginData) // turns updated joinData into json format  
         });
        
         // wait for result check success -> generate token -> navigate
         const result = await response.json();
         if (result.success === true) {
            const token = result.token;
            localStorage.setItem("jwt", token)
            navigate("/upload")
         }

      } catch (e) {
        console.log(e)
      }
    }
  


  return (
     <>
      <Navbar />
      <div className="relative h-screen w-screen">
        <div className="w-1/2 h-full">
          <Animation />

        </div>
        <div className="absolute bottom-[20%] right-[10%] px-6 py-12 w-full max-w-sm">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-end-left text-2xl/9 font-bold tracking-tight text-gray-900">
              Login
            </h2>
          </div>

          <form className="mt-10 space-y-6" onSubmit={handleSubmit}>
            <Form placeholder="Username" name="username" onChange={handleChange} type="text" autocomplete="username" id="username" value={loginData.username} />
            <Form placeholder="Password" name="password" onChange={handleChange} type="password" autocomplete="current-password" id="password" value={loginData.password}/>

            <div className="mt-2">
              <button
                type="submit"
                onSubmit={handleSubmit}
                className="flex w-full justify-center bg-black px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-black/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>  
  
  
  
  )
}

export default Login