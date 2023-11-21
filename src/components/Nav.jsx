// import { useState, useEffect, useRef } from "react";
// import ArrowDown from "../assets/images/icon-arrow-down.svg";
// import TodoList from "../assets/images/icon-todo.svg";
// import Calendar from "../assets/images/icon-calendar.svg";
// import Reminders from "../assets/images/icon-reminders.svg";
// import Planning from "../assets/images/icon-planning.svg";

// function Nav() {
//   const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
//   const [isCompanyOpen, setIsCompanyOpen] = useState(false);

//   const featuresRef = useRef();
//   const companyRef = useRef();

//   const toggleFeatures = () => {
//     setIsFeaturesOpen(!isFeaturesOpen);
//   };

//   const toggleCompany = () => {
//     setIsCompanyOpen(!isCompanyOpen);
//   };

//   // useEffect(() => {
//   //   let handler = (e) => {
//   //     if(!featuresRef.current.contains(e.target) || !companyRef.current.contains(e.target)) {
//   //       setIsFeaturesOpen(false)
//   //       setIsCompanyOpen(false)
//   //     }
//   //   }
//   //   document.addEventListener("mousedown", handler);

//   //   return () => {
//   //     document.removeEventListener("mousedown", handler);
//   //   }
//   // })

//   useEffect(() => {
//     let featuresHandler = (e) => {
//       if (!featuresRef.current.contains(e.target)) {
//         setIsFeaturesOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", featuresHandler);

//     return () => {
//       document.removeEventListener("mousedown", featuresHandler);
//     };
//   });

//   useEffect(() => {
//     let companyHandler = (e) => {
//       if (!companyRef.current.contains(e.target)) {
//         setIsCompanyOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", companyHandler);

//     return () => {
//       document.removeEventListener("mousedown", companyHandler);
//     };
//   });

//   return (
//     <div className="hidden md:flex md:flex-row md:justify-between md:mt-5">
//       <div className="flex flex-row justify-around w-1/2">
//         <h1 className="text-5xl font-bold">snap</h1>
//         <div ref={featuresRef}>
//           <button
//             className="flex flex-row justify-between font-semibold opacity-60 hover:opacity-100 mt-3 relative"
//             onClick={toggleFeatures}
//           >
//             Features
//             <img
//               src={ArrowDown}
//               alt="Arrow Icon"
//               className={`ml-2 mt-2.5  ${
//                 isFeaturesOpen
//                   ? "transform rotate-180 transition-transform"
//                   : ""
//               }`}
//             />
//           </button>
//           {isFeaturesOpen && (
//             <div className="mb-3 absolute top-16 left-36 ml-2">
//               <div className="flex flex-row justify-center items-center mt-2">
//                 <img src={TodoList} alt="Todo Icon" className="w-5 h-5" />
//                 <p className="ml-3">Todo List</p>
//               </div>
//               <div className="flex flex-row justify-center items-center mt-2">
//                 <img src={Calendar} alt="Todo Icon" className="w-5 h-5" />
//                 <p className="ml-3">Calendar</p>
//               </div>
//               <div className="flex flex-row items-center mt-2 ml-3">
//                 <img src={Reminders} alt="Todo Icon" className="w-5 h-5" />
//                 <p className="ml-3">Reminders</p>
//               </div>
//               <div className="flex flex-row justify-center items-center mt-2">
//                 <img src={Planning} alt="Todo Icon" className="w-5 h-5" />
//                 <p className="ml-3">Planning</p>
//               </div>
//             </div>
//           )}
//         </div>
//         <div ref={companyRef}>
//           <button
//             className="flex flex-row justify-between font-semibold opacity-60 hover:opacity-100 mt-3 relative"
//             onClick={toggleCompany}
//           >
//             Company
//             <img
//               src={ArrowDown}
//               alt="Arrow Icon"
//               className={`ml-2 mt-2.5  ${
//                 isCompanyOpen ? "transform rotate-180 transition-transform" : ""
//               }`}
//             />
//           </button>
//           {isCompanyOpen && (
//             <div className="absolute top-16 left-80 ml-2">
//               <ul>
//                 <li className="my-1">History</li>
//                 <li className="my-1">Our Team</li>
//                 <li className="my-1">Blog</li>
//               </ul>
//             </div>
//           )}
//         </div>
//         <button className="font-semibold opacity-60 hover:opacity-100">
//           Careers
//         </button>
//         <button className="font-semibold opacity-60 hover:opacity-100">
//           About
//         </button>
//       </div>
//       <div className="flex flex-row justify-around w-96 mr-5">
//         <button className="opacity-60 hover:opacity-100">Login</button>
//         <button className="border border-black border-opacity-60 rounded-lg px-11 py-1 opacity-60 hover:opacity-100">
//           Register
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Nav;

