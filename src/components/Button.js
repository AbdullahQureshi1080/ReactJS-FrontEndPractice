import React, { Component } from "react";
import "./Button.css";


const Button = props => {
  return (
    <button className={props.className} type = {props.type} onClick={props.click} >
        {props.children}
    </button>
    
  );
};



export default Button;
