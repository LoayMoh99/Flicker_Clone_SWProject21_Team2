/* eslint-disable linebreak-style */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import './DropdownPrivacy.css';

function DropdownPrivacy() {
  const arrow = <FontAwesomeIcon icon={faSortDown} color="DarkGrey" />;
  return (
    <>
      {/* <div className="styled"> */}

      {/* <select className="form-control" data-style="btn-primary"> */}
      <select>
        <span className="styled" />
        <option value="Public">
          Public
          {' '}
        </option>
        <option value="Private">Private</option>
        <option value="Friends">Friends</option>
      </select>
      {arrow}
      {/* </div> */}
    </>
  );
}

export default DropdownPrivacy;