import { useState, useEffect, useRef } from "react";
import ArrowDown from "../assets/images/icon-arrow-down.svg";
import TodoList from "../assets/images/icon-todo.svg";
import Calendar from "../assets/images/icon-calendar.svg";
import Reminders from "../assets/images/icon-reminders.svg";
import Planning from "../assets/images/icon-planning.svg";

function Nav() {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  const featuresRef = useRef(null);
  const companyRef = useRef(null);

  const toggleFeatures = () => {
    setIsFeaturesOpen(!isFeaturesOpen);
  };

  const toggleCompany = () => {
    setIsCompanyOpen(!isCompanyOpen);
  };

  const closeDropdowns = (e) => {
    // Check if the clicked element is outside the features and company dropdowns
    if (
      featuresRef.current &&
      !featuresRef.current.contains(e.target) &&
      companyRef.current &&
      !companyRef.current.contains(e.target)
    ) {
      setIsFeaturesOpen(false);
      setIsCompanyOpen(false);
    }
  };

  useEffect(() => {
    // Attach the event listener when the component mounts
    window.addEventListener("click", closeDropdowns);

    // Detach the event listener when the component unmounts
    return () => {
      window.removeEventListener("click", closeDropdowns);
    };
  }, []);

  const getDropdownStyle = (dropdownRef, buttonRef) => {
    if (buttonRef.current && dropdownRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      return {
        top: buttonRect.bottom + window.scrollY,
        left: buttonRect.left + window.scrollX,
      };
    }
    return {};
  };

  return (
    <div className="hidden md:flex md:flex-row md:justify-between md:mt-5">
      <div className="flex flex-row justify-around w-1/2">
        <h1 className="text-5xl font-bold">snap</h1>
        <div ref={featuresRef}>
          <button
            className="flex flex-row justify-between font-semibold opacity-60 hover:opacity-100 mt-3 relative"
            onClick={toggleFeatures}
          >
            Features
            <img
              src={ArrowDown}
              alt="Arrow Icon"
              className={`ml-2 mt-2.5  ${
                isFeaturesOpen
                  ? "transform rotate-180 transition-transform"
                  : ""
              }`}
            />
          </button>
          {isFeaturesOpen && (
            <div
              className="mb-3 absolute"
              style={getDropdownStyle(featuresRef, featuresRef)}
            >
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
        </div>
        <div ref={companyRef}>
          <button
            className="flex flex-row justify-between font-semibold opacity-60 hover:opacity-100 mt-3 relative"
            onClick={toggleCompany}
          >
            Company
            <img
              src={ArrowDown}
              alt="Arrow Icon"
              className={`ml-2 mt-2.5  ${
                isCompanyOpen ? "transform rotate-180 transition-transform" : ""
              }`}
            />
          </button>
          {isCompanyOpen && (
            <div
              className="absolute"
              style={getDropdownStyle(companyRef, companyRef)}
            >
              <ul>
                <li className="my-1">History</li>
                <li className="my-1">Our Team</li>
                <li className="my-1">Blog</li>
              </ul>
            </div>
          )}
        </div>
        <button className="font-semibold opacity-60 hover:opacity-100">
          Careers
        </button>
        <button className="font-semibold opacity-60 hover:opacity-100">
          About
        </button>
      </div>
      <div className="flex flex-row justify-around w-96 mr-5">
        <button className="opacity-60 hover:opacity-100">Login</button>
        <button className="border border-black border-opacity-60 rounded-lg px-11 py-1 opacity-60 hover:opacity-100">
          Register
        </button>
      </div>
    </div>
  );
}

export default Nav;
