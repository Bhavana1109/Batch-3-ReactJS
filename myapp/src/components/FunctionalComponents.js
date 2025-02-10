import React from 'react';

function FunctionalComponents(props) {
    console.log(props);
    let applyStyle=props.apply ? 'heading':' '
    let inlineStyle={
        color:'green',
        backgroundColor:'red',
        fontSize:'50px'
    }
  return (
    <div>
        <h1 class={`${applyStyle} font -style`}>Welcome to my class {props.clgName}</h1>
        {props.children}
        <h2 style={inlineStyle}>Good Afternoon</h2>
        </div>
  )
}
export default FunctionalComponents;
