import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode'
import { AuthContext } from '../../context/AuthContext';
import {Avatar} from 'flowbite-react'
import { FaRegCommentDots, FaRegHeart, FaHeart, FaRegBookmark } from "react-icons/fa6";
import api from '../../utils/api';


export default function PostInFeed({post}){
  const {authenticated} = useContext(AuthContext)
  const navigate = useNavigate()
  const [likes, setLikes] = useState(post.likes.length);
  const [likeState, setLikeState] = useState(false);

  useEffect(()=>{
    const token = localStorage.getItem('token')
    if(token){
      const userId = jwtDecode(token).id
      setLikeState(post.likes.includes(userId))
    }
  }, [post.likes])
  
  async function toggleLike(){
    if(!authenticated){
      navigate('/login')
    }
    const liked = !likeState
    const response = await api.post(`/posts/updatelike/${post._id}`, {liked})
    setLikeState(liked)
    setLikes(response.data.likes)
  }
  
  return (
    <div className="w-full p-4 shadow rounded-lg flex flex-col gap-4">
      <div className='flex items-center gap-4'>
        <Avatar rounded/>
        <div>
          <p className=''>{post.author.realname}</p>
          <p className="text-sm italic text-gray-600">@{post.author.username}</p>
        </div>
      </div>
      <div>
        <p className="text-lg">{post.text}</p>
      </div>
      <div className='flex justify-between text-gray-500'>
        <button className='flex items-center gap-2'>
          <FaRegCommentDots/>
          <p className='text-xs'>{post.comments_count}</p>
        </button>
        <button className='flex items-center gap-2' onClick={toggleLike}>
          {likeState ? (<FaHeart/>) : (<FaRegHeart/>)}
          <p className='text-xs'>{likes}</p>
        </button>
        <button className='flex items-center gap-2'>
          <FaRegBookmark/>
        </button>
      </div>
      
    </div>
  )
}