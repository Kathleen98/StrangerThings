import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
        width: 100vw;
    }

    body{
        background: #000;
    }
    
`


export default GlobalStyles;