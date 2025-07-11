import React, { useRef, useState } from 'react'
import autoResize from '../hooks/autoResize'
import { Link } from 'react-router';
const Uploader = () => {
  const textAreaRef = useRef(null);
  const [value, setValue] = useState('');
  autoResize(textAreaRef, value);
  return (
    <>
    <div className="w-full flex justify-between items-center p-4 fixed top-0 left-0 z-[20]">
      <button className="text-black hover:bg-gray-200 px-2 py-1 rounded-md cursor-pointer">Saved</button>

      <Link to="/">
          <button className="text-black hover:bg-gray-200 px-2 py-1 rounded-md cursor-pointer">Logout</button>
      </Link>
    </div>
     <div className="flex justify-center items-center h-screen">
        <div className="border w-150 px-8 py-2 rounded-2xl mt-[65vh] bg-black/85">
          <textarea placeholder="Type." type="text" className="w-full focus:outline-none resize-none text-white" ref={textAreaRef} value={value} onChange={(e) => setValue(e.target.value)} rows={1}/>
        </div>
      </div>    
    </>
  )
  
}

export default Uploader