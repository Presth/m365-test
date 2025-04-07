import React, { useEffect, useState } from "react";
import Sidebar from "./components/sidebar";
import Topnav from "./components/topnav";
import { Outlet } from "react-router-dom";
import LookUp from "../contexts/lookup";
import "../style.css";
import useLocalStorage from "../hooks/useLocalstorage";

function App() {
  const [mode, setMode] = useLocalStorage("mode", "light");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const screenwidth = window.innerWidth;

  useEffect(() => {
    if (screenwidth > 768) {
      setSidebarOpen(true);
    }
  }, []);

  return (
    <div className={"App " + mode}>
      <LookUp>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <Topnav
          mode={mode}
          setMode={setMode}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <main
          className={`absolute ${
            sidebarOpen ? "md:left-[280px]" : "left-0"
          } right-0 top-14 pt-8 min-h-screen bg-gray-50 p-4`}
        >
          <Outlet />
        </main>{" "}
      </LookUp>
    </div>
  );
}

export default App;
