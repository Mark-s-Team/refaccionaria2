import styled from "styled-components";

export const Menu =  styled.div`
height: 100vh;
text-align: left;
padding: 2rem;
position: fixed;
display: flex;
flex-direction: column;
transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
top:0;
transition: transform 0.3s ease-in-out;
background-color: #2f3233;
width:100%;
z-index:100;
ul {
  margin: 0;
  list-style: none;
  padding: 0;
}
li {
  padding: 10px 15px;
  color: #fff;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;
}
`;