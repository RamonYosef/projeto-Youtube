import React from "react";
import {useState} from "react";

import {Container, Opções} from "./style";

import {AiOutlineMenu} from "react-icons/ai";
import {BsFillHouseDoorFill} from "react-icons/bs";
import {MdOutlineAppShortcut} from "react-icons/md";
import {BiArchiveIn, BiAddToQueue} from "react-icons/bi";

const logo = require("../../assets/logo.png");



const MenuVertical: React.FC= () => {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return(

        <>
        <Container>
            <ul>
            <li><Opções infor={'Inicio'}><BsFillHouseDoorFill/><p>Inicio</p></Opções></li>
            <li><Opções infor={'Shorts'}><MdOutlineAppShortcut/><p>Shorts</p></Opções></li>
            <li> <Opções infor={'Inscrições'}><BiArchiveIn/><p>Inscrições</p></Opções></li>
            <li><Opções infor={'Biblioteca'}><BiAddToQueue/><p>Biblioteca</p></Opções></li>
            </ul>
        </Container>
            
        </>


    );
}

export default MenuVertical;


