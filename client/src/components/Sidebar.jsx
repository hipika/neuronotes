import React, { useState, useEffect } from 'react'
import NewUpload from './NewUpload'
import { BookmarkIcon } from '@heroicons/react/24/solid';
import { TrashIcon } from "@heroicons/react/24/outline";
const Sidebar = ({ onSelectSession }) => {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const fetchSessions = async () => {
      const res = await fetch('http://localhost:5000/api/users/sessions', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwt')}` 
        }
      });
      const data = await res.json();
      setSessions(data);
    };
    fetchSessions();
  }, []);

  const handleDelete = async (e, sessionId) => {
    e.stopPropagation();
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5000/api/users/sessions/${sessionId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwt')}`
        }

      });
      if (res.ok) {
        setSessions(prevSession => prevSession.filter(session => session.id !== sessionId));
      }
      else {
        console.log(e);
      }
      
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="p-2 flex flex-row h-screen relative">
      <div className="bg-black/90 max-w-xs p-4 ml-2 mt-15 mb-10 [&::-webkit-scrollbar]:hidden overflow-y-auto md:min-w-[15rem]">
        <div> 
          <NewUpload />
          {/* Map through chatrows */}
          <div className="mt-4">
           <h2 className="text-white text-sm mb-2">Saved Chats</h2>
            {sessions.map(session => (
              <div
              key={session.id}
              className="p-2 bg-white/10 text-white rounded hover:bg-white/20 cursor-pointer mb-1 flex justify-between items-center"
              onClick={() => onSelectSession(session)}
              >
              <span>{session.title}</span>
              <TrashIcon onClick={(e) => handleDelete(e, session.id)} className="h-4 w-4 text-red-500" />
            </div>
            ))}
          </div> 
        </div> 
      </div> 
    </div>
  );
};


export default Sidebar