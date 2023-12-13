import React from 'react'
import Star from '../Star'
import { BiStar } from "react-icons/bi";
import { GoTriangleRight } from "react-icons/go";

const MovieInformation = () => {
  return (
    <section className=' flex flex-col justify-center items-center w-full max-w-[1700px] lg:flex-row lg:items-start'>
        <div className='w-full  flex justify-center items-center lg:w-[50%]'>
        <div className='w-[80%]  my-5 shadow-lg shadow-light-blue flex justify-center items-center rounded-2xl overflow-hidden'>
        <img src="https://c8.alamy.com/comp/BKB5RX/titanic-year-1997-director-james-cameron-kate-winslet-leonardo-dicaprio-BKB5RX.jpg" alt="poster" className='w-full' />
     </div>
  </div>
        <div className='  w-full  flex flex-col justify-start items-center  text-white p-5  lg:w-[50%]'>
          <div className='w-[70%]'>
              <div className=' text-center w-full '>
                <h1 className='font-black text-3xl'>Titanic</h1>
                <p className='text-sm mt-2'>Titanic is a Tamil movie starring Kalaiyarasan Harikrishnan and Anandhi in prominent roles</p>
              </div>
              <div className=' mt-3 w-full flex flex-col justify-center items-center lg:justify-between  lg:flex-row '>
                <Star />
                <p className='mt-3 '>
                  117 min / 2023-12-06 / english
                </p>
              </div>
              <div className= ' mt-3 w-full'>
                <h1 className='font-bold mb-3 '>Genre:</h1>
                <div className='flex gap-4 '>
              <button className=' px-4 py-2  flex justify-center items-center gap-2 rounded-lg bg-light-blue'>
              <p className='uppercase '>genre2</p>
              <BiStar />
            </button>
            </div>
            <div className=''>
              <button className=' px-4 py-2  flex justify-center items-center gap-2 rounded-lg bg-light-blue'>
              <p className='uppercase '>genre2</p>
              <BiStar />
            </button>
            </div>
              </div>
              <div className='  mt-3 '>
                <h1 className='font-bold'>Information:</h1>
                <p className='mt-3'>Titanic is a Tamil movie starring Kalaiyarasan Harikrishnan and Anandhi in prominent roles. The cast also includes Ashna Zaveri and Kaali Venkat.
                 It is a romance comedy directed by M. Janakiraman, with Nivas Prasanna as the music director, forming part of the crew.</p>
              </div>
              <div className=' w-full mt-5'>
                <h1 className='font-bold mb-3'>Topcast:</h1>
                <div className= ' flex flex-wrap justify-center items-center gap-2'>
                    <div className=' flex  justify-center items-center flex-col'>
                      <div className='w-[100px] rounded-lg overflow-hidden'>
                      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa4xjShh4ynJbrgYrW_aB4lhKSxeMzQ3cO_A&usqp=CAU' alt='Caste image' />
                    </div>
                      <p className='whitespace-nowrap overflow-hidden overflow-ellipsis'>Caste Name</p>
                    </div>
                    
                    <div className=' flex  justify-center items-center flex-col'>
                      <div className='w-[100px] rounded-lg overflow-hidden'>
                      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa4xjShh4ynJbrgYrW_aB4lhKSxeMzQ3cO_A&usqp=CAU' alt='Caste image' />
                    </div>
                      <p className='whitespace-nowrap overflow-hidden overflow-ellipsis'>Caste Name</p>
                    </div>

                    <div className=' flex  justify-center items-center flex-col'>
                      <div className='w-[100px] rounded-lg overflow-hidden'>
                      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa4xjShh4ynJbrgYrW_aB4lhKSxeMzQ3cO_A&usqp=CAU' alt='Caste image' />
                    </div>
                      <p className='whitespace-nowrap overflow-hidden overflow-ellipsis'>Caste Name</p>
                    </div>

                    <div className=' flex  justify-center items-center flex-col'>
                      <div className='w-[100px] rounded-lg overflow-hidden'>
                      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa4xjShh4ynJbrgYrW_aB4lhKSxeMzQ3cO_A&usqp=CAU' alt='Caste image' />
                    </div>
                      <p className='whitespace-nowrap overflow-hidden overflow-ellipsis'>Caste Name</p>
                    </div>

                    <div className=' flex  justify-center items-center flex-col'>
                      <div className='w-[100px] rounded-lg overflow-hidden'>
                      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa4xjShh4ynJbrgYrW_aB4lhKSxeMzQ3cO_A&usqp=CAU' alt='Caste image' />
                    </div>
                      <p className='whitespace-nowrap overflow-hidden overflow-ellipsis'>Caste Name</p>
                    </div>

                    <div className=' flex  justify-center items-center flex-col'>
                      <div className='w-[100px] rounded-lg overflow-hidden'>
                      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa4xjShh4ynJbrgYrW_aB4lhKSxeMzQ3cO_A&usqp=CAU' alt='Caste image' />
                    </div>
                      <p className='whitespace-nowrap overflow-hidden overflow-ellipsis'>Caste Name</p>
                    </div>
                </div>
              </div>
              <div className=' w-full mt-3 flex justify-start items-center'>
                <button className='px-3 py-2 border rounded-lg mr-4 flex justify-center items-center gap-2' >
                 <span>Website</span> 
                  <GoTriangleRight />
                  </button>
                <button className='px-3 py-2 border rounded-lg flex justify-center items-center gap-2' >
                 <span>Trailer</span> 
                  <GoTriangleRight />
                  </button>
              </div>
            </div>
        </div>

    </section>
  )
}

export default MovieInformation

