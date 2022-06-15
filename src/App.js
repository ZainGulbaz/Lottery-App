import { useEffect,useState } from 'react';
import './App.css';
import NavBar from "./Components/NavBar";
import Forms from './Components/Form';
import Details from './Components/Details';
import {getEthereumContract} from "./Actions/index";
import {useDispatch} from "react-redux";
import Participants from './Components/Participants';

function App() {
const dispatch= useDispatch();
useEffect(()=>{
dispatch(getEthereumContract());

},[]);


  return (
   <>
  
   <NavBar/>
    
   <div style={{display:"flex",justifyContent:"space-between",padding:"10px"}}>
     <Details/>
     <Forms/>
   </div>

   <Participants/>

   
   </>
  );
}

export default App;
