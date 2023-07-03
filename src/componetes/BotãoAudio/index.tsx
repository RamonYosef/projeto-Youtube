import React from "react";
import {Container, Botão} from "./style";
import {AiFillAudio} from "react-icons/ai";
import {BiVideoPlus} from "react-icons/bi"
import {IoMdNotificationsOutline} from "react-icons/io";

const BotãoAudio: React.FC = () => {



    return(

    <Container>
        <Botão infor={'pesquisar com sua voz'} audio>
            <AiFillAudio/>
        </Botão>

        <ul>
        <li><Botão infor={'criar'}><BiVideoPlus/></Botão></li> 
        <li><Botão infor={'notificação'} notificação={10}><IoMdNotificationsOutline/></Botão></li>
        <li><Botão perfil></Botão></li>
        </ul>
    </Container>

    );
}


export default BotãoAudio;