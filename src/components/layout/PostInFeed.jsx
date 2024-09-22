import {Avatar} from 'flowbite-react'
import { FaRegCommentDots, FaRegHeart, FaRegBookmark } from "react-icons/fa6";

export default function PostInFeed({text, username, realname}){
  return (
    <div className="w-full p-4 shadow rounded-lg flex flex-col gap-4">
      <div className='flex items-center gap-4'>
        <Avatar rounded/>
        <div>
          <p className=''>{realname}</p>
          <p className="text-sm italic text-gray-600">@{username}</p>
        </div>
      </div>
      <div>
        <p className="text-lg">{text}</p>
      </div>
      <div className='flex justify-between text-gray-500'>
        <button className='flex items-center gap-2'>
          <FaRegCommentDots/>
          <p className='text-xs'>12</p>
        </button>
        <button className='flex items-center gap-2'>
          <FaRegHeart/>
          <p className='text-xs'>12</p>
        </button>
        <button className='flex items-center gap-2'>
          <FaRegBookmark/>
          <p className='text-xs'>12</p>
        </button>
      </div>
      
    </div>
  )
}