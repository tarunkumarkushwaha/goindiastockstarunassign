"use client"
import Post from "./Post"
import data from "@/Dummy Data/Data"

const DiscussionForum = ({ size, toggle }) => {
  return (
    <>
        {size < 767 ? toggle && <div className={`flex flex-col mx-auto`}>
          {data && data.post.map((item, index) => { return <Post key={index} data={item} /> })}
        </div> :
          <div className={`flex flex-col mx-auto`}>
            {data && data.post.map((item, index) => { return <Post key={index} data={item} /> })}
          </div>
        }
    </>
  )
}

export default DiscussionForum