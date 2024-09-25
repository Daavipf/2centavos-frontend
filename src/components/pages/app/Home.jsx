import { useEffect, useState } from "react"
import api from "../../../utils/api"
import PostInFeed from "../../layout/PostInFeed"

export default function Home(){
  const [posts, setPosts] = useState([])
  useEffect(()=>{
    async function fetchPosts(){
      await api.get('/posts/readall')
        .then((response)=>{
          setPosts(response.data)
        })
    }
    fetchPosts()
  }, [])
  
  return (
    <main className="">
      <ul className="flex flex-col items-center">
        {posts.length > 0 ? 
          (posts.map((post)=>(
              <li key={post._id} className="w-full">
                <PostInFeed post={post}/>
              </li>
            ))
          ) : (
            <h2>Siga alguém para ver seus posts</h2>
          )
        }
      </ul>
    </main>
  )
}