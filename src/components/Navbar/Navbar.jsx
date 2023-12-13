import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Navbar = () => {
  return <div className="w-full px-7 py-5 text-white  flex justify-center bg-light-blue">
    <div className=" w-[100%] max-w-[1700px] flex items-center justify-between ">
    <Link to = "/"> 
<p className="font-black text-2xl">MoviesAdda</p>
</Link> 
<div className=" relative hidden sm:block ">
<input type ="text" placeholder="Enter a movie"
 className="bg-dark-Gray py-3 pl-4 pr-10 text-light-Gray border-none outline-none rounded-lg w-[200px] text-sm placeholder:text-sm" />
{        }
<FaSearch className="absolute right-3 top-[50%]  -translate-y-[50%]" />
 </div>
 <Link to = "/genre">
<button className="py-3 px-5 bg-dark-Gray rounded-lg text-sm" >Select Genre</button>
</Link>

    </div>
     </div>
};

export default Navbar;
