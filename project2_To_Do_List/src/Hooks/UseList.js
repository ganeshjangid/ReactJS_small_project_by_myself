import React,{useState} from 'react';

function useList(initList){
    const [list,setList]=useState(initList);
    return {
        list,
        saveItem(item){
            setList((preval)=>{
                return [...preval,item]
            });
        },
        removeItem(idx){
            //console.log(idx);
            const copyItem=[...list];
            //console.log(copyItem);
            const result=copyItem.filter((val,ind)=> ind !== idx);
            //console.log(result);
            setList(result);
        }

    }
}

export default useList;