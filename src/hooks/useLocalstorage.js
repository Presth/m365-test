import React, { use, useState } from "react";

const useLocalStorage = (key) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const data = JSON.parse(localStorage.getItem(key)) || null;
      return data;
    } catch (error) {
      return localStorage.getItem(key) || null;
    }
  });

  const setData = (newValue) => {
    // try {
    //      const newValue = JSON.stringify(data)
    //      localStorage.setItem(key, newValue)
    //      setStoredValue(newValue)
    // } catch (error) { }

    try {
      if (typeof newValue === "string") {
        localStorage.setItem(key, newValue);
        setStoredValue(newValue);
      } else {
        let parsedValue = JSON.stringify(newValue);
        localStorage.setItem(key, parsedValue);
        setStoredValue(newValue);
      }
    } catch (error) {}
  };

  const removeData = () => {
    localStorage.removeItem(key);
    setStoredValue(undefined);
  };
  return [storedValue, setData, removeData];
};

// function useLocalstorage(key) {
//   const [value, setValue] = useState("");
//   const getValue = () => {
//     const retrievedVal = localStorage.getItem(key);
//     // console.log(retrievedVal);
//     setValue(retrievedVal);
//   };

//   useEffect(() => {
//     getValue();
//   });

//   const setLocalstorage = (newValue) => {
//     if (typeof newValue === "string") {
//       localStorage.setItem(key, newValue);
//       setValue(newValue);
//     } else {
//       let parsedValue = JSON.stringify(newValue);
//       localStorage.setItem(key, parsedValue);
//       setValue(newValue);
//     }
//   };

//   const removeItemFrmStrg = () => {
//     localStorage.removeItem(key);
//     setValue(null);
//   };

//   return [value, setLocalstorage, removeItemFrmStrg];
// }

export default useLocalStorage;
