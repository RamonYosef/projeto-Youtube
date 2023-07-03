import styled from 'styled-components';

interface prop
{
    menu?: any;
}

export const Container = styled.div`
grid-area: MH;
background-color: var(--primary);

display: flex;
justify-content: start;
align-items: center;

position: sticky;
top: 0;
z-index: 1;






`;

export const Titulo = styled.div`
display: flex;
justify-content: start;
align-items: center;

margin-left: 16px;

width: 240px;
height: 100%;

cursor: pointer;
z-index: 2;


`;


export const Opções = styled.div<prop>`


color:  var(--white);
width: ${(prop) => prop.menu? '40px' : '60px'};
height: ${(prop) => prop.menu? '40px' : '70px'};

margin-left: 13px;
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
gap: 16px;



border-radius: ${(prop) => prop.menu? '50%' : '15px'};

font-size: 20px;

cursor: pointer;


&:hover
{
    background-color: var(--secudary);
}

>p
{
    font-size: 10px;
}




`;




