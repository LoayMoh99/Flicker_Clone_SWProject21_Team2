import React from "react"
import './styles.css';
import { Link } from 'react-router-dom'
export default function Exploresub_nav()
{
  const navStyle={
    color:'white'
};
    return (
      <div>
        <div class="nav-bar">
        <div class="sub-navbar">
          <ul class="nav">
            <li class="explore">
            <Link style={navStyle} to="/Explore"><a className="exp" href="#top">Explore</a></Link>
            </li>
            <li class="trending">
              <a href="https://www.flickr.com/photos/tags">
                <span>Trending</span></a>
            </li>
            
          </ul>
        </div>
      </div>
      <div id="under"></div>
      </div>
    );
}