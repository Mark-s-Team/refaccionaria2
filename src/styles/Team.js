import styled from "styled-components";

export const Team = styled.div`

.team-container {
  display: flex;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  max-width: 100%;
  width: 1170px;
  padding-bottom: 75px;
  padding-top: 100px;
  flex-wrap:wrap;
  @media(max-width:1100px){
    width: 970px;
  }
  @media(max-width:980px){
    width: 750px;
    padding-bottom: 50px;
    padding-top: 75px;
  }
  @media(max-width:750px){
    width: 500px;
  }
}
.section1{
    width:25%;
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 30px;
    margin-top: 10px;
    @media(max-width:750px){
      width:100%;
    }
}
.section2 {
    width: 75%;
    padding-left: 25px;
    padding-right: 25px;
    margin-bottom: 30px;
    margin-top: 10px;
    @media(max-width:750px){
      width:100%;
    }
}
.slider-item-txt {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 25px 30px;
  border-bottom: 3px solid #fab915;
  background: #f2f2f2;
  h4 {
    font-size: 20px;
    line-height: 1.2;
    margin: 0;
    padding: 0;
  }
  p {
    font-size: 12px;
    text-transform: uppercase;
    color: #fab915;
    font-family: open sans,sans-serif;
    font-weight: 400;
    line-height: 1.625rem;
    margin: 0;
    padding: 0;
  }
}
.section3 {
  width: 100%;
  margin-bottom: 30px;
  margin-top: 10px;
  padding-left: 15px;
  padding-right: 15px;
}
.section3-1 {
  margin-top: -100px;
  @media(max-width:750px){
    margin-top: 0;
  }
}
.read-more-btn {
  background-color: #fab915;
  position: relative;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 700;
  padding: 23px 35px;
  padding-right: 35px;
  padding-left: 35px;
  line-height: 1;
  text-align: center;
  color: #fff;
  border-radius: 30px;
  border: none;
  transition: all .4s linear 0s;
  display: inline-block;
  &:hover{
    color: #2f3233;
  }
}
.disabled{
    opacity:0.5 !important;
}
.owl-carousel{
  position: relative;
   &:hover{
        .owl-nav{
            button{
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                opacity:1 !important;
                
            }
        }
        .owl-prev.disabled{
            opacity:0.5 !important;
        }
    } 
}
.owl-nav{
    button{
        position: absolute;
        top: 0%;
        opacity:0 !important;
    }
}

`;