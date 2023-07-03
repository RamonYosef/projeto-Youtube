import React from "react";
import { Lista, Itens, Opções,Canal} from "./style";

const Inscrições: React.FC = () => {


    return(

  
        <Lista>
             <Itens><Opções titulo><h1>Inscrições</h1></Opções></Itens>
            <Itens><Opções infor={'canal de games'} notificação><Canal/><p>canal de games</p></Opções></Itens>
            <Itens><Opções infor={'canal de games'}><Canal/><p>canal de games</p></Opções></Itens>
            <Itens><Opções infor={'canal de games'}><Canal/><p>canal de games</p></Opções></Itens>
            <Itens><Opções infor={'canal de games'} notificação><Canal/><p>canal de games</p></Opções></Itens>
            <Itens><Opções infor={'canal de games'}><Canal/><p>canal de games</p></Opções></Itens>
            <Itens><Opções infor={'canal de games'} notificação><Canal/><p>canal de games</p></Opções></Itens>
                
        </Lista>
       

    );
}


export default Inscrições;