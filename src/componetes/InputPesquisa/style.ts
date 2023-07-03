import styled from 'styled-components';

export const Container = styled.div`


width: 500px;
height: 100%;

display: flex;
justify-content: center;
align-items: center;



`;


export const Input = styled.input`

width: 500px;
padding: 10px;
border-bottom-left-radius: 25px;
border-top-left-radius: 25px;

display: flex;
align-items: center;
justify-content: center;

padding-left: 16px;

border: 1px solid var(--terciaria);

background-color: var(--primary);

color: var(--white);



&::placeholder
{
    color: var(--terciaria);

}




`;

export const BotãoPesquisa = styled.button`
width: 55px;
height: 38px;

font-size: 20px;
display: flex;
justify-content: center;
align-items: center;

border-bottom-right-radius: 25px;
border-top-right-radius: 25px;

cursor: pointer;

border: 1px solid var(--terciaria);
color: var(--white);

background-color: var( --secudary);




`;


