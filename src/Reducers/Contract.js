import React from "react";

const Contract=(initialState=()=>null,action)=>{

    switch(action.type){
   
        case "GET_CONTRACT":
            return action.payload;
        default:
            return initialState;         

    }

}

export default Contract;