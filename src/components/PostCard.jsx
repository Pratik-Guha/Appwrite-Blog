import React from 'react'
import service from '../appwrite/confo'
import {Link} from 'react-router-dom'

function PostCard ({$id,title,faturedimage}) {
  return (
    <Link to={`/post/${$id }`}>
        <div className='w-full  rounded-xl p-14 md:p-4 bg-orange-300 gap-4 transition-all ease-in-out hover:bg-orange-100 duration-500 shadow-xl shadow-violet-500'>
            <div className='w-full justify-center mb-4 '>
                <img src={service.getFilePreview(faturedimage)} alt={title} className=' rounded-xl' />
            </div>
            <h2 className=' md:text-xl text-lg font-bold '>{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard