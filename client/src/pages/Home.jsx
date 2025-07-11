import React from 'react';
import Login from './Login';
import Register from './Register';
import Navbar from '../components/Navbar';
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="font-semibold text-2xl font-mono w-3/5 ml-8 text-left mt-30">
        <p>build concept maps on the click of a button.</p>
        <p className="mt-5">rethink your entire learning experience.</p>
        <p className="mt-5">learn faster and more effectively than before.</p>
        <div className="font-normal font-sans">
          <h4 className="mt-30"> demonstration below </h4>

        </div>
      </div>
    </>
  )
}

export default Home;