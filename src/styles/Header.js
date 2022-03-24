import styled from "styled-components";

export const Header = styled.div`
position: relative;
z-index: 10;
.header-top {
  display: flex;
  padding-right: 120px;
  padding-left: 120px;
  padding-top: 10px;
  padding-bottom: 10px;
  flex-wrap:wrap;
  @media(max-width:1600px){
    padding-right: 60px;
    padding-left: 60px;
  }
  @media(max-width:1100px){
    padding-right: 30px;
    padding-left: 30px;
  }
}
.header-social {
  display: flex;
  width: 25%;
  position: relative;
  right: 50%;
  i{
    color: #b2b2b2;
  }
  @media(max-width:1100px){
    width:50%;
    right: 0%;
    justify-content:center;
  }
  @media(max-width:750px){
    width:100%;
    margin: 10px 0;
  }
}
.social-icons {
  display: flex;
  align-items: center;
}
.social-icon {
  margin-left: 18px;
}
.header-data {
  display: flex;
  width: 50%;
  justify-content: center;
  padding-right: 15px;
  padding-left: 15px;
  color: #b2b2b2;
  left:25%;
  i{
    color: #fab915;
  }
  position: relative;
  @media(max-width:1100px){
    width:100%;
    left:0%;
    margin-top: 10px;
    margin-bottom: 10px;
  }
}
.data-items {
  display: flex;
  flex-wrap: wrap;
}
.data-item {
  margin-right: 7px;
  margin-bottom: 0;
  margin-left: 7px;
  display: flex;
  align-items: center;
  gap: 7px;
  font-size:14px;
  @media(max-width:1300px){
    width: 45%;
    justify-content:center;
    &:nth-child(3){
      width:100%;
    }
  }
  @media(max-width:1100px){
    width: auto;
    &:nth-child(3){
      width:auto;
    }
  }
  @media(max-width:630px){
    width: 45%;
    margin: 5px 0;
    &:nth-child(3){
      width:100%;
    }
  }
  @media(max-width:480px){
    width: 100%;
    margin: 5px 0;
  }
}
.header-search {
  display: flex;
  width: 25%;
  justify-content: right;
  align-items: center;
  @media(max-width:1100px){
    width:50%;
    left:0%;
    justify-content:center;
  }
  @media(max-width:750px){
    width:100%;
  }
}
.search-input {
  position: relative;
  input {
    background-color: transparent;
    box-shadow: none;
    color: #2f3233;
    padding-left: 30px;
    padding-top: 14px;
    padding-bottom: 14px;
    font-size: 16px;
    line-height: 30px;
    font-weight: 300;
    border: 1px solid #ccc;
    height: 40px;
    border-radius: 20px;
    padding-right: 50px;
    width: 100%;
    outline:none;
    font-style:italic;
    &:focus::placeholder {
        color: transparent;
    }
    }
}
.icon-input {
  position: absolute;
  top: 0;
  right: 0;
  
}
.search-btn {
  border: 0;
  line-height: 40px;
  width: 50px;
  height: 40px;
  border-radius: 0 20px 20px 0;
  background-color: transparent;
  color: #fab915;
  padding: 0;
  &:before{
            font: var(--fa-font-solid);
            content: "\f002";
            color: #fab915;
        }
}
.header {
  width: 100%;
  height: 0 !important;
  
  z-index:1;
  @media(max-width:630px){
    height: auto !important;
  }
}
.header-container {
  
  padding-right: 120px;
  padding-left: 120px;
  display: flex;
  align-items: center;
  background-color: rgba(33,35,36,.75);
  @media(max-width:1600px){
    padding-right: 60px;
    padding-left: 60px;
  }
  @media(max-width:1100px){
    padding-right: 30px;
    padding-left: 30px;
  }
  @media(max-width:630px){
    background-color: rgba(33,35,36, 1);
  }
  @media(max-width:380px){
    padding-right: 15px;
    padding-left: 15px;
  }
}
.header-menu {
  display: flex;
  width: 70%;
  justify-content: center;
  @media(max-width:750px){
    justify-content: right; 
  }
}
.menu-ul ul {
  display: flex;
  margin: 0;
  padding: 0;
  > li {
    list-style: none;
    display: flex;
    position: relative;
    div{
      margin-left: 19px;
      margin-right: 19px;
      padding-top: 52px;
      padding-bottom: 52px;
      color:#fff;
      text-decoration:none;
      text-transform:uppercase;
      font-size: 14px;
      font-weight: 700;
      transition: all .2s ease-in-out 0s;
      cursor: pointer;
      @media(max-width:1600px){
        font-size: 12px;
        padding-top: 37px;
        padding-bottom: 37px;
      }
    }
    @media(max-width:980px){
        display:none ;
    }
  }
}
.header-txt {
  width: 20%;
  text-align: right;
  color: #fff;
  h5 {
    margin: 0;
    text-transform: uppercase;
    line-height: 1.2;
    word-break: break-word;
    font-size: 20px;
    font-weight: 100;
    @media(max-width:1600px){
      font-size: 16px;
    }
    @media(max-width:1300px){
      font-size: 14px;
    }
    small{
      display:block ;
    }
  }
  @media(max-width:750px){
      display:none ;
  }
  span {
    font-weight: 400;
    font-size: 32px;
    line-height: 1;
    @media(max-width:1600px){
      font-size: 24px;
    }
    @media(max-width:1300px){
      font-size: 20px;
    }
    
  }
}
.menu-ul{
  @media(max-width:980px){
    display:none;
  }
}
.sticky{
  position:fixed;
  top:0;
  z-index: 100;
  .header-container{
    background-color: rgb(33, 35, 36);
    box-shadow: 0 1px 15px rgba(0,0,0,.3);
  }
  .menu-ul ul > li > div{
    padding-top: 27px;
    padding-bottom: 27px;
  }
}
.logo{
  img{
    max-width: 270px;
    @media(max-width:1600px){
      max-width: 200px;
    }
  }
}
.hide-item {

  @media(max-width:1300px){
    display: none;
  }
}

.item-group {
  position: absolute;
  top: 100%;
  flex-direction: column;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(to top,#fab915 3px,#2f3233 3px);
  display:none !important;
  padding: 20px 0 !important;
  li > div {
    width:100%;
    text-align:center;
    padding: 10px 0 !important;
  }
}
.more-li{
  display:none !important;
  @media(max-width:1300px){
    display: block !important;
  }
  &:hover{
    .item-group {
      display:block !important;
    }
  }
}
.toggle-btn {
  width: 60px;
  height: 60px;
  cursor: pointer;
  position: relative;
  
  &:before{
    display: block;
    width: 30px;
    position: absolute;
    background-color: #ffffff;
    content: '';
    left: 0;
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    transition: .25s ease-in-out;
    height: 2px;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
  }
  span{
    &:before{
      display: block;
      width: 30px;
      position: absolute;
      background-color: #ffffff;
      content: '';
      left: 0;
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
      transition: .25s ease-in-out;
      height: 2px;
      top: calc(50% - 8px);
      left: 50%;
      transform: translateX(-50%);
    }
    &:after{
      display: block;
      width: 30px;
      position: absolute;
      background-color: #ffffff;
      content: '';
      left: 0;
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
      transition: .25s ease-in-out;
      height: 2px;
      top: calc(50% + 8px);
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
.menu-ul-mobile{
  display:none;
  @media(max-width:980px){
    display: block;
  }
}

.menu-open{
  display: block;
  position: absolute;
  top: 0;
  z-index: 2;
  right: 15px;
  transition: transform 0.3s ease-in-out;
  .toggle-btn {
  width: 60px;
  height: 60px;
  cursor: pointer;
  position: relative;
  
  &:before{
    display: none;
  }
  span{
    &:before{
      display: block;
      width: 30px;
      position: absolute;
      background-color: #ffffff;
      content: '';
      left: 0;
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
      transition: .25s ease-in-out;
      height: 2px;
      top: 50%;
      left: 0%;
      transform: rotate(-45deg);
    }
    &:after{
      display: block;
      width: 30px;
      position: absolute;
      background-color: #ffffff;
      content: '';
      left: 0;
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
      transition: .25s ease-in-out;
      height: 2px;
      top: 50%;
      left: 0%;
      transform: translateX(-50%);
      transform: rotate(45deg);
    }
  }
}
}
.menu-openc{
  display:none !important;
}
`;