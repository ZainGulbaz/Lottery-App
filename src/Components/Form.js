import { useSelector,useDispatch } from "react-redux";
import { useState,useEffect } from "react";
import { Button,InputGroup,Intent,TextArea,Spinner} from "@blueprintjs/core";
import { upDateParticipants } from "../Actions";
import {INTENT_WARNING } from "@blueprintjs/core/lib/esm/common/classes";

const Forms=()=>{
    
    const {ethereum}= window;
    const checkManager=(_contract)=>{
        const {manager}=_contract;
        ethereum.on('accountsChanged', (accounts) => {
      
    console.log(contract);
        if(manager)
        {
            
        manager().then(manager=>{
     
            if(manager.toUpperCase()===ethereum.selectedAddress.toUpperCase())
        {
            
              setIsManager(true);
        }
        else setIsManager(false);
    
    }).catch(console.log);
        }

      });
    }
    
    const contract=useSelector(store=>{
        const {Contract:contract}=store;
        checkManager(contract);
      return contract;
    });
    const [data,setData]=useState({});
    const [showSpinner,setShowSpinner]=useState(false);
    const [isManager,setIsManager]=useState(false);
    const dispatch= useDispatch();
    
    return(
        <>
<div className="form"> 
{(!isManager)&&<div>
<TextArea
    growVertically={true}
    large={true}
    intent={Intent.PRIMARY}
    placeholder="Message"
    style={{marginBottom:"10px"}}
    onChange={(e)=>setData({...data,message:e.target.value})}
/>
<InputGroup id="text-input" placeholder="Keyword" style={{marginBottom:"10px"}}
onChange={(e)=>setData({...data,keyword:e.target.value})}/>
<Button intent="success" icon="dollar" onClick={async()=>{
    let managerAddress=await contract.manager();
    setShowSpinner(true);
    const transactionParameters = {
        to: managerAddress, // Required except during contract publications.
        from: ethereum.selectedAddress, // must match user's active address.
        value: '0xDE0B6B3A7640000', // Only required to send ether to the recipient from the initiating external account.
      };


      ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
      }).then(console.log).catch(console.log);

   contract.setParticiapnt(data?.message,data?.keyword)
   .then(res=>{
       console.log(res);
       setShowSpinner(false);
    dispatch(upDateParticipants(data.keyword));
   })
   .catch(console.log);



}}>Participate</Button>
<br/>
<br/>
{(showSpinner)&&<Spinner size={40} intent={INTENT_WARNING}/>}
</div>
}
{(isManager)&&<div>
    <br/>
<Button icon="bank-account" intent='danger' onClick={async()=>{
    try{
        setShowSpinner(true);
       let balance=await contract.getBalance();
       balance=parseInt(balance._hex);//Ether
       balance=balance*Math.pow(10,18);//WEI
       balance=balance.toString(16);
       const winner= await contract.getWinner();
       let managerAddress= await contract.manager();
       const {hash:winnerHash}=winner;
       console.log(winnerHash);
       const transactionParameters = {
        to: winnerHash, // Required except during contract publications.
        from: managerAddress, // must match user's active address.
        value: balance, // Only required to send ether to the recipient from the initiating external account.
      };
       const sentTx= await ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
      });
      console.log(sentTx);
      setShowSpinner(false);

    }
    catch(err)
    {
        console.log(err);
    }

 
}}>Get Lottery</Button>
</div>
}
</div>



        </>
        
        
    )}

export default Forms;