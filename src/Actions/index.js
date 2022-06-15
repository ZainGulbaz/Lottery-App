import { ethers } from "ethers";
import { CONTRACT_ABI,CONTRACT_ADDRESS } from "../Utils/Constants";

const {ethereum}=window;

export const getEthereumContract=()=>{

    //It establishes the connection with metamask
    const provider= new ethers.providers.Web3Provider(ethereum);
  //getSigner() function gets the private key
    const signer=provider.getSigner();
    //it establishes the connection with the contract
    const lotteryContract=new ethers.Contract(CONTRACT_ADDRESS,CONTRACT_ABI,signer);


    return(
{
        type:'GET_CONTRACT',
        payload:lotteryContract
   }   )

}

export const upDateParticipants=(arg)=>{

    return {
      type:"UPDATE_PARTICIPANTS",
      payload:arg

    }


};