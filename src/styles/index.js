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
.owl-nav{
    button{
        transition: all .2s ease-in-out 0s;
        width: 60px;
        height: 60px;
        background-color: #f2f2f2 !important;
        border-radius: 50% !important;
        i{
            color: #fab915 !important;
            transition: all .2s ease-in-out 0s;
            font-size:14px;
            @media(max-width:750px){
                font-size:10px;
            }
        }
        @media(max-width:750px){
            width: 40px;
            height: 40px;
        }
    }
}
.owl-prev {
    left:0 ;
    &:hover{
        i{        
            color:#000 !important;
        }
    }
}
.owl-next {
    right:0;
    &:hover{
        i{        
            color:#000 !important;
        }
    }
}
button{
    cursor: pointer;
}
i{
    transition: all .2s linear 0s;
    cursor: pointer;
}
.fa-facebook-f{
    &:hover{
        color: #507cbe !important;
    }
}
.fa-twitter{
    &:hover{
        color: #00abef !important;
    }
}
.fa-google{
    &:hover{
        color: #d93e2d !important;
    }
}
.fa-linkedin-in{
    &:hover{
        color: #3371b7 !important;
    }
}
.fa-youtube{
    &:hover{
        color: #d12121 !important;
    }    
}
`;