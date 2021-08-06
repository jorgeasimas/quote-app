import React from 'react';
import './homepage.styles.css';

const Text = ({text, author}) => {
  return(
  <div className="card-container-quote">
      <h1><b>"{text}"</b></h1>
    <p>{author}</p>
  </div>


  )}

  export default Text;

  