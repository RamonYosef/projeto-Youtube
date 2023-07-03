
import styled from 'styled-components';

interface prop{

    menu?: any;
    infor?: string;
    Top?: any;
    Left?: any;
    logo?: any;


        sidebar?: any;
        titulo?: any;

}







export const Container = styled.div<prop>`

grid-area: MV;
background-color: var(--primary);




>ul
{
display: flex;

flex-direction: column;
justify-content: flex-start;
align-items:center;
row-gap: 16px;
list-style: none;

position: sticky;
top: 72px;
}


`;

export const Opções = styled.div<prop>`


color:  var(--white);
width: ${(prop) => prop.menu? '40px' : '60px'};
height: ${(prop) => prop.menu? '40px' : '70px'};

margin-top: ${(prop) => prop.menu? '16px' : 'none'};


display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
gap: 8px;



border-radius: ${(prop) => prop.menu? '50%' : '15px'};

font-size: 20px;

cursor: pointer;


&:hover::before
{
    position: absolute;
    

    width: auto;
    padding: 3px 8px;

    background-color: var(--secudary);
    color: var(--white);

    font-size: 15px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid var(--white);

    margin-top: 116%;
    margin-left: 164%;



    content: '${prop => prop.infor && prop.infor}';
    display: ${prop => prop.infor ? 'inline' : 'none'};


   
    

}




&:hover
{
    background-color: var(--secudary);
}

>p
{
    font-size: 10px;
}




`;






