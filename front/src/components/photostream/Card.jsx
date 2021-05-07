import React,{useState} from "react"
import './EditInfo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import {faLock} from '@fortawesome/free-solid-svg-icons'
import {faEye} from '@fortawesome/free-solid-svg-icons'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import {faComment} from '@fortawesome/free-solid-svg-icons'
import {faUnlock} from '@fortawesome/free-solid-svg-icons'

function Card(props){

    const remove = <FontAwesomeIcon icon={faTrash} color="White" />
    const lock = <FontAwesomeIcon icon={faLock} color="DarkGrey"/>
    const unlock = <FontAwesomeIcon icon={faUnlock} color="DarkGrey"/>
    const views = <FontAwesomeIcon icon={faEye} color="DarkGrey"/>
    const fav = <FontAwesomeIcon icon={faStar} color="DarkGrey"/>
    const comment = <FontAwesomeIcon icon={faComment} color="DarkGrey"/>

    const [isEditable,setEdit] = useState(false);

    const [inputTitle, setInputTitle] = useState(props.title);
    const [inputDescription , setInputDescription] = useState(props.description)

    const [privacy , setPrivacy] = useState(props.privacy)

    function changeLayout(event){
        console.log(event);  
        setEdit(!isEditable);
    // API

    }

  function handleTitleChange(event) {
    const newTitle = event.target.value;
    setInputTitle(newTitle);
    // API
    console.log(inputTitle)
  }

  function handleDescriptionChange(event) {
    const newDescription  = event.target.value;
    setInputDescription(newDescription);
    // API
    console.log(inputDescription)
  }

  function open(){
      console.log("open photo")
      if(isEditable){
        setEdit(!isEditable);
      }
  }


    return(
        <>
        
        <div className="card">
            <img src={props.url} alt=""  onClick={open}/>
            <button className="button"
                onClick={ () =>{
                    props.onDelete(props.id);}}
                    // confirmDelete(props.id);}}
            >{remove}</button>
            {!isEditable? 
            <>
                <div className="interaction-bar" onClick={changeLayout}>
                    <div className="title-bar">
                    <h1>{props.title}</h1> 
                    <p>{props.description}</p>
                    </div>
                </div> 
                
                <ul  className="tools">
                    <li className="dropdown">
                            <button className="bttn bttn-secondary dropdown-toggle" type="button" id="dropdownMenuButton privacy" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {privacy? unlock :lock}
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><a className="dropdown-item" href="#">Public</a></li>
                                <li><a className="dropdown-item" href="#">Private</a></li>
                                <li><a className="dropdown-item" href="#">Friends</a></li>
                                {/* <li><a className="dropdown-item" href="#">Family</a></li>
                                <li><a className="dropdown-item" href="#">Friends and Family</a></li> */}
                            </ul>
                    </li>
                    <div id="info">
                        <li > {comment} {props.numberOfComments}</li>
                        <li > {fav} {props.numberOfFavs}</li>
                        <li > <div>{views} {props.numberOfViews}</div></li>
                    </div>
                </ul>
            </>
                
            :
            <>
            <div className="new-interaction-bar">
                    <div id="input-format">
                        <div class="form-group" >
                            <input type="text" className="form-control"  onChange={handleTitleChange} value={inputTitle}></input> 
                        </div>
                        <div class="form-group">
                            <textarea className="form-control" rows="3"  onChange={handleDescriptionChange}>{inputDescription}</textarea> 
                        </div>
                    </div>
                    <button onClick={changeLayout}>Done</button>

            </div>

            </>
            }


        </div>

    </>
    )
}

export default Card;