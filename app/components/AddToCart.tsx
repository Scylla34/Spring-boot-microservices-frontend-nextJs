'use client';
import React from 'react'

const AddToCart = () => {
  return (
    <div>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    onClick={() => {
      console.log("Button clicked!");
    }}
    
    >
      Click me
    </button>
    </div>
  )
}

export default AddToCart