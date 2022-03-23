import styled from "styled-components";

export const Footer = styled.div`
.footer-container {
  background-color: #2f3233;
  color: #bfbfbf;
}
.footer-container-section1 {
  padding-bottom: 75px;
  padding-top: 75px;
  max-width: 100%;
  width: 1170px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-wrap:wrap ;
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
.footer-container-section1-1 {
  width: 50%;
  padding-right: 15px;
  padding-left: 15px;
    p {
        margin-top: 40px;
        margin-bottom: 15px;
        font-weight: 300;
        line-height: 1.625rem;
        font-size: 16px;
        
    }
    h4 {
        font-size: 24px;
        text-transform: uppercase;
        font-weight: 600;
        margin-bottom: 25px;
        color: #fff;
    }
  @media(max-width:750px){
    width: 100%;
    margin-bottom: 30px;
  }
}

.footer-container-section1-1-item {
  display: flex;
  margin-top: 15px;
  &.first{
    margin-top: 50px;
  }
}

.footer-container-section1-1-item-ico {
  padding-right: 7px;
    i {
        color: #fab915;
    }
}
.footer-container-section1-1-item-txt {
  width: 100%;
  font-weight: 300;
  line-height: 1.625rem;
  font-size: 16px;
    a {
        color: #fff;
        text-decoration: underline;
    }
}
.footer-container2 {
  background-color: #212324;
  color: #bfbfbf;
}
.footer-container2-items {
  max-width: 100%;
  width: 1170px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-top: 25px;
  padding-bottom: 25px;
  justify-content: space-between;
  @media(max-width:1100px){
    width: 970px;
  }
  @media(max-width:980px){
    width: 750px;
  }
  @media(max-width:750px){
    width: 500px;
    flex-direction: column;
    align-items: center;
  }
}
.footer-container2-section1 {
  margin-top: 10px;
  margin-bottom: 10px;
  padding-right: 15px;
  padding-left: 15px;
  p{
    font-size:14px;
  }
}
.footer-container2-section2 {
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-right: 15px;
  padding-left: 15px;
}
.footer-icons {
  display: flex;
  gap: 20px;
}
`;