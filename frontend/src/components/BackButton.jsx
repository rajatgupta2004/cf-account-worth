import React from 'react'
import {Link} from'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs'
const BackButton = ({ destination ='/'}) => {
  return (
    <div className='flex'>
      <Link
      to={destination}
      className='text-white rounded-lg w-fit absolute top-5 right-5 sm:top-10 sm:right-10'
      >
        <img src='https://cdn-icons-png.flaticon.com/128/9073/9073032.png' alt='Search icon' className='w-8 h-8'/>
      </Link>
    </div>
  )
}

export default BackButton