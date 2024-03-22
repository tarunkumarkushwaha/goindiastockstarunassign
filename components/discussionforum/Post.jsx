"use client"
import { useState } from "react"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CommentIcon from '@mui/icons-material/Comment';

const Post = ({ data }) => {
    const [Like, setLike] = useState(false)


    const likeClick = () => {
        !Like ? setLike(true) : setLike(false)
    }

    return (
        <>
            <div className="max-w-sm max-w-sm w-full pt-4 text-[15px] rounded-lg shadow border bg-white border-[#D1D5DB] mx-auto">

                <div className="text-primary">
                    <p className="p-5">
                        {data}
                    </p>
                </div>

                <div className="flex justify-between p-3 pl-5 border-t border-gray-200 text-xs xl:text-sm text-[#6B7280]">
                    <button className="flex items-center" onClick={likeClick}>
                        {Like ?
                            <FavoriteIcon />
                            : <FavoriteBorderIcon />
                        }
                        <div className={Like ? "pl-1.5 text-[#1055EB]" : 'text-black pl-1.5'}>Like</div>

                    </button>
                    <button className="flex items-center">
                        <VisibilityIcon />
                        <div className={"pl-1.5 text-black"}>Views</div>
                    </button>
                    <div className="flex items-center">
                        <CommentIcon />
                        <div className={'pl-1.5 text-black'}>Comments</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Post