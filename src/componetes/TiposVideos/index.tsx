import React from "react";
import {Container, Lista, Botão} from "./style";


const TiposVideos: React.FC = () => {

    return(

        <Container>
        <Lista>
        <li><Botão inicio>Tudo</Botão></li>
        <li><Botão>Jogos</Botão></li>
        <li><Botão>Mixes</Botão></li>
        <li><Botão>Fisiculturista</Botão></li>
        <li><Botão>Socos</Botão></li>
        <li><Botão>Arte culinária</Botão></li>
        <li><Botão>Ao vivo</Botão></li>
        <li><Botão>mod</Botão></li>
        <li><Botão>Podcast</Botão></li>
        <li><Botão>Ação</Botão></li>
        <li><Botão>Aventura</Botão></li>
        <li><Botão>Minecraft</Botão></li>
        <li><Botão>programação</Botão></li>
        <li><Botão>Novidades para você</Botão></li>
        </Lista>
        </Container>


    );
}


export default TiposVideos;