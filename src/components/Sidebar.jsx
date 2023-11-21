import { useState } from "react";
import ArrowDown from "../assets/images/icon-arrow-down.svg";
import Close from "../assets/images/icon-close-menu.svg";
import TodoList from "../assets/images/icon-todo.svg";
import Calendar from "../assets/images/icon-calendar.svg";
import Reminders from "../assets/images/icon-reminders.svg";
import Planning from "../assets/images/icon-planning.svg";

function Sidebar({ isSideBarOpen, setIsSideBarOpen }) {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
    // console.log("close");
  };

  const toggleFeatures = () => {
    setIsFeaturesOpen(!isFeaturesOpen);
  };

  const toggleCompany = () => {
    setIsCompanyOpen(!isCompanyOpen);
  };

  return (
    <div
      className={`fixed h-ful bg-white text-black p-4 ${
        isSideBarOpen ? "top-0 right-0 w-2/3 h-screen" : "top-0 right-full"
      }`}
    >
      <div>
        <div className="relative">
          <img
            src={Close}
            alt="close-icon"
            className="absolute right-2 top-2 -mt-14"
            onClick={toggleSideBar}
          />
        </div>
        <div className="flex flex-col justify-around items-start mt-14 ml-5">
          <button className="flex flex-row my-2" onClick={toggleFeatures}>
            Features
            <img
              src={ArrowDown}
              alt="arrow-down"
              className={`w-3 h-2 mt-2 ml-2 ${
                isFeaturesOpen
                  ? "transform rotate-180 transition-transform"
                  : ""
              }`}
            />
          </button>
          {isFeaturesOpen && (
            <div className="mb-3">
              <div className="flex flex-row justify-center items-center mt-2">
                <img src={TodoList} alt="Todo Icon" className="w-5 h-5" />
                <p className="ml-3">Todo List</p>
              </div>
              <div className="flex flex-row justify-center items-center mt-2">
                <img src={Calendar} alt="Todo Icon" className="w-5 h-5" />
                <p className="ml-3">Calendar</p>
              </div>
              <div className="flex flex-row items-center mt-2 ml-3">
                <img src={Reminders} alt="Todo Icon" className="w-5 h-5" />
                <p className="ml-3">Reminders</p>
              </div>
              <div className="flex flex-row justify-center items-center mt-2">
                <img src={Planning} alt="Todo Icon" className="w-5 h-5" />
                <p className="ml-3">Planning</p>
              </div>
            </div>
          )}
          <button className="flex flex-row my-2" onClick={toggleCompany}>
            Company
            <img
              src={ArrowDown}
              alt="arrow-down"
              className={`w-3 h-2 mt-2 ml-2 ${
                isCompanyOpen
                  ? "transform rotate-180 transition-transform"
                  : ""
              }`}
            />
          </button>
          {isCompanyOpen && (
            <div>
              <ul className="ml-4">
                <li className="my-1">History</li>
                <li className="my-1">Our Team</li>
                <li className="my-1">Blog</li>
              </ul>
            </div>
          )}
          <button className="my-2">Careers</button>
          <button className="my-2">About</button>
        </div>
        <div className="flex flex-col justify-around mt-5">
          <button className="text-center">Login</button>
          <button className="border border-gray-500 rounded-lg mt-5 px-4 py-3">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
