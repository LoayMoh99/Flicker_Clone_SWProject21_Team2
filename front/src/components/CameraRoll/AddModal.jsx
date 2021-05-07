/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa-tag } from '@fortawesome/free-solid-svg-icons';

import './AddModal.css';

function AddModal(props) {
  return (
    <>

      <div className="modal__backdrop_edit">
        <div className="modal__container_edit">
          <span className="close_edit" onClick={props.onRequestAddClose}>&times;</span>
          <div className="row">
            <h3 className="modal__title_edit list-label">Add to: </h3>
            {/* <span className="space-add" />
            <h3 className="modal__title_edit">Album </h3> */}
          </div>
          <hr />
          <input type="text" placeholder="Search albums" className="stuff-selection-search" tabIndex="0" />
          <hr />
        </div>
      </div>
    </>
  );
}

export default AddModal;
