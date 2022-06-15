const Update=(initialState="initial",action)=>{

  if(action.type=="UPDATE_PARTICIPANTS")
{
    return action.payload;
}
else{
    return initialState;
}

}

export default Update;