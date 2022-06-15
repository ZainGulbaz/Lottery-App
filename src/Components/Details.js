import { Colors,Button} from "@blueprintjs/core";
import { useSelector,useDispatch } from "react-redux";
import { useEffect,useState } from "react";
import {upDateParticipants} from "../Actions/index";
const Details=()=>{
   const contract= useSelector(store=>store.Contract);
   const [participantsCount,setParticiapntsCount]=useState(0);
   const dispatch=useDispatch();

   useEffect(()=>{
const {noOfParticipants,manager}=contract;
if(noOfParticipants)
{
  noOfParticipants().then(res=>setParticiapntsCount(parseInt(res._hex,16))).catch(console.log);
}
if(manager)
{
manager().then(console.log).catch(console.log);
}   
},[contract]);

   const {ethereum}=window;
const connectWallet=async()=>{
   try{
let response= await ethereum.request({method:"eth_accounts"});
if(response.length==0)
{
   const accounts =await ethereum.request({method:"eth_requestAccounts"});
   contract.noOfParticipants().then(res=>setParticiapntsCount(parseInt(res._hex,16))).catch(console.log);
   dispatch(upDateParticipants("updatethem"));
}
else {
   alert("The walled is already connected");
}

   }
   catch(err){
      console.log(err);
   }



}



return(
<>
   <div className="Details">
  <div style={{display:"flex",alignItems:"center"}}>
   <h2 style={{color:Colors.DARK_GRAY1,fontWeight:"900"}}>No of Participants:</h2>
   <h1 style={{color:Colors.WHITE,marginLeft:"4px",fontWeight:"bolder",fontSize:"50px"}}>{participantsCount}</h1>
</div>

<div style={{display:"flex",alignItems:"center"}}>
   <h2 style={{color:Colors.DARK_GRAY1,fontWeight:"900"}}>Participants Left:</h2>
   <h1 style={{color:Colors.WHITE,marginLeft:"4px",fontWeight:"bolder",fontSize:"50px"}}>Unlimited</h1>
</div>
<Button icon="globe" intent="success" text="Connect to Wallet" onClick={()=>
   {
      connectWallet();
   
      
}}/>

   </div>
</>

);

}

export default Details;