import React from "react";
import FloatingButton from "./components/MainContainer/FloatingButton";
import barStyles from "./styles/Navbar.module.css";
import globalStyles from "./styles/painting.module.css";


import { useDispatch } from "react-redux";
import { toggleTheme } from "./redux/themeSlice";

import { Link } from "react-router-dom"


const Navbar = () => {

  const dispatch = useDispatch();


  const handleThemeToggle = () => {
    dispatch(toggleTheme());  
    document.body.classList.toggle(globalStyles.darkBody); 
  };
  const handleNextPage = () => {
   console.log('Next page');
  };

  return (
    <div className={barStyles.navbar}>
      <Link to="/">🏠</Link>
      <Link to="/about">📜</Link>
      <FloatingButton onClick={handleThemeToggle} icon="💡" />
      <FloatingButton onClick={handleNextPage} icon="⚙️" />
    </div>
  );
};

export default Navbar;
