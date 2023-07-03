import React from "react";
import {useState} from "react";
import {Container, Titulo, Opções} from "./style";

import Sidebar from "../Sidebar";
import {AiOutlineMenu} from "react-icons/ai";
import InputPesquisa from "../InputPesquisa";
import BotãoAudio from "../BotãoAudio";
const logo = require("../../assets/logo.png");





const MenuHorizontal: React.FC = () => {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

return(

    <>
    {sidebar && <Sidebar active={setSidebar}/>}
    <Container>
        
        
        <Opções menu onClick={showSidebar}><AiOutlineMenu/></Opções> 
        <Titulo><img src={logo} alt="" /></Titulo>
        <InputPesquisa/>
        <BotãoAudio/>
        
    </Container>

    </>

);

}

export default MenuHorizontal;