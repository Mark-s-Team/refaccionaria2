import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
html,body,#root{
    margin: 0px;
    padding: 0px;
    height: 100%;
    width: 100%;
    scroll-behavior: smooth;
    font-family: open sans,sans-serif;
}
*{
    box-sizing: border-box;
}
a{
    text-decoration:none ;
}
input, textarea{
    outline:none ;
    &::placeholder{
        text-transform:uppercase;
        font-size:14px ;
        font-style:italic;
        font-family: open sans,sans-serif;
    }
    &:focus::placeholder {
        color: transparent;
    }
}
p{
    margin:0;
}
h1,h2,h3,h4,h5,h6{
    margin:0;
}
.body-container{
    overflow-x:hidden;
}
`;