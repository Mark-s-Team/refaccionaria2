import styled from "styled-components";

export const Header = styled.div`
.header-top {
  display: flex;
  padding-right: 120px;
  padding-left: 120px;
  padding-top: 10px;
  padding-bottom: 10px;
}
.header-social {
  display: flex;
  width: 25%;
  i{
    color: #b2b2b2;
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
  i{
    color: #fab915;
  }
}
.data-items {
  display: flex;
}
.data-item {
  margin-right: 7px;
  margin-bottom: 0;
  margin-left: 7px;
  display: flex;
  align-items: center;
  gap: 7px;
}
.header-search {
  display: flex;
  width: 25%;
  justify-content: right;
  align-items: center;
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
  position: relative;
  z-index:1;
}
.header-container {
  position: relative;
  padding-right: 120px;
  padding-left: 120px;
  display: flex;
  align-items: center;
  background-color: rgba(33,35,36,.75);
}
.header-menu {
  display: flex;
  width: 70%;
  justify-content: center;
}
.menu-ul ul {
  display: flex;
  margin: 0;
  padding: 0;
  > li {
    list-style: none;
    display: flex;
    a{
      margin-left: 19px;
      margin-right: 19px;
      padding-top: 52px;
      padding-bottom: 52px;
      color:#fff;
      text-decoration:none;
      text-transform:uppercase;
      font-size: 14px;
      font-weight: 700;
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
    small{
      display:block ;
    }
  }
  span {
    font-weight: 400;
    font-size: 32px;
    line-height: 1;
  }
}
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