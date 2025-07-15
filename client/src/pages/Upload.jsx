import React from 'react'
import Uploader from '../components/Uploader'
import { Link } from 'react-router'

const Upload = () => {

  const handleClick = () => {
    localStorage.removeItem("jwt");
    console.log("user logged out") 
  }

  return (
    <div>

      <div className="w-full flex justify-between items-center p-4 fixed top-0 left-0 z-[20]">
        <button className="text-black hover:bg-gray-200 px-2 py-1 rounded-md cursor-pointer">Saved</button>

        <Link to="/">
            <button onClick={handleClick} className="text-black hover:bg-gray-200 px-2 py-1 rounded-md cursor-pointer">Logout</button>
        </Link>
      </div>
      <Uploader/>

    </div>
  )
}

export default Upload