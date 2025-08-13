import React, { useState } from 'react'
import Uploader from '../components/Uploader'
import { Link } from 'react-router'
import Node from "../components/Node"
import Sidebar from '../components/Sidebar'

const Upload = () => {

  const [expanded, setExpanded] = useState(true);
  const [selectedSession, setSelectedSession] = useState(null);
  /*
    handle click  
    remove the item (token)
  */
  const handleClick = () => {
    localStorage.removeItem("jwt");
    console.log("user logged out") 
  };


  return (
    <div className="flex flex-row h-screen relative">
      {/* Sidebar component*/} 
      {expanded &&  <Sidebar onSelectSession={(session) => setSelectedSession(session)}/>}
      <button
        onClick={() => setExpanded((curr) => !curr)}
        className="absolute top-4 left-4 z-50 text-black hover:bg-gray-200 px-2 py-1 rounded-md cursor-pointer"
      >
        Saved
      </button>

      <div className="flex-1 flex flex-col relative">
      {/* Saved and Logout buttons*/}
      <div className="flex justify-between items-center p-4 fixed top-0 right-0 z-[20]">
        <Link to="/">
            <button onClick={handleClick} className="text-black hover:bg-gray-200 px-2 py-1 rounded-md cursor-pointer">Logout</button>
        </Link>
      </div>



      <div className="flex-1">
        <Node />
      </div>

      </div>
      <div className="overflow-auto">

      <Uploader/>

      </div>

    </div>
  )
}

export default Upload