import React from 'react';

function listItem(props){
    return (
        props.item.list.map((val,i)=>(
            <>
            <li key={i} className="li-style"  id={i}>{val} &nbsp;&nbsp;&nbsp;
            <button onClick={()=>{
                return props.onClick(i)
            }}>Remove</button>
            
            
            </li> 
            
            </>
          ))
    )
}

export default listItem;