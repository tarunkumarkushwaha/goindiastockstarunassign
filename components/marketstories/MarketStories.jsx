"use client"
import StoryCard from "./StoryCard"
import data from "@/Dummy Data/Data"

const MarketStories = ({ size, toggle }) => {
  return (
    <>
      {size < 767 ? !toggle && <div className="flex flex-col justify-center mx-auto">
        {data && data.marketingstories.map((item, index) => { return <StoryCard key={index} data={item} /> })}
      </div>
        :
        <div className="flex flex-col justify-center mx-auto">
          {data && data.marketingstories.map((item, index) => { return <StoryCard key={index} data={item} /> })}
        </div>}
    </>
  )
}

export default MarketStories