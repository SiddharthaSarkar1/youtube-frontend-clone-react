import React from "react";
import HamburgermenuIcon from '../images/hamburger_icon.png';
import YouTubeLogo from '../images/youtube-logo.png';
import UserLogo from '../images/userLogo.png';

import { toggleSidebar } from "../store/appSlice";
import { useDispatch } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();
  const toggleSidebarfn = () => {
    dispatch(toggleSidebar());
  }

  return (
  <header className="App-header p-3 flex">
      <img className="w-6 h-8" onClick={toggleSidebarfn} src={HamburgermenuIcon} alt="Hamburger-menu" />
      <img className="w-24 h-8 ml-5" src={YouTubeLogo} alt="Youtube-logo" />
      <input type="text" placeholder="Search" className="p-3 border h-10 mx-auto w-1/2 rounded-3xl" />
      <img className="w-10 rounded-3xl" src={UserLogo} alt="user-icon" />
    </header>
  )
};

export default Header;
