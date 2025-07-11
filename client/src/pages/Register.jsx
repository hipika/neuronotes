import React from 'react'
import  { BrowserRouter, Route, Routes, Link } from "react-router";
import Form from '../components/Form';
import Navbar from '../components/Navbar';
import Animation from '../components/Animation';
const Register = () => {
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

          <div className="mt-10">
            <Form placeholder="Username" type="text" autocomplete="username" id="username" />
            <Form placeholder="Email" type="email" autocomplete="email" id="email" />
            <Form placeholder="Password" type="password" autocomplete="current-password" id="password" />

            <div className="mt-2">
              <button
                type="submit"
                className="flex w-full justify-center bg-black px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-black/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register