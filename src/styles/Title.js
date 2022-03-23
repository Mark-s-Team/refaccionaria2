import styled from "styled-components";

export const Title = styled.div`
span{
    color: #fab915;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 1;
}
h2{
    margin-bottom: 20px;
    font-size: 32px;
    position: relative;
    word-wrap: break-word;
    line-height: 1;
    font-size: 40px;
    color: ${props => props.color};
    margin-top: 0;
    @media(max-width:1100px){
        font-size: 30px;
    }
}
`;