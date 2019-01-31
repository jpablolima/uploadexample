import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle  `
    * {
        margin: 0 ;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        background: #DB8D0B;
        text-rendering: optimizeLegibility;
        -webkit-fon-smoothing: antiabiliased;
    }

    html, body, #root{
        height: 100%
    }

`;