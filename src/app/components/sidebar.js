import React from "react";
import { Link, NavLink } from "react-router-dom";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <div
      className="w-[280px] h-screen fixed left-0 top-0 shadow bg-white flex flex-col"
      style={{
        transform: sidebarOpen ? "translateX(0)" : "translateX(-100%)",
        zIndex: 100,
      }}
    >
      <h4 className="h-[100px] text-3xl py-4 text-center font-bold">
        Recruiter
      </h4>
      <div className="my-4 flex flex-col p-3 flex-1">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "p-3 px-4 mb-2 text-md bg-primary text-white rounded-md"
              : "p-3 px-4 mb-2 text-md hover:bg-primary hover:text-white rounded-md"
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/history"}
          className={({ isActive }) =>
            isActive
              ? "p-3 px-4 mb-2 text-md bg-primary text-white rounded-md"
              : "p-3 px-4 mb-2 text-md hover:bg-primary hover:text-white rounded-md"
          }
        >
          Search History
        </NavLink>
      </div>
      <div className="m-auto px-3 w-full py-4">
        <button
          className="border border-100 rounded-full p-2 text-center w-full"
          onClick={() => setSidebarOpen(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
