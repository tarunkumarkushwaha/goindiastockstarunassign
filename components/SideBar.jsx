"use client"

import { useCallback, useEffect, useRef } from "react"

const SideBar = ({ sidebar, setsidebar }) => {

    const toggleNav = function () {
        setsidebar(!sidebar)
    }

    const menuRef = useRef();

    const closeOpenMenus = useCallback(
        (e) => {
            if (
                menuRef.current &&
                sidebar &&
                !menuRef.current.contains(e.target)
            ) {
                setsidebar(false);
            }
        },
        [sidebar]
    );

    useEffect(() => {
        document.addEventListener("mousedown", closeOpenMenus);
    }, [closeOpenMenus]);

    return (
        <>

            <aside ref={menuRef} className={`fixed top-0 left-0 h-full transition-all duration-1000 ease-in-out ${!sidebar ? "md:w-[25vw] w-[60vw] -translate-x-full" : "md:w-[40vw] w-[60vw] -translate-x-1"}`}>
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800">
                    <div className="w-4 text-xxl fixed top-1/2 right-[-15px]"><button className='w-5 h-10 text-gray-50 bg-gray-700' onClick={toggleNav}>{sidebar ? "<":">"}</button></div>
                    <ul className="space-y-2 font-medium">
                        <li>
                            <div className="flex items-center p-2 text-gray-100 rounded-lg hover:bg-gray-700">
                                <span className="ms-3">Hello user</span>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center p-2 text-gray-100 rounded-lg hover:bg-gray-700">
                                <span className="flex-1 ms-3">Discussion Forum</span>
                            </div>
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