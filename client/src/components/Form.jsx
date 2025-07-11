import React from 'react'

const Form = ({ autocomplete, placeholder, type, id }) => {
  return (
    <div>
        
    <form className="space-y-6" action="#" method="POST">
      <div>
        <div className="mt-2">
          <input placeholder={placeholder} type={type} id={id} autocomplete={autocomplete} required class="block w-full bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black sm:text-sm/6" />
        </div>
      </div>

    </form>
    </div>
  )
}

export default Form