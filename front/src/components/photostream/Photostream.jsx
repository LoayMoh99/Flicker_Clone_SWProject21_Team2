import React,{useState,useEffect} from "react"
import ImageGrid from "./ImageGrid"
import NavBar from "./NavBar"
import Slideshow from "./Slideshow"
import './ImageGrid.css'
import axios from "axios"
const endpoint = 'http://localhost:3001/'

function Photostream(){

    //Get photos
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
        const {data,status} = await axios.get( endpoint+'photos',);
        console.log(status);
        if (status === 200){
            setPhotos(data);
        }
    };
 
    fetchData();
  },[]);
    
    
    
    const [isModalOpen, setModalIsOpen] = useState(false);
    // const [isFull,setFull] = useState(false);

    function toggleModal(){
        setModalIsOpen(!isModalOpen);
        console.log("l modal fata7")

    }

    return (
        <>
        <div className="photostream-body">
        <NavBar 
            onSlideshow={toggleModal}
        />

        <div className="grid">
        {photos.map(photo => (
            <ImageGrid
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

        <main>
        {isModalOpen && <Slideshow onRequestClose={toggleModal} />}
        </main>
        </div>
        </>
   ) 
}

export default Photostream;