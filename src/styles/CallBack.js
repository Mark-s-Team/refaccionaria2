import styled from "styled-components";

export const CallBack = styled.div`
background-image: url(assets/images/progress.jpg);
background-attachment: fixed;
background-repeat: no-repeat;
position: relative;
background-size: cover;
&::before{
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
    opacity: 0.8;
    background: #2f3233;
}
.callback-container {
  padding-top: 100px;
  padding-bottom: 100px;
  max-width: 100%;
  width: 1170px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 3;
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
  display: flex;
  flex-wrap:wrap;
}
.section1-1 {
  display: flex;
  width:25%;
  @media(max-width:980px){
    width:100%;
  }
}
.section1-1-txt {
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
    h2 {
    color: #fff;
    font-size: 32px;
    }
}
.section1-2 {
  width: 75%;
  display: flex;
  flex-wrap:wrap ;
  @media(max-width:980px){
    width:100%;
  }
}
.section1-2-input {
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 33.33%;
    input {
        height: 60px;
        background-color: transparent;
        border-radius: 5px;
        box-shadow: none;
        color: #fff;
        padding-left: 30px;
        padding-right: 30px;
        padding-top: 14px;
        padding-bottom: 14px;
        font-size: 16px;
        line-height: 30px;
        font-weight: 300;
        border: 1px solid #565959;
        width: 100%;
        font-style: italic;
    }
  @media(max-width:750px){
    width: 100%;
    padding-left: 0;
    padding-right: 0;
  }
}
.section1-2-button {
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 33.33%;
    button {
        font-size: 14px;
        text-transform: uppercase;
        font-weight: 700;
        padding: 23px 35px;
        display: inline-block;
        text-align: center;
        color: #fff;
        background-color: #fab915;
        border-radius: 30px;
        border: none;
        transition: all .4s linear 0s;
        padding-right: 45px;
        padding-left: 45px;
        width: 100%;
        &:hover{
          color: #2f3233;
        }
    }
  @media(max-width:750px){
    width: 100%;
    padding-left: 0;
    padding-right: 0;
  }
}
`;