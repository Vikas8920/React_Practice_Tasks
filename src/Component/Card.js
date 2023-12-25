import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="card mt-3">
        <img src={props.imgSrc} className="card-img-top" style={{height:'250px'}} alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <h4 className="card-text text-danger">{props.price}</h4>
          <Link href="#">See Details</Link>
        </div>
      </div>
    </>
  );
};

export default Card;
