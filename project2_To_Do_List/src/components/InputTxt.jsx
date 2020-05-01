import React from 'react';

function inputTxt(props){
    return <>
        <input type="text" name="input" defaultValue={props.textVal} onChange={props.onChange}/>
        <button className="remove-button" onClick={props.onClick}>Add Item</button>
    </>;
}

export default inputTxt;