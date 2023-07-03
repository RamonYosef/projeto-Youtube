import styled from 'styled-components';
interface prop{
    inicio?: any;
}

export const Container = styled.div`
  grid-area: TP;

  
  background-color: var(--primary);
  display: flex;
  justify-content: start;
  align-items: center;

  position: sticky;
  top: 72px;
 box-sizing: border-box;


`;

export const Lista = styled.ul`

display: flex;
justify-content: start;
align-items: center;
list-style: none;
gap: 8px;

margin-left: 24px;
`;

export const Botão = styled.button<prop>`

    width:auto;
    padding: 6px;

    background-color: ${prop => prop.inicio? "var(--white)" : "var(--secudary)"};
    color: ${prop => prop.inicio? "var(--primary)" : "var(--white)"};

    font-size: 15px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 8px;

    cursor: pointer;
    white-space: nowrap;

&:hover
{
    background-color: ${prop => prop.inicio? "none" : "var(--terciaria)"};
}

`;
