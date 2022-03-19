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
`;