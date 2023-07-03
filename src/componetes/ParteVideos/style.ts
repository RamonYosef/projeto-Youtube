import styled from 'styled-components';




export const Container = styled.div`


  background-color: var(--primary);
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 35px;
  grid-auto-rows: 372px;
  padding: 50px;

  
`;

export const BoxVideos = styled.div`
 
background-color: var(--primary);


  
  
`;

export const Videos = styled.div`

background-color: var(--secudary);
width: auto;
height: 250px;

border-radius: 15px;

transition: all 0.5s;

&:hover
{
  border-radius: 0;
}

`;


export const TxtVideos = styled.div`

color: var(--white);
font-weight: 700;
margin-top: 8px;


font-size: 15px;


width: auto;


display: flex;
justify-content: center;
align-items: center;
gap: 8px;


cursor: pointer;


`;

export const Canal = styled.div`

width: 45px;
height: 45px;

display: block;
justify-content: center;
padding: 15px;


border-radius: 50%;


background-color: var(--secudary);

`;

interface prop
{
  existe?: any;
}

export const NomeCanal = styled.p`


color: var(--canal);
padding-left: 48px;
margin-top: 8px;

cursor: pointer;


&:hover
{
  color: var(--white);
}

`;

export const Verificado = styled.div<prop>`

display: inline;

color: var(--canal);
cursor: pointer;

font-size: 13px;

`;

export const Views = styled.p`

color: var(--canal);
padding-left: 48px;


cursor: pointer;



`;




