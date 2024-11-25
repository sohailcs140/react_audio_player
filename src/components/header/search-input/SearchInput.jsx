import React from 'react'
import { IoSearchOutline } from "react-icons/io5";

export default function SearchInput() {
  return (
    <div className="flex gap-2 items-center border p-2 
    ps-3 text-[1rem] rounded-lg text-light-dim
    w-[80%]
    ">
        <IoSearchOutline className="text-[1.4rem]"/>
        <input type="search" name="search" id="search" placeholder="Search artist, title, album"
        className={`
            outline-none
            border-none
            w-[100%]
            inline-block
            `}
        />
    </div>
  )
}

