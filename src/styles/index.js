import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
html,body,#root{
    margin: 0px;
    padding: 0px;
    height: 100%;
    width: 100%;
    scroll-behavior: smooth;
    overflow: auto;
    overflow-x:hidden ;
}
*{
    box-sizing: border-box;
}
a{
    text-decoration:none ;
}
`;