import React from "react"
import { Link, useLocation } from "react-router"

const Navbar = () => {
  const location = useLocation();
  const onAuthPage = location.pathname === "/login" || location.pathname === "/join"
  
  return (
    <>
    <header className="w-full flex justify-between items-center p-4 fixed top-0 left-0 z-[20]">
        <h1 className={`text-2xl font-mono font-bold tracking-normal:w ${onAuthPage ? "text-white" : "text-black"}`}>
          neuronotes
        </h1>
      <div className="flex space-x-8">
        <Link to="/">
          <button className="text-black hover:bg-gray-200 px-2 py-1 rounded-md cursor-pointer">About</button>
        </Link>
        <Link to="/login">
          <button className="text-black hover:bg-gray-200 px-2 py-1 rounded-md cursor-pointer">Login</button>
        </Link>
        <Link to="/join">
          <button className="text-white bg-black text-sm border py-2 px-4" >Join</button>
        </Link>

      </div>
    </header>
    
    </>
  )
}

export default Navbar