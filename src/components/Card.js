import React from "react";
import Rate from "./Rate";
const Card = ({ element }) => {
  return (
    <div>
      <div class="card">
        <img src={element.image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{element.title}</h5>
          <p class="card-text">{element.categorie}</p>
          <Rate starIndex={() => {}} rate={element.rate} />
        </div>
      </div>
    </div>
  );
};
export default Card;
 