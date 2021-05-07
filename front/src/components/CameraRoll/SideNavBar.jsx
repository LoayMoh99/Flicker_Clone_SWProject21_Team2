/* eslint-disable linebreak-style */
import React from 'react';
import './SideNavBar.css';

function SideNavBar() {
  return (

    <>
      {/* <nav className="nav column sidenavbar"> */}
      <div className= "sidenavbar">
        <a className="nav-link active " aria-current="page" href="/#">2021</a>
        <a className="nav-link " href="/#">- April</a>
        <a className="nav-link text-secondary" href="/#">- January</a>
      {/* </nav> */}
      </div>
    </>
  );
}

export default SideNavBar;
