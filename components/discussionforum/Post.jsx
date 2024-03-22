"use client"
import { useState } from "react"

const Post = ({ data }) => {
    const [Like, setLike] = useState(false)


    const likeClick = () => {
        !Like ? setLike(true) : setLike(false)
    }

    return (
        <>
            <div className="pt-4 m-4 text-[15px] w-full min-w-xl rounded-lg shadow border bg-white border-[#D1D5DB] mx-auto">

                <div className="max-h-[772px] min-w-full max-w-full overflow-y-auto text-primary thin-scrollbar">
                    <div className="flex py-2">
                        <div className="min-w-[20px]">
                        </div>
                        <div className="max-w-full rounded-md px-2 rounded-br-none flex-1">
                            <p>
                                {data}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between p-3 pl-5 border-t border-gray-200 text-xs xl:text-sm text-[#6B7280]">
                    <button className="flex items-center" onClick={likeClick}>
                        {Like ?
                            ""
                            : ""
                        }
                        <div className={Like ? "pl-1.5 text-[#1055EB]" : 'pl-1.5'}>Like</div>

                    </button>
                    <button className="flex items-center">

                        <div className={"pl-1.5 text-[#EF4444]"}>Views</div>
                    </button>
                    <div className="flex items-center">

                        <div className={'pl-1.5 text-black'}>Comments</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Post