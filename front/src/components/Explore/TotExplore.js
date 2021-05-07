import Header from '../navbar/mainNav'

/*import Photostream from "./components/photostream/Photostream"
import EditInfo from "./components/photostream/EditInfo"
import Slideshow from "./components/photostream/Slideshow"*/
import React from 'react';
import Explorenav from './Explorenav'
import Exploresub_nav from './Exploresub_nav'
import Pictures from "./pictures"

function TotExplore() {
 

  
  return (
    <div>
      
     
      <Pictures/>
      <Explorenav/>
      <Exploresub_nav/>
    </div>
  );
  
}

export default TotExplore;
