import React, { useContext } from "react";

import { RecruitmentContext } from "./context/RecruitmentContext";

import {
    BadgeCheckIcon,
  ChevronDoubleDownIcon,
  PencilAltIcon,
  TrashIcon,
} from "@heroicons/react/solid";
import { CheckCircleIcon } from "@heroicons/react/outline";
import {ReceiptRefundIcon} from "@heroicons/react/solid" 
import { Link } from "react-router-dom";

const AllRecruitments = () => {
  const { lists,deleteList,changeStatus } = useContext(RecruitmentContext);

  console.log(lists);

  return (
    <div className=" py-8 px-4 bg-white">
      <div className="rec-heading grid grid-cols-3 md:grid-cols-6  gap-2 bg-white  py-2">
        <h3 className=" py-3 px-2 font-bold text-xs md:text-md hidden md:block">Id</h3>
        <h3 className=" py-3 px-2 font-bold text-xs md:text-md">Recruitment Name</h3>
        <h3 className=" py-3 px-2 font-bold text-xs md:text-md hidden md:block">Candidate No</h3>
        <h3 className=" py-3 px-2 font-bold text-xs md:text-md hidden md:block">Start Date</h3>
        <h3 className=" py-3 px-2 font-bold text-xs md:text-md">Status</h3>
        <h3 className=" py-3 px-2 font-bold text-xs md:text-md">Action</h3>
      </div>
      <div className="">
        {lists.map((list, index) => {
          return (
            <div
              key={index}
              className="rec-data grid grid-cols-3 md:grid-cols-6 gap-3 odd:bg-gray-200 even:bg-white"
            >
              <h3 className=" py-3 px-2 text-xs md:text-sm hidden md:block">rec_{index}</h3>
              <h3 className=" py-3 px-2 text-xs md:text-sm">{list.recruitmentName}</h3>
              <h3 className=" py-3 px-2 text-xs md:text-sm hidden md:block">{list.noOfCandidates}</h3>
              <h3 className=" py-3 px-2 text-xs md:text-sm hidden md:block">{list.date}</h3>
              {list.status? (
                <div className="flex items-center">
                <BadgeCheckIcon className="w-4 md:w-6 text-green-500 mr-1"/>
                <h3 className="py-1 md:py-3 px-1 md:px-2 text-xs md:text-sm font-semibold text-green-500">
                  Achieved
                </h3>
                </div>
              ) : (
                <div className="flex items-center">
                <ChevronDoubleDownIcon className="w-4 md:w-6 text-blue-600 animate-pulse mr-1"/>
                  <h3 className="py-[1px] md:py-1 px-[1px] md:px-2 text-xs md:text-sm font-semibold text-blue-600 border-[2px] border-blue-600/30 rounded-sm">
                    Progress
                  </h3>
                </div>
              )}
              <div className="flex items-center">
                <div>
                  {list.status? (
                    <ReceiptRefundIcon className="w-4 md:w-6 text-blue-600 cursor-pointer mr-1" onClick={()=>changeStatus(index,false)}/>
                  ) : (
                    <CheckCircleIcon className="w-4 md:w-6 text-green-600 hover:opacity-75 mr-1 cursor-pointer" onClick={()=>changeStatus(index,true)}/>
                  )}
                </div>
                <TrashIcon className="w-4 md:w-6 text-red-600 mr-1 cursor-pointer" onClick={()=>deleteList(index)}/>
                <Link to={`/edit-recruitment/${index}`}>
                <PencilAltIcon className="w-4 md:w-6 text-stone-900 cursor-pointer"/>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllRecruitments;
