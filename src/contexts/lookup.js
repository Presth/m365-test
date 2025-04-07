import axios from "axios";
import React, { createContext, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import useLocalstorage from "../hooks/useLocalstorage";

export const LookUpContext = createContext();

function LookUp({ children }) {
  const { id } = useParams();

  const [username, setUsername] = useState("");
  const [userProfile, setUserProfile] = useState(null);
  const [userRepositories, setUserRepositories] = useState([]);
  const [fetching, setFetching] = useState(false);

  const navigate = useNavigate();

  // function to save to localstorage
  const [searchHistory, setSearchHistory] = useLocalstorage("searchHistory");
  const saveToLocalStorage = (userProfile) => {
    console.log(searchHistory);
    const prevHistory = searchHistory ? searchHistory : [];
    const exist = prevHistory.find((item) => item.login === userProfile.login);
    if (exist) return;
    const newHistory = [...prevHistory, userProfile];
    setSearchHistory(newHistory);
  };

  const lookUpCandidate = async (id, fromHistory = false) => {
    setFetching(true);
    if (username == "" && !id) {
      toast.error("Please enter a username", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setFetching(false);
      return;
    }

    try {
      let user = username ? username : id;
      const response = await axios.get("https://api.github.com/users/" + user);
      const reposResponse = await axios.get(
        "https://api.github.com/users/" + user + "/repos"
      );

      if (response.status === 200) {
        setUserProfile(response.data);
        saveToLocalStorage(response.data);
      }
      if (reposResponse.status === 200) {
        setUserRepositories(reposResponse.data);
      }

      if (fromHistory) navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("User not found", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    setUsername(id);
    if (id) {
      lookUpCandidate(id, true);
    }
  }, [id]);

  const values = useMemo(() => {
    return {
      username,
      fetching,
      setUsername,
      userProfile,
      setUserProfile,
      userRepositories,
      setUserRepositories,
      lookUpCandidate,
    };
  });
  return (
    <LookUpContext.Provider value={values}>
      {children}
      <ToastContainer />
    </LookUpContext.Provider>
  );
}

export default LookUp;
