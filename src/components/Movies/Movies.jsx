import React from 'react'
import Movielist from "../MovieList/MovieList"
import Pagination from "../Pagination/Pagination"

const Movies = () => {
  return (
   <section className='w-full flex flex-col justify-center items-center h-auto  p-5'>
    <Movielist />
    <Pagination />


   </section>
  )
}

export default Movies
