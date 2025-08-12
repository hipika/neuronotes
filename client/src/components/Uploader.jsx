import React, { useRef, useState } from 'react'
import autoResize from '../hooks/autoResize'
import { Link } from 'react-router';
const Uploader = () => {
  const textAreaRef = useRef(null);
  const [value, setValue] = useState('');
  const [submitted, hasSubmitted] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/users/store", {
        method: "POST",
        headers: {"Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("jwt")}`},
        body: JSON.stringify({
          title: value.slice(0, 20) + '...', // auto title breaks it down,
          messages: [value],
          nodes: [],

        })
      });
      const data = await response.json();
      console.log("saved sessions", data);
      setValue("")
    } catch (e) {
      console.log(e);
    }
  }
  
  autoResize(textAreaRef, value);
  return (
    <>
    <form onSubmit={handleSubmit}
      className="fixed left-1/2 w-full max-w-2xl transform -translate-x-1/2 top-[90vh] z-20 bg-black/85 border border-gray-500 px-6 py-3 rounded-2xl shadow-lg flex flex-col items-center gap-2"
    >
      <textarea
        placeholder="Type your message..."
        className="w-full focus:outline-none resize-none text-white bg-transparent"
        ref={textAreaRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rows={1}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
          }
        }}
      />



    </form>
    </>
  )
  
}

export default Uploader