import styled from 'styled-components';
const perfil = require("../../assets/perfil.jpg");


interface prop{
  infor?: string;
  audio?: any;
  perfil?: any;
  notificação?: number;
}

export const Container = styled.div<prop>`
  
  width: 472px;
  height: 100%;

background-color: var(--primary);

  display: flex;
  justify-content: space-between;
  align-items: center;

  ul
{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  text-decoration: none;

  list-style: none;
}

li
{
  text-decoration: none;
}

`;

export const Botão = styled.div<prop>`

width: 40px;
height: 40px;

background-color: ${prop => prop.audio? 'var(--secudary)': 'var(--primary)'};
background-image:url(${prop => prop.perfil? perfil : 'none'} ) ;
background-repeat: no-repeat;
background-size: cover;
background-position: center center;

border-radius: 25px;

margin-left:8px;

cursor: pointer;

color: var(--white);

display: flex;
align-items: center;
justify-content: center;

font-size: 20px;

&:hover::after
{
  position: absolute;
  

    width: auto;
    padding: 6px 8px;

    background-color: var(--terciaria);
    color: var(--white);

    font-size: 15px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 8px;

     margin-top: 96px;
     


    content: '${prop => prop.infor && prop.infor}';
    display: ${prop => prop.infor ? 'inline' : 'none'};

}

&::before
{
  background-color: var(--logo);
    width: auto;
    height: 16px;

    
    position: absolute;
    padding: 0 4px;
   margin-bottom:24px;
   margin-left: 24px;

    border-radius: 12px;
    text-align: right;
    font-size: 13px;
    font-weight: bold;
    color: var(--white);

    content: '${Props => Props.notificação && Props.notificação}';
    display: ${Props => Props.notificação && Props.notificação > 0 ? 'inline' : 'none'}
}



&:hover
{
    background-color: ${prop => prop.audio? 'var(--terciaria)': 'var(--secudary)'};
}




  
`;
