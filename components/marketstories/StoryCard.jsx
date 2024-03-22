"use client"

const StoryCard = ({data}) => {
  console.log(data)
  return (
    <>

    <div className="max-w-xs bg-white border rounded-lg shadow text-gray-800 border-gray-700 my-5">
        <div>
            <img className="rounded-t-lg" src={data.pic} alt="card pic 1" />
        </div>
        <div className="flex flex-col items-center justify-center p-5">
            <div>
                <h5 className="mb-2 text-2xl font-bold text-gray-900 ">{data.post}</h5>
            </div>
            <p className="mb-3 font-normal text-gray-700 ">{data.post}</p>
        </div>
    </div>
    </>
  )
}

export default StoryCard