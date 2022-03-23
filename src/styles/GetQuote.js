import styled from "styled-components";

export const GetQuote = styled.div`
background-image: url(assets/images/map-dark.jpg);
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
    opacity: 0.5;
    background: #2f3233;
}
.get-quote-container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  max-width: 100%;
  width: 1170px;
  padding-bottom: 75px;
  padding-top: 100px;
  position: relative;
  z-index: 3;
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
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.section2 {
  margin-top: 50px;
}
.input-cont {
  display: flex;
  flex-wrap: wrap;
}
.input-25 {
  width: 25%;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  @media(max-width:980px){
    &:nth-child(1), &:nth-child(4){
      width:100%;
    }
    width:50%;
  }
  @media(max-width:750px){
    &:nth-child(1), &:nth-child(4){
      width:100%;
    }
    width:100%;
  }
  input, select{
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
    font-style:italic;
  }
}
.input-100 {
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
    textarea {
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
        resize: none;
        font-family: inherit;
        font-style:italic;
    }
}
.buttons {
  margin-top: 30px;
    button {
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 700;
    padding: 23px 35px;
    line-height: 1;
    display: inline-block;
    text-align: center;
    color: #fff;
    background-color: #fab915;
    border-radius: 30px;
    border: none;
    transition: all .4s linear 0s;
    padding-right: 43px;
    padding-left: 43px;
    min-width: 200px;
    margin-bottom: 20px;
    margin-right: 16px;
    @media(max-width:980px){
      min-width: 160px;
    }
    }
}
.our-contacts {
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 700;
  line-height: 1;
  display: inline-block;
  text-align: center;
  border-radius: 30px;
  transition: all .4s linear 0s;
  padding: 21px 33px;
  color: #fff;
  background-color: transparent;
  border: 2px solid #fab915;
  padding-right: 43px;
  padding-left: 43px;
}
`;