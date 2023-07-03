import React from "react";

import {Container, Lista, Itens, Opções} from "./style";
import Inscrições from "../Inscrições";

import {BsFillHouseDoorFill} from "react-icons/bs";
import {MdOutlineAppShortcut} from "react-icons/md";
import {BiArchiveIn, BiAddToQueue} from "react-icons/bi";
import {AiOutlineHistory} from "react-icons/ai";
import {BsPlayBtn} from "react-icons/bs";
import {AiOutlineClockCircle} from "react-icons/ai";
import {BiCut} from "react-icons/bi";

const logo = require("../../assets/logo.png");

export interface prop{
    readonly active?: any;
}

const Sidebar: React.FC<prop> = ({active}) => {

const closeSidebar = () => {
    active(false)
}


    return(

        <Container sidebar={active}>
            <Lista>
                <Itens><Opções infor={'Inicio'} inicio><BsFillHouseDoorFill/><p>Inicio</p></Opções></Itens>
                <Itens><Opções infor={'Shorts'}><MdOutlineAppShortcut/><p>Shorts</p></Opções></Itens>
                <Itens><Opções infor={'Inscrições'}><BiArchiveIn/><p>Inscrições</p></Opções></Itens>
                    <hr/>
                <Itens><Opções infor={'Biblioteca'}><BiAddToQueue/><p>Biblioteca</p></Opções></Itens> 
                <Itens><Opções infor={'Histórica'}><AiOutlineHistory/><p>Histórica</p></Opções></Itens> 
                <Itens><Opções infor={'Seus vídeos'}><BsPlayBtn/><p>Seus vídeos</p></Opções></Itens> 
                <Itens><Opções infor={'Assistir mais tarde'}><AiOutlineClockCircle/><p>Assistir mais tarde</p></Opções></Itens> 
                <Itens><Opções infor={'Seus clipes'}><BiCut/><p>Seus clipes</p></Opções></Itens>
                    <hr/>
                    <Inscrições/>
                    <hr/>

            </Lista>
        </Container>

    );
}

export default Sidebar;