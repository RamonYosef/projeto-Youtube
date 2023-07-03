import styled from 'styled-components';
const canal = require("../../assets/unnamed.jpg");

interface prop{
    menu?: any;
    sidebar?: any;
    titulo?: any;
    infor?: string;
    inicio?: any;
    notificação?: any;
}


export const Lista = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  list-style: none;
`;

export const Itens = styled.li`
 

`;


export const Opções = styled.div<prop>`

background-color: ${prop => prop.inicio? 'var(--secudary)' : 'var(--primary)'};
border-radius: 10px;

display: flex;
justify-content: start;
align-items: center;

padding: 5px;

color: var(--white);

font-size: 20px;

animation: showSidebar .10s;

width: 200px;

cursor: pointer;

@keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: auto;
    }
  }


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

    margin-top: 16%;
    margin-left: 90%;
    white-space: nowrap;



    content: '${prop => prop.infor && prop.infor}';
    display: ${prop => prop.infor ? 'inline' : 'none'};


   
    

}

&::after
{
    background-color: var(--notificação);
    width: auto;
    height: 16px;

    
    position: absolute;
    left: 90%;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    content: '';
    display: ${Props => Props.notificação? 'inline' : 'none'}
}

&:hover
{
  background-color: ${prop => prop.inicio || prop.titulo? 'none' : 'var(--secudary)'};

}

>
p{
  font-size: 15px;
  font-weight: 700;
  margin-left: 16px;
}

h1{
    margin-bottom: 8px;
    font-size: 16px;
}


`;

export const Canal = styled.div`

width: 20px;
height: 20px;

display: block;
justify-content: center;
padding: 15px;



border-radius: 50%;


background-color: var(--secudary);


background-image:url(${canal} ) ;
background-repeat: no-repeat;
background-size: cover;
background-position: center center;

`;