import styled from 'styled-components';

interface prop{
    menu?: any;
    sidebar?: any;
    titulo?: any;
    infor?: string;
    inicio?: any;
}

export const Container = styled.div<prop>`

grid-area: MV;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
  left: ${props => props.sidebar ? '0' : '-100%'};
  animation: showSidebar .10s;

  width: 200px;
  z-index: 1;
  box-sizing: border-box;
 
  
  
  

  background-color: var(--primary);
  
  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 200px;
    }
  }
`;

export const Lista = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  >
  hr
{
  width: 100%;
  height: 2px;
  background-color: var(--secudary);
  margin: 16px;
}

`;

export const Itens = styled.li`
 

`;


export const Opções = styled.div<prop>`

background-color: ${prop => prop.inicio? 'var(--secudary)' : 'var(--primary)'};
border-radius: 10px;

display: flex;
justify-content: start;
align-items: center;

padding: 10px;

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

&:hover
{
  background-color: ${prop => prop.inicio? 'none' : 'var(--secudary)'};
}

>
p{
  font-size: 15px;
  font-weight: 700;
  margin-left: 16px;
}



`;

