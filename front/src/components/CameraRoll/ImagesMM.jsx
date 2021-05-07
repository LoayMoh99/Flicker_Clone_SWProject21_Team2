/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import React from 'react';
import './ImagesMM.css';

const ImagesMM = (props) => {
  const { url } = props;
  return (
    <>
      {/* <h5 className="text-secondary">April 20, 2021</h5> */}
      {/* <h5 className="text-secondary">April 20, 2021</h5>
      <div className="row"> */}
      <div className="column_adj_modal">

        {/* <img className="img-responsive" id="content" src={Url} alt="image_flickr" onClick={(event) => { props.onEdit(event.currentTarget); }} /> */}
        <img className="img-responsive" id="content_modal" src={url} alt="image_flickr" />
        {/* <img className="img-responsive" id="content" src={Url} alt="image_flickr" onClick={() => console.log(props.image)} /> */}
      </div>
      {/* </div> */}
    </>
  );
};
export default ImagesMM;
