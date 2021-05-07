import React, { useState } from 'react'
import './Slideshow.css'

function Slideshow(props){


    return(
    <>
    
    <div id="myNav" className="overlay-Modal" >
        <button className="close-btn" onClick={props.onRequestClose}>&times;</button>
        <div className="overlay-content" >
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel"> 
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://picsum.photos/500/200?random=1" alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://picsum.photos/300/200?random=2" alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://picsum.photos/200/600?random=3" alt="Third slide"/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://picsum.photos/600/400?random=1" alt="Fourth slide"/>
                    </div>
                    
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

        </div>
    </div>

    </>
    );
}

export default Slideshow;