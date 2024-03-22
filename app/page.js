"use client"

import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";
import DiscussionForum from "@/components/discussionforum/DiscussionForum";
import MarketStories from "@/components/marketstories/MarketStories";
import { useLayoutEffect, useState } from "react";
// import data from "@/Dummy Data/Data"

export default function Home() {
  const [sidebar, setsidebar] = useState(false)
  const [toggle, settoggle] = useState(true)
  const [size, setSize] = useState(0);

  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return (
    <>
      <Navbar settoggle={settoggle} />
      <div className={`flex flex-row justify-between transition-all duration-1000 ease-in-out ${sidebar ? "ml-0 md:ml-[25vw]" : "md:ml-0 ml-0"}`}>
        <SideBar sidebar={sidebar} setsidebar={setsidebar} />
        <DiscussionForum size={size} toggle={toggle} settoggle={settoggle} />
        <MarketStories size={size} toggle={toggle} settoggle={settoggle} />
      </div>
    </>
  );
}
