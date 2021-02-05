import React from "react";

const ImprovedCard = props => {
  console.log(props)

  

  return (
    <div className="movies-list-item">
      <h2>{props.title}</h2>
      <p>Director: {props.director}</p>
      <button onClick={() => props.handleDeleteClick(props.id)} className='btn btn-primary'>Delete</button>
    </div>
  );
};

export default ImprovedCard;
