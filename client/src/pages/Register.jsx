import React, { useState } from 'react'
import  { BrowserRouter, Route, Routes, Link, useNavigate } from "react-router";
import Form from '../components/Form';
import Navbar from '../components/Navbar';
import Animation from '../components/Animation';
const Register = () => {
  const [joinData, setJoinData] = useState({ username: "", email: "", password: "" })
  const navigate = useNavigate();
  // handling change ...-> apply this function to all values
  const handleChange = (e) => {
    setJoinData({ ...joinData, [e.target.name]: e.target.value})
  }

  // handling submit
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const response = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(joinData) // turns updated joinData into json format
      })
      
      const result = response.json();

      if(result.success === true) {
        const token = result.token;
        localStorage.setItem("jwt", token);
        navigate("/upload")
      }
    } catch (e) {
      console.log(e);
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
              Join Today!
            </h2>
          </div>

          <form className="mt-10 space-y-6" onSubmit={handleSubmit}>
            <Form placeholder="Username" name="username" onChange={handleChange} type="text" autocomplete="username" id="username" value={joinData.username} />
            <Form placeholder="Email" name="email" onChange={handleChange} type="email" autocomplete="email" id="email" value={joinData.email} />
            <Form placeholder="Password" name="password" onChange={handleChange} type="password" autocomplete="current-password" id="password" value={joinData.password}/>

            <div className="mt-2">
              <button
                type="submit"
                onSubmit={handleSubmit}
                className="flex w-full justify-center bg-black px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-black/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Join
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register