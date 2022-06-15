import { Navbar,Button,NavbarHeading,NavbarDivider,NavbarGroup,Colors } from "@blueprintjs/core";
import {AiOutlineDollarCircle} from "react-icons/ai";

const navbarCSS={
    backgroundColor:Colors.DARK_GRAY1,
    height:"10vh",
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between"
};

const NavBar=()=>{
return(
  

    <Navbar  style={navbarCSS}>
    <NavbarGroup align={'right'}>
        <NavbarHeading style={{color:Colors.BLUE3,fontWeight:"bolder"}}>ETH LOTTERY</NavbarHeading>
        <NavbarDivider />
        <Button  text="Home" intent="success" />
        <Button   text="Statistics" intent="info"/>
    </NavbarGroup>
    <AiOutlineDollarCircle color={Colors.CERULEAN1} size={60}/>
</Navbar>




)


};
export default NavBar;