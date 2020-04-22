import React, { Component } from 'react';
import './Input.css';

const Input = props => {
    return (
      // <div className = "btn">
      <input type={props.type} className="data-field" placeholder={props.value} required>
          {props.children}
      </input>
      // </div>
    );
  };
  
  export default Input;