import styled from "styled-components";

export const About = styled.div`

.container {
  display: flex;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  max-width: 100%;
  max-width: 1170px;
  padding-bottom: 75px;
  padding-top: 100px;
}
.section1 {
  width: 50%;
  padding-right: 15px;
  padding-left: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.section1-txt {
  margin-bottom: 30px;
}
.section1-span {
  color: #fab915;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1;
}
.section1-h2 {
  margin: 0;
    margin-bottom: 0px;
  margin-bottom: 20px;
  font-size: 40px;
}
.divider {
  margin-top: 25px;
  margin-bottom: 25px;
  width: 60px;
  height: 2px;
  background-color: #fab915;
}
.section1-p1 {
  margin: 0;
  margin-bottom: 15px;
  color: #2f3233;
  font-weight: 700;
  line-height: 1.625rem;
  font-size: 15px;
}
.section1-p2 {
  margin: 0;
  margin-bottom: 15px;
  color: #787a7a;
  font-family: open sans,sans-serif;
  font-weight: 300;
  line-height: 1.625rem;
  font-size: 15px;
}
.section1-p3 {
  margin: 0;
  color: #787a7a;
  font-family: open sans,sans-serif;
  font-weight: 300;
  line-height: 1.625rem;
  font-size: 15px;
}
.section2 {
  width: 50%;
  padding-right: 15px;
  padding-left: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.section2-container {
    position:relative;
}
.videoPlace{
    &:after{
        font: var(--fa-font-solid);
        content: "\f04b";
        position: absolute;
        color: #fab915;
        font-size: 14px;
        line-height: 60px;
        width: 60px;
        height: 60px;
        text-align: center;
        background-color: #fff;
        border-radius: 50%;
        left: 50%;
        top: 50%;
        margin-left: -30px;
        margin-top: -30px;
        transition: all .2s ease 0s;
    }
    :hover > img {
        opacity: .8;
        transition: all .2s ease-in-out 0s;
    }
}
.section2-container img {
  width: 100%;
}
`;