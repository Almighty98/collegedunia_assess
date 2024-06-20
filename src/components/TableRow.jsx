import React from "react";
import { FaCircle } from "react-icons/fa";
import { HiMiniArrowsRightLeft } from "react-icons/hi2";
import { MdOutlineFileDownload } from "react-icons/md";
import { TiArrowRight } from "react-icons/ti";

const TableRow = ({ item }) => {
  return (
    <tr>
      <td className="font-normal table-row-styling text-gray-700" valign="top">
        <span>#{item.cd_rank}</span>
      </td>
      <td className="table-row-styling" valign="top">
        <div className="flex flex-col">
          <span className="text-blue-400 font-normal">{item.name}</span>
          <span className="text-xs font-normal text-gray-500">
            {item.location +
              "  |  " +
              item.approved_by.join(", ") +
              " Approved"}
          </span>
        </div>
        <div className="flex items-center justify-between mt-6">
          <button className="text-[#FF7900] flex items-center text-sm">
            <TiArrowRight />
            Apply Now
          </button>
          <button className="text-[#3EAE8D] flex items-center text-sm">
            <MdOutlineFileDownload />
            Download Brochure
          </button>
          <button className="flex items-center text-sm space-x-1">
            <input type="checkbox" /> <span>Add To Compare</span>
          </button>
        </div>
      </td>
      <td className="table-row-styling" valign="top">
        <div className="flex flex-col">
          <span className="text-[#3EAE8D] font-medium mb-1">
            ₹{item.course.fees.toLocaleString("en-IN")}
          </span>
          <span className="text-xs font-normal text-gray-500 mb-1">
            {item.course.name}
          </span>
          <span className="text-xs font-normal text-gray-500 mb-2">
            {item.course.isTotalFees ? "- Total Fees" : "- 1st Year Fees"}
          </span>
          <button className="text-[#FF7900] flex items-center text-sm">
            <HiMiniArrowsRightLeft className="mr-1" /> Compare Fees
          </button>
        </div>
      </td>
      <td className="table-row-styling" valign="top">
        <div className="flex flex-col">
          <span className="text-[#3EAE8D] font-medium mb-1">
            ₹{item.placement.average.toLocaleString("en-IN")}
          </span>
          <span className="text-xs font-normal text-gray-500 mb-1">
            Average Package
          </span>
          <span className="text-[#3EAE8D] font-medium mb-1">
            ₹{item.placement.highest.toLocaleString("en-IN")}
          </span>
          <span className="text-xs font-normal text-gray-500 mb-1">
            Highest Package
          </span>
          <button className="text-[#FF7900] flex items-center text-sm">
            <HiMiniArrowsRightLeft className="mr-1" /> Compare Placement
          </button>
        </div>
      </td>
      <td className="table-row-styling" valign="top">
        <div className="flex items-center space-x-1 text-slate-500">
          <FaCircle size={10} className="text-[#FF7900]" />{" "}
          <span>{item.reviews.rating} / 5</span>
        </div>
        <span className="text-xs font-normal text-gray-500 mb-1">
          Based on {item.reviews.users} User Reviews
        </span>
      </td>
      <td className="table-row-styling text-slate-500" valign="top">
        #{item.ranking.at}
        <sup>th</sup> /{" "}
        <span className="text-[#FF7900]">{item.ranking.from}</span> in India{" "}
        {item.ranking.year}
      </td>
    </tr>
  );
};

export default TableRow;
