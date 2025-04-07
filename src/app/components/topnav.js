import React, { useContext, useState } from "react";
import { LookUpContext } from "../../contexts/lookup";
import { Menu, Moon } from "lucide-react";

function Topnav({ mode, setMode, sidebarOpen, setSidebarOpen }) {
  const { username, setUsername, lookUpCandidate } = useContext(LookUpContext);
  return (
    <div
      className={`fixed top-0 left-0 ${
        sidebarOpen ? "md:left-[280px]" : ""
      } right-0 shadow-md bg-white p-2 flex`}
      style={{ zIndex: 10 }}
    >
      <div className="w-12">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 flex focus:border-gray-300 focus:outline-0 w-full mt-2"
        >
          <Menu className="m-auto" />
        </button>
      </div>
      <form className="flex-1 px-3 flex justify-center">
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 px-4 border-2 border-gray-100 bg-gray-50 focus:border-gray-300 focus:outline-0 rounded-full w-full md:w-1/2"
          type="text"
          placeholder="Search..."
        />
        <button
          className="hidden"
          onClick={(e) => {
            e.preventDefault();
            lookUpCandidate();
          }}
        ></button>
      </form>
      <div className="w-24">
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className="p-2 flex px-4 border-2 border-gray-200 focus:border-gray-300 focus:outline-0 rounded-full w-full mt-2"
        >
          <Moon className="m-auto" color={mode === "light" ? "#555" : "#bbb"} />
        </button>
      </div>
    </div>
  );
}

export default Topnav;
