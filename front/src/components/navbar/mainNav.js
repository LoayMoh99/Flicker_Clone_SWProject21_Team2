import React from 'react'
import './mainNav.css'
import '../../fonts/font/flaticon.css'
import flickrLogo from '../../img/flickr.png'
import {toggleNav} from './navBar.js'
import {toogleMobileSearchBox} from './navBar.js'
import {readjustHeader} from './navBar.js'
import defaultProfile from '../../img/deefault.jpg';
import { Link } from 'react-router-dom'
//import {Link} from "react-router-dom";
export default function Header(){
    function checkSize(){
        if(window.innerWidth>1080){
            readjustHeader();
        }
    }
    const navStyle={
        color:'white'
    };
    window.addEventListener('resize',checkSize);
    return(
            <div>
        <nav className="navbar fix_nav">
        <div className="container">
            <div className="logoPlusNav">
            <span className="menuIcon" onClick={()=>toggleNav()}>
                <span className="line1 hiddenIconbars"></span>
                <span className="line2 hiddenIconbars"></span>
                <span className="line3 hiddenIconbars"></span>
            </span>
            <a className="flickLogoName" href="#top">
            <img src={flickrLogo} alt="flickrLogo"></img>
            <h3>flickr</h3>
            </a>
            <ul className="headSubMenu NavbarAndheaderul">
                <li  className="mainHeaderTags youTag"><Link style={navStyle} to="/"><a className="active" href="#top">You</a></Link>
                <ul className="subMenuYouContent NavbarAndheaderul">
                    <li>
                        <a href="#top">About</a>
                    </li>
                    <li>
                        <Link  style={navStyle} to="/"><a href="#top">Photostream</a></Link>
                    </li>
                    <li>
                        <a href="#top">Albums</a>
                    </li>
                    <li>
                        <a href="#top">Favs</a>
                    </li>
                    <li>
                        <a href="#top">Gallery</a>
                    </li>
                    <li>
                        <a href="#top">Groups</a>
                    </li>
                    <li>
                        <a href="#top">CameraRoll</a>
                    </li>
                </ul>
                </li>
                <li  className="mainHeaderTags youTag"><Link style={navStyle} to="/Explore"><a className="active" href="#top">Explore</a></Link>
                <ul className="subMenuYouContent NavbarAndheaderul">
                    <li>
                        <a href="#top">Recent Photos</a>
                    </li>
                    <li>
                        <a href="#top">Trending</a>
                    </li>
                </ul>
                </li>
                <li  className="mainHeaderTags youTag"><a className="active" href="#top">Prints</a>
                <ul className="subMenuYouContent NavbarAndheaderul">
                    <li>
                        <a href="#top">prints & wall arts</a>
                    </li>
                </ul>
                </li>
            </ul>
            </div>
            <div className="searchBox hiddenIconSearch biggerBox">
                    <button className="searchBtn">
                        <i className="flaticon-search"></i>
                    </button>
                    <input type="text" placeholder="Photos, People or Groups   "/>
            </div>
            <div className="searchNotifivationUpload">
                <div className="searchBox">
                    <button className="searchBtn">
                        <i className="flaticon-search"></i>
                    </button>
                    <input type="text" placeholder="Photos, People or Groups   "/>
                </div>
                <i className="flaticon-close hiddenIconSearch" onClick={()=>toogleMobileSearchBox()}></i>
                <i className="flaticon-search coreSearch hiddenIcon" onClick={()=>toogleMobileSearchBox()}></i>
                <i className="flaticon-cloud-computing"></i>
                <i className="flaticon-bell"></i>
                <img src={defaultProfile} alt="defaultProfilePicture" className="sideProfilePic"></img>
            </div>
        </div>
    </nav>
    <div className="hiddenHeaderList">
        <ul className="NavbarAndheaderul">
            <li>
                <a href="#top">About</a>
            </li>
            <li>
                <a href="#top">Photostream</a>
            </li>
            <li>
                <a href="#top">Albums</a>
            </li>
            <li>
                <a href="#top">Favs</a>
            </li>
            <li>
                <a href="#top">Recent Photos</a>
            </li>
            <li>
                <a href="#top">Trending</a>
            </li>
            <li>
                <a href="#top">prints & wall arts</a>
            </li>
        </ul>
    </div>
    </div>
    );
}