import styled from 'styled-components';


// ML = MenuVertical
// MH = menu horizontal
// PV = Partes dos videos
// TP = Tipos de videos

export const Grid = styled.div`

height: 100vh;


position: relative;
display: grid;
grid-template-columns: auto auto ;
grid-template-rows: 72px 48px auto;
grid-template-areas: "MH MH"
                     "MV TP"
                     "MV VP";

overflow-y: scroll;
overflow-x: hidden;


&::-webkit-scrollbar
{
    background-color: var(--primary);
    width: 10px;
}

&::-webkit-scrollbar-thumb
{
    background-color: var(--terciaria);
    width: 10px;
    border-radius: 25px;
}
  
  



`;


