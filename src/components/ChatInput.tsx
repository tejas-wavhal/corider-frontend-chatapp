import { useState } from "react"
import { GrAttachment } from "react-icons/gr"
import { RxPaperPlane } from "react-icons/rx"

const ChatInput = () => {

  const [message, setMessage] = useState<string>('')

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // console.log(message)
    setMessage("")
  }

  return (
    <form onSubmit={handleOnSubmit} className="relative mb-4">
      <input value={message} onChange={(e) => setMessage(e.target.value)} className="w-full px-3 py-2 rounded-xl placeholder:text-sm" type="text" placeholder="Reply to @Rohit Yadav" />
      <div className="flex space-x-4 absolute top-2.5 end-0 mr-5 bg-white rounded-xl">
        <GrAttachment className="icon" />
        <button type="submit"><RxPaperPlane className="icon hover:scale-150 duration-150" /></button>
      </div>
    </form>
  )
}

export default ChatInput