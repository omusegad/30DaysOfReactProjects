import { Bell, Menu, Mic, Search, Video } from "lucide-react";
import yt from "../assets/yt.png";
import avator from "../assets/avator.jpg";
import { useState } from "react";

export default function Header() {
  const[showFullWidthSearth, setShowFullWidthSearth] = useState(false);
  return (
    <>
      <div className="flex flex-row justify-between gap-10 p-4 lg:gap-20">
        <div className="flex flex-shrink-0 gap-4">
          <button>
            <Menu />
          </button>
          <a href="/">
            <img className="w-32" src={yt} alt="" />
          </a>
        </div>

        <div className="flex justify-between gap-x-3">
          <form className="justify-center flex-grow hidden md:flex">
            <div className="flex  relative flex-grow max-w-[600px]">
              <input
                className="px-4 border rounded-full shadow w-px-4 shadow-inneshadow-amber-300 w-96"
                type="text"
                placeholder="Search"
              />
              <button onClick={() => setShowFullWidthSearth(true)} className="absolute right-0 px-3 py-2 rounded-r-full bg-slate-300 ">
                <Search />
              </button>
            </div>
          </form>
          <button className="p-2 rounded-full md:hidden bg-slate-300">
            <Search />
          </button>
          <div className="p-2 text-center rounded-full bg-slate-200 hover:bg-slate-100">
            <Mic />
          </div>
        </div>
        <div className="flex flex-row justify-between flex-shrink-0 gap-x-6">
          <Video />
          <Bell />
          <div className="rounded-full">
            <img className="h-8 rounded-full" src={avator} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
