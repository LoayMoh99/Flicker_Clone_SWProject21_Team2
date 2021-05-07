import React from "react"
import './DeleteModal.css'

function Modal(props){

    return (
        <div className="modal__backdrop" >
            <div className="modal__container">
                <span className="close" onClick={props.onRequestClose}>&times;</span>
                <h3 className="modal__title">Delete 1 photo?</h3>
                <p>
                You cannot reverse this action. Are you sure you want to permanently delete this photo?
                </p>
                <button id="confirm" type="button" onClick={ () =>{
                    props.onDelete();}}>
                    Confirm
                </button>
                <button id="cancel" type="button" onClick={props.onRequestClose}>
                    Cancel
                </button>

            </div>
        </div>
    );


}

export default Modal;