import React from 'react';

import '../index.css';

export default function Cards(props) {
  return (
    <>
      <div className="cards">
        <img src={props.image} alt={props.fname} />
        <div className="head">
          <h2>
            {props.fname} {props.lname}
          </h2>
          <p>{props.email}</p>
        </div>
        <p>{props.tag}</p>
      </div>
    </>
  );
}
