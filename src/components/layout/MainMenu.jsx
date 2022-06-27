import React from "react";

import { Link, useLocation } from "react-router-dom";

import { ReactComponent as Flag } from "../../svg/flag.svg";

import { BellIcon } from "@heroicons/react/solid";
import { ChevronDownIcon } from "@heroicons/react/solid";

import user from "../../img/person-2.jpg";

const MainMenu = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <nav className="bg-stone-100 shadow-sm sticky top-0">
      <div className=" container mx-auto px-4 py-8 flex flex-col sm:flex-row justify-between items-center">
        <div className="page-title pb-6 md:pb-0 text-3xl font-semibold">
          {location.pathname === "/"
            ? "My Recruitment"
            : location.pathname === "/create-recruitment"
            ? "Create Recruitment"
            : "Edit Recruitment"}
        </div>
        <ul className=" flex items-center">
          <li className="mr-4 flex items-center rounded-full px-3 bg-white">
            <div className="mr-2 text-sm font-medium">Eng</div>
            <Flag className="w-4 h-4 mt-1" />
          </li>
          <li className="mr-4">
            <BellIcon className="w-6 h-6 text-gray-5 00" />
          </li>
          <li className="mr-4 flex items-center">
            <img src={user} alt="" className="w-9 h-9 mr-2 rounded-full" />
            <div className="font-medium mr-1">John Doe</div>
            <ChevronDownIcon className="w-6" />
          </li>
        </ul>
        <div className="md:hidden mt-4 text-sm bg-green-400 px-3 py-1 text-white rounded-sm font-semibold">
          {
            location.pathname==="/"?
            <Link to="/create-recruitment">Create Recruitment</Link>:
            location.pathname==="/create-recruitment"?
            <Link to="/">My Recruitments</Link>:
            <Link to="/">My Recruitments</Link>
            }
        </div>
      </div>
    </nav>
  );
};

export default MainMenu;
