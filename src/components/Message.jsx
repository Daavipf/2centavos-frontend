import { useState, useEffect } from "react"
import bus from '../utils/bus'

export default function Message(){
  const [visible, setVisible] = useState(false)
  const [message, setMessage] = useState("")

  useEffect(()=>{
    bus.addListener('flash', ({message})=>{
      setVisible(true)
      setMessage(message)

      setTimeout(()=>{
        setVisible(false)
      }, 3000)
    })
  }, [])

  return (
    visible && (
      <div className="fixed bottom-12 left-4 z-10 w-fit p-2.5 rounded bg-amber-600/65 border border-amber-600">
        <p className="text-sm">{message}</p>
      </div>
    )
  )
}