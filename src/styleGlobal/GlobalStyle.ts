import { createGlobalStyle } from "styled-components";


 export default createGlobalStyle`

*
{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html, body, #root
{
    height: 100%;
}

*, button, input
{
    border: 0;
    outline: 0;
    font-family: 'Roboto', sans-serif;
    color: var(--rocketseat);
}

:root
{
    --primary: #0F0F0F;
    --white: white;
    --secudary: #272727;
    --logo: #FF0000;
    --terciaria: #707678;
    --canal: #767676;
    --notificação: #3A9BEF;
}


`;