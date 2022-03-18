import styled from "styled-components";

export const Slider = styled.div`
background-color: #fab915;

.slider-container {
  padding-bottom: 40px;
  padding-top: 40px;
  padding-right: 120px;
  padding-left: 120px;
}
.slider-item{
    img{
        opacity: .35;
        transition: all .2s ease-in-out 0s;
        width: 120px;
        &:hover{
            opacity:1;
        }
    }
}
.center{
    img{
        opacity:1;
        transition: all .2s ease-in-out 0s;
    }
}
`;