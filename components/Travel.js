import React from 'react';
import './Travel.css';

function Travel(destinationcountryphotodistance) {
  return (
    <figure className="TravelCard">
      <img src={ destinationcountryphotodistance.photo } alt={ destinationcountryphotodistance.photo } />
      <figcaption>
        <p>{ destinationcountryphotodistance.destination }</p>
        <p>{ destinationcountryphotodistance.country }</p>
        <p>{ destinationcountryphotodistance.distance }</p>
      </figcaption>
    </figure>
  );
}

export default Travel;