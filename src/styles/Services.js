import styled from "styled-components";

export const Services = styled.div`

background-color: #2f3233;
color: #bfbfbf;
.services-container {
  display: flex;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  max-width: 100%;
  width: 1170px;
  padding-bottom: 75px;
  padding-top: 100px;
  flex-wrap: wrap;
}
.section1 {
  display: flex;
}
.section1-1 {
  width: 50%;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-right: 15px;
  padding-left: 15px;
}
.section1-2 {
  width: 50%;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-right: 15px;
  padding-left: 15px;
}
.section2 {
  width: 100%;
  padding-top: 50px;
    margin-top: 30px;
    position: relative;
 &:before{
    content: '';
    display: block;
    position: absolute;
    height: 1px;
    left: 0;
    right: 0;
    top: 0;
    background-color: #565959;
    z-index: 1;
    left: 15px;
    right: 15px;
 }
}
.section2-items {
  display: flex;
}
.section2-item {
    width: 25%;
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
    padding-right: 15px;
    padding-left: 15px;
}
.section2-item-ico {
  margin-right: 20px;
  width: 2em;
  height: 2em;
  border-width: 2px;
  border-style: solid;
  position: relative;
  line-height: 2em;
  color: #fab915;
  border-color: #fab915;
  border-radius: 50%;
  font-size: 30px;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    }
}
.section2-item-txt h5 {
  color: #fff;
  font-weight: 700;
  line-height: 1.2;
  word-break: break-word;
  text-transform: uppercase;
  a {
    color: #fff;
    font-weight: 700;
    line-height: 1.2;
    word-break: break-word;
    font-size: 20px;
    small{
        display:block ;
    }
    }
}
.section1-1-span {
  color: #fab915;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1;
}
.section1-1-h2 {
    margin-bottom: 20px;
    font-size: 32px;
    position: relative;
    word-wrap: break-word;
    line-height: 1;
    font-size: 40px;
    color: #fff;
    margin-top: 0;
}
.divider {
  margin-top: 25px;
  margin-bottom: 25px;
  width: 60px;
  height: 2px;
  background-color: #fab915;
}
.section1-2-p {
  margin-top: 30px;
  font-family: open sans,sans-serif;
  font-weight: 300;
  line-height: 1.625rem;
  font-size: 15px;
}
`;