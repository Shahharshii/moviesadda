import React from 'react'
import { BiSolidStar} from "react-icons/bi";
import { BiSolidStarHalf} from "react-icons/bi";
import { BiStar} from "react-icons/bi";


const Star = () => {
    const rating = 8.6 ;
    const starRating = rating/2 ;
    const starPrinting = Array.from({ length : 5}, (ele, index) => {
        let n = index + 0.5 ;
return(
    <span key={index} className='text-yellow-500'>
        {
(starRating >= index + 1 ) ?(
    <BiSolidStar />
) : (starRating >= n ) ? (
   < BiSolidStarHalf />
): (
    <BiStar />
)
        }
    </span>
)
    })
  return (
    <div className='flex justify-center items-center gap-1 '>
        {starPrinting}
       
    </div>
  )
}

export default Star
