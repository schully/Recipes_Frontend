import React from 'react'
import "./styles.css"

export default function AddRecipe(props) {
  
  return(
    <button className="add-button" onClick={props.onClick}>{props.children}</button>
  )
}