import styled from "styled-components";

export const Anvantages = styled.div`
    .anvantages-container {
        padding-bottom: 75px;
        padding-top: 100px;
        max-width: 100%;
        width: 1170px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 15px;
        padding-right: 15px;
        @media(max-width:1100px){
            width: 970px;
        }
        @media(max-width:980px){
            width: 750px;
        }
        @media(max-width:750px){
            width: 500px;
        }
    }
    .section1 {
        padding-left: 15px;
        padding-right: 15px;
    }
    .section1-1{
        width:50%;
        p {
            color: #787a7a;
            font-weight: 300;
            line-height: 1.625rem;
            font-size: 16px;
        }
        @media(max-width:980px){
            width:100%;
        }
    }
`;