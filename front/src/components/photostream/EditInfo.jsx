import React,{useState,useEffect} from "react"
import Card from "./Card"
import DeleteModal from "../DeleteModal/DeleteModal"
import './EditInfo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import axios from "axios"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
const endpoint = 'http://localhost:3001/'

function EditInfo(){

    const navStyle={
        color:'white'
    };

    const back = <FontAwesomeIcon icon={faArrowLeft} color="DarkGrey"/>
    
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

    // Modal
    const [isModalOpen, setModalIsOpen] = useState(false);
    const [idToDelete,setID]=useState(0)



    function toggleModal(id){
        setModalIsOpen(!isModalOpen);
        setID(id);

    }



    function confirmDelete(){
        if (idToDelete ===0){
            console.log("hamsa7 carddddddd 1");
        }else if (idToDelete===1){
            console.log("hamsa7 carddddddd 2");
        } 

        toggleModal(); 
    }
    
    return(
        <>
        <div className="EditInfo-body">
        <ul id="nav-list">
            <li id="nav-item"><Link  style={navStyle} to="/"><a href="#" id="a">{back } Back to photostream</a></Link></li>
           <li id="right "><p id="a">Edit in <Link style={navStyle} to="/CameraRoll"><a id="a2" href="#" >Camera Roll</a></Link></p> </li>
        </ul>

        {/* cards */}
        <div className="card-grid">
        {photos.map(photo =>(
            <Card 
                id = {photo.photo_id}
                title={photo.title}
                description={photo.description}
                url={photo.photo_url}
                privacy = {photo.privacy}
                numberOfFavs={photo.num_favs}
                numberOfViews={photo.num_views}
                numberOfComments ={photo.num_comments}
                ownerId = {photo.photo_owner_id}
                // onEdit={changeLayout}
                onDelete={toggleModal}
            />
        ))}
        </div>
        <main>
        {isModalOpen && <DeleteModal onRequestClose={toggleModal} onDelete={confirmDelete}/>}
        </main>
        </div>
        </>
    )

}

export default EditInfo;