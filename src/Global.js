import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`   
    *{  
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root{
        font-family: 'Ubuntu', sans-serif;
        font-size: 62.5%;
    }
    :root body {
        height: 100%;
        color: #ffffff;
        background-color: #1E192C;
        
    }
`;