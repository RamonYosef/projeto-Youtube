import React from "react";
import {Container, Input, BotãoPesquisa} from "./style";
import {AiOutlineSearch} from "react-icons/ai";



const InputPesquisa: React.FC = () => {


    return(

        <Container>
            <Input placeholder="Pesquisar" ></Input>
            <BotãoPesquisa><AiOutlineSearch/></BotãoPesquisa>

        </Container>

    );
}

export default InputPesquisa;