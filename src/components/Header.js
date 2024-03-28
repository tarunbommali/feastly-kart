import React from 'react'
import { MdFavoriteBorder } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { IoMdGitCompare } from "react-icons/io";



export default function Header() {
  return (
    <div className='flex justify-between items-center py-4 px-8 text-4xl font-bold'>
      <h1>Feastly<span className='text-green-600'>Kart</span></h1>
      <div className='flex w-[40%] justify-between items-center text-lg font-normal bg-white border rounded-sm px-2 py-2'>
        <input type='search' className='bg-white w-[100%] border-none outline-none' placeholder='Search for products, brands and more'/>
        <IoSearch className='mx-1'/>
      </div>
<div className='flex items-center px-3'>
      <button><MdFavoriteBorder className='px-2' /></button>
      <button><IoMdGitCompare className='px-2'/></button>
      </div>

      </div>
  )
}
