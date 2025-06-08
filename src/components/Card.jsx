import React from 'react';
import '../App.css';

function Card() {
  return (
    <span className="w-full flex justify-center">
      <article>
        <figure className="custom-figure">
          <img
            id="man"
            src="https://assets.codepen.io/605876/person.png"
            alt="person"
          />
        </figure>
      </article>
    </span>
  );
}

export default Card;
