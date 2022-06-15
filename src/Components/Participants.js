import React,{ useEffect,useState} from "react";
import { useSelector } from "react-redux";
import { Card,Button,H5,H4 } from "@blueprintjs/core";
const Participants =() => {
 
  const [participants,setParticiapnts]=useState([]);
  const contract = useSelector(store=>store.Contract);
  const updateParticipants=useSelector(store=>store.Update);

  useEffect(()=>{
const {getParticipants}=contract;
if(getParticipants)
{
    getParticipants().then(res=>{
      setParticiapnts(res);
    }).catch(console.log);
  
}
  },[contract,updateParticipants]);

  

  return (
    <>
        

{participants?.map(participant=>{

    return(
        <>
  <br/>

  <Card>
  <H5>{participant[0]}</H5>
  <p>{participant[1]}</p>
  <H4>{participant[2]}</H4>
  
</Card>
</>
    )
    
})}

               
    </>
  );
};

export default Participants;
