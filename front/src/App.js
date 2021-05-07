import Header from './components/navbar/mainNav'
import Footer from './components/navbar/footer'
import Userinfo from './components/HeaderBar/userInfo'
import FollwingFollowers from './components/followingFollowers/followingFollowers'
import Photostream from "./components/photostream/Photostream"
import EditInfo from "./components/photostream/EditInfo"
import Slideshow from "./components/photostream/Slideshow"
import TotExplore from "./components/Explore/TotExplore"
import CameraRoll from "./components/CameraRoll/CamreRoll"
import About from "./components/About/About"
import Blog from "./components/Blog/Blog"
import Jobs from "./components/Job/Jobs"
import Signup from "./components/signup/signup"
import App2 from "./App2"
import React,{useState,useEffect} from 'react';
import axios from 'axios'
import {BrowserRouter as Router, Switch , Route} from "react-router-dom";
const endpoint = 'http://localhost:81/'

function App() {

//   const [userInfo, setUserInfo] = useState([]);
//     useEffect(() => {
//         const fetchData = async () => {
//         const {data,status} = await axios.get( endpoint+'user',);
//         console.log(status);
//         if (status === 200){
//             setUserInfo(data[0]);
//         }
//     };
 
//     fetchData();
//   },[]);
// console.log(userInfo);

  return (
    <Router>
    <div className="App">
      <Header/>
      <Switch>
      {/* <Userinfo
    //   num_following= {userInfo.num_following}
    //   num_followers= {userInfo.num_followers}
    //   num_views= {userInfo.num_views}
    //   date_joined= {userInfo.date_joined}
    //   country= {userInfo.country}
    //   num_public_photos= {userInfo.num_public_photos}
    //   avatar_url= {userInfo.avatar_url}
    //   background_url = {userInfo.background_url}
    //   username= {userInfo.username}
    //   firstName= {userInfo.firstName}
    //   lastName= {userInfo.lastName}
    //   /> */}
      <Route path="/" exact component={App2}/>
      <Route path="/About" component={About}/>
      <Route path="/Blog" component={Blog}/>
      <Route path="/Jobs" component={Jobs}/>
      <Route path="/EditInfo" component={EditInfo}/>
      <Route path="/CameraRoll" component={CameraRoll}/>
      <Route path="/FollwingFollowers" component={FollwingFollowers}/>
      <Route path="/Explore" component={TotExplore}/>
      </Switch>
      <Footer/> 
    </div>
    </Router>
    // <div className="App">
    //   <Signup/>
    // </div>
  );
}

export default App;