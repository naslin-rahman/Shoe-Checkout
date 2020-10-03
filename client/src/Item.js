import React from "react";

function Item(props){
    return(
        <div className="col-lg-4">
            <div className ="card">
              <h1>{props.title}</h1>
              <img src= {props.url} alt =""/>
              <input type="text" name={props.itemNum} placeholder=" Enter # Items"></input>
            </div>
        </div>
    );
}
export default Item;