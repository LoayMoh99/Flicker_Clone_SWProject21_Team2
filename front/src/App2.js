import Userinfo from './components/HeaderBar/userInfo'
import React,{useState,useEffect} from 'react';
import axios from 'axios'
const endpoint = 'http://localhost:3001/'
//import React from 'react'

function App2() {
    const [userInfo, setUserInfo] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
        const {data,status} = await axios.get( endpoint+'user',);
        console.log(status);
        if (status === 200){
            setUserInfo(data[0]);
        }
    };
 
    fetchData();
  },[]);
console.log(userInfo);

    return (
        <div>
        <Userinfo
      num_following= {userInfo.num_following}
      num_followers= {userInfo.num_followers}
      num_views= {userInfo.num_views}
      date_joined= {userInfo.date_joined}
      country= {userInfo.country}
      num_public_photos= {userInfo.num_public_photos}
      avatar_url= {userInfo.avatar_url}
      background_url = {userInfo.background_url}
      username= {userInfo.username}
      firstName= {userInfo.firstName}
      lastName= {userInfo.lastName}
      />
      </div>
    )
}

export default App2
