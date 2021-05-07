import React,{useState,useEffect} from "react"
import axios from "axios"
import ExploreGrid from "./Explore_grid"
const endpoint = 'http://localhost:3001/'
const filenames = [
  
];


 

export default function Pictures() {
  
      const [photos, setPhotos] = useState([]);
      useEffect(() => {
          const fetchData = async () => {
          const {data,status} = await axios.get( endpoint+'photos2',);
          console.log(status);
          if (status === 200){
              setPhotos(data);
          }
      };
   
      fetchData();
    },[]);
      
   
   
    return (
      <>
      <div className="Explore-body">
      

      <div className="grid">
      {photos.map(photo => (
          <ExploreGrid
          id = {photo.photo_id}
          url ={photo.photo_url} 
          title ={photo.title} 
          description = {photo.description}
          date = {photo.createdAt}
          privacy = {photo.privacy}
          ownerName = {photo.photo_owner_name}
          ownerId = {photo.photo_owner_id}
          numberOfFavs = {photo.num_favs}
          numberOfComments ={photo.num_comments}
          numberOfViews={photo.num_views}
          />
      ))}
      <div className="placeholder"></div>
      </div>

      </div>
      </>
 ) 
 }
