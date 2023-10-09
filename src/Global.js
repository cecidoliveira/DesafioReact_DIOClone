import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`   
    *{  
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Ubuntu', sans-serif;
    }
    :root{
        font-size: 62.5%;
    }
    :root body {
        height: 100%;
        color: #ffffff;
        background-color: #1E192C;
        
    }
`;