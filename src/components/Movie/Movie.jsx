import React from 'react'
import Star from "../Star"
import { Link } from 'react-router-dom'

const Movie = ({movie , index }) => {
  return (
  
    <div className=' h-[400px] w-[250px] flex flex-col justify-start items-center text-white '>
    <Link to = "/MovieInformation">
      <div className='w-[200px]  rounded-2xl overflow-hidden'>
      <img src="https://c8.alamy.com/comp/BKB5RX/titanic-year-1997-director-james-cameron-kate-winslet-leonardo-dicaprio-BKB5RX.jpg" alt="poster" className='w-full' />
      </div>
      </Link>
    
        <h1 className="font-semibold  mt-3  w-[200px] whitespace-nowrap overflow-hidden overflow-ellipsis"> title title title title title title title tithle thi
  </h1>
<div className='mt-2'>
<Star /> 
</div>
  
    </div>
  )
}

export default Movie
