import styled from "styled-components";

export const Contact = styled.div`
.contact-container{
    background-image: url(assets/images/contact-top.jpg);
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
        z-index: 0;
        opacity: 0.6;
        background: #2f3233;
    }
}
.contact-top {
  padding-top: 180px;
  padding-bottom: 50px;
  max-width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  width: 1170px;
  position: relative;
  z-index: 2;
  color: #fff;
  flex-wrap:wrap;
  @media(max-width:750px){
    padding-top: 100px;
  }
  @media(max-width:630px){
    padding-top: 50px;
  }
  
}
.contact-top-title {
  text-align: center;
    h2{
        font-size: 40px;
        font-weight: 700;
        line-height: 1.2;
        @media(max-width:750px){
          font-size: 30px;
        }
    }
    ul{
        margin: 0;
        padding: 0;
        margin-top: 3px;
    }
    li {
        display: inline-block;
        color: #bfbfbf;
        font-weight: 700;
        font-size: 14px;
        text-transform: uppercase;
        cursor: pointer;
        transition: all .2s ease-in-out 0s;
        &:hover{
            color: #fab915;
        }
        &:nth-child(2){
            color: #fab915;
            &:before{
                content: "/";
                padding: 0 13px;
                color: #bfbfbf;
            }
        }
    }
}
.contact {
  display: flex;
  padding-top: 50px;
  padding-bottom: 20px;
  max-width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  width: 1170px;
  @media(max-width:750px){
    width:500px;
    padding-bottom: 75px;
  }
  flex-wrap:wrap;
  h3 {
    font-size: 32px;
    font-weight: 700;
    line-height: 1.2;
  }
}
.contact-cont {
  width: 66.66666667%;
  padding-left: 25px;
  padding-right: 25px;
  @media(max-width:750px){
    width:100%;
  }
}
.contact-info {
  width: 33.33333333%;
  @media(max-width:750px){
    width:100%;
    padding-left: 25px;
    padding-right: 25px;
  }
}
.contact-title {
  padding-left: 10px;
  padding-right: 10px;
  
}
.contact-form {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.input-50 {
  width: 50%;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  @media(max-width:750px){
    width:100%;
  }
  input {
        width: 100%;
        height: 60px;
        background-color: transparent;
        border-radius: 5px;
        box-shadow: none;
        color: #2f3233;
        padding-left: 30px;
        padding-right: 30px;
        padding-top: 14px;
        padding-bottom: 14px;
        font-size: 16px;
        line-height: 30px;
        font-weight: 300;
        border: 1px solid #ccc;
  }
}
.input-100 {
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
    textarea {
        width: 100%;
        height: 197px;
        background-color: transparent;
        border-radius: 5px;
        box-shadow: none;
        color: #2f3233;
        padding-left: 30px;
        padding-right: 30px;
        padding-top: 14px;
        padding-bottom: 14px;
        font-size: 16px;
        line-height: 30px;
        font-weight: 300;
        border: 1px solid #ccc;
        resize:none;
    }
    button {
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
        color: #fff;
        border-radius: 30px;
        border: none;
        transition: all .4s linear 0s;
        z-index: 1;
        background-color: #fab915;
        min-width: 200px;
        cursor: pointer;
        @media(max-width:750px){
          min-width: 160px;
        }
    }
}
.contact-info-item {
  display: flex;
  margin-top: 15px;
  align-items: center;
  @media(max-width:750px){
    width:100%;
    padding-left: 10px;
    padding-right: 10px;
  }
}
.contact-info-item-ico {
  padding-right: 7px;
  i{
    color: #fab915;
  }
}
.contact-info-item-txt {
  color: #787a7a;
  font-weight: 300;
  line-height: 1.625rem;
  font-size: 16px;
  a{
    color: #787a7a;
    text-decoration:underline;
  }
}
`;