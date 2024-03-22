"use client"
const SideBar = ({ sidebar, setsidebar }) => {
    return (
        <>

            <aside className={`absolute top-0 left-0 h-full transition-all duration-1000 ease-in-out ${!sidebar ? "md:w-[25vw] w-[60vw] -translate-x-full" : "md:w-[40vw] w-[60vw] -translate-x-1"}`}>
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <div className="w-4 text-xxl fixed top-1/2 right-[-15px]"><button className='w-5 h-10 text-gray-50 bg-gray-700' onClick={()=>setsidebar(!sidebar)}>{sidebar ? "<":">"}</button></div>
                    <ul className="space-y-2 font-medium">
                        <li>
                            <div className="flex items-center p-2 text-gray-100 rounded-lg hover:bg-gray-700">
                                <span className="ms-3">Hello user</span>
                            </div>
                        </li>
                        <li>
                            <button type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                                <span className="flex-1 ms-3 text-left rtl:text-right">Discussion Forum</span>
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>
                        </li>
                        <li>
                            <div className="flex items-center p-2 text-gray-100 rounded-lg hover:bg-gray-700">
                                <span className="flex-1 ms-3">Market stories</span>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center p-2 text-gray-100 rounded-lg hover:bg-gray-700">
                                <span className="flex-1 ms-3">Sentiment</span>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center p-2 text-gray-100 rounded-lg hover:bg-gray-700">
                                <span className="flex-1 ms-3">Market</span>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center p-2 text-gray-100 rounded-lg hover:bg-gray-700">
                                <span className="flex-1 ms-3">Sector</span>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center p-2 text-gray-100 rounded-lg hover:bg-gray-700">
                                <span className="flex-1 ms-3">Watchlist</span>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center p-2 text-gray-100 rounded-lg hover:bg-gray-700">

                                <span className="flex-1 ms-3 ">Event</span>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center p-2 text-gray-100 rounded-lg hover:bg-gray-700">

                                <span className="flex-1 ms-3 ">News/Interview</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    )
}

export default SideBar