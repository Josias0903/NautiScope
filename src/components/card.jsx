import React from 'react';
import './styles.css';

function Card({ title, content, link }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{content}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">Read more</a>
    </div>
  );
}

export default Card;
