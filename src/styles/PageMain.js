import styled from "styled-components";

export const PageMain = styled.div`
.slider-container {
  position: relative;
}
.slider-container img {
  width: 100%;
}
.sl-container {
  position: absolute;
  top: 0;
  height: 100%;
  width: 1170px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  padding-right: 15px;
  padding-left: 15px;
}
.description {
  max-width: 500px;
}
.bold.text-uppercase.highlight {
  color: #fab915;
  border-color: #fab915;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0;
    margin-bottom: 0px;
  margin-bottom: 15px;
}
.description-layer h2 {
  font-size: 64px;
  margin: 0;
  font-weight: 400;
  line-height: 1;
  margin-bottom: 1em;
  margin-top: 0;
  color: #fff;
}
.normal-p{
  margin: 0;
  color: #fff;
  font-size: 19px;
  line-height: 1.5em;
  font-family: open sans,sans-serif;
  font-weight: 300;
}
.description-buttons {
  margin: 9% 0px 0px;
  a{
    vertical-align: top;
  }
}
.btn1 {
  color: #fff;
  background-color: #fab915;
  position: relative;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 700;
  padding: 23px 35px;
  padding-right: 35px;
  padding-left: 35px;
  line-height: 1;
  display: inline-block;
  text-align: center;
  border-radius: 30px;
  border: none;
  transition: all .4s linear 0s;
  margin: 0 10px 10px;
  margin-left: 0;
}
.btn2 {
  position: relative;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 700;
  line-height: 1;
  display: inline-block;
  color: #fff;
  background-color: #2f3233;
  border-radius: 30px;
  transition: all .4s linear 0s;
  z-index: 1;
  border: 2px solid #fab915;
  border-width: 1px;
  padding: 15px 25px 15px 75px;
  text-align: left;
  margin: 0 10px 10px;
  margin-right: 0;
  &:hover{
    color: #fab915;
  }
  
}
.left-icon {
  position: absolute;
  top: -1px;
  left: -1px;
  width: 60px;
  line-height: 60px;
  background-color: #fab915;
  border-radius: 30px 0 0 30px;
  opacity: 1 !important;
  text-align: center;
  padding-left: 10px;
}
.left-icon img {
  width: auto;
  display: inline-block;
  vertical-align: middle;
}
.right-icon {
  text-align: center;
  position: absolute;
  width: 36px;
  height: 36px;
  line-height: 36px;
  right: -10px;
  bottom: -10px;
  color: #fff;
  background-color: #fab915;
  border-radius: 50%;
}

`;