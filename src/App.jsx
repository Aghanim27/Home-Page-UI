import { useState } from "react";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Menu from "./assets/images/icon-menu.svg";
import MobileHero from "./assets/images/image-hero-mobile.png";

export default function App() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const toggleSideBar = () => {
    // console.log("open");
    setIsSideBarOpen(!isSideBarOpen);
  };
  return (
    <div>
      {isSideBarOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50"
          onClick={toggleSideBar} // Close sidebar when overlay is clicked
        />
      )}
      <div>
        <Nav />
        <div className="flex flex-row justify-between px-5 md:hidden">
          <h1 className="font-bold text-3xl sm:text-6xl">snap</h1>
          <img
            src={Menu}
            alt="menu-icon"
            onClick={toggleSideBar}
            className="pt-4 pb-2 md:hidden"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-10 sm:flex-row-reverse">
        <img src={MobileHero} alt="Hero Image" className="sm:mt-10 sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg" />
        <div className="flex flex-col justify-center items-center mt-16 xl:mr-20">
          <h1 className="font-bold text-center text-5xl">Make remote work</h1>
          <p className="text-center text-gray-500 font-semibold mt-5 px-10 leading-relaxed xl:w-96">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="bg-black text-white border border-white hover:bg-white hover:text-black hover:border hover:border-black font-semibold rounded-lg mt-9 px-4 py-2">
            Learn more
          </button>
        </div>
      </div>
      <Sidebar
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
      />
    </div>
    // <div>
    //   <Nav />
    // </div>
  );
}
