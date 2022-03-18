import styled from "styled-components";

export const Testimonials = styled.div`

blockquote {
  margin: 0;
}
.testimonials-container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  max-width: 100%;
  width: 1170px;
  padding-bottom: 100px;
  padding-top: 100px;
  position: relative;
}
.section1 {
  padding-left: 15px;
  padding-right: 15px;
}
.slider-item-txt {
  display: table-cell;
  padding: 30px;
  border-bottom: 3px solid #fab915;
  background-color: #f2f2f2;
  position: relative;
  p{
    font-size: 16px;
    font-weight: 300;
    color: #787a7a;
    font-style: italic;
    font-family: open sans,sans-serif;
    line-height: 1.625rem;
  }
  &::after {
    font: var(--fa-font-solid);
    content: "\f0da";
    position: absolute;
    top: calc(50% - 8px);
    right: -8px;
    height: 15px;
    font-size: 40px;
    color: #f2f2f2;
    width: 15px;
    transform: translateY(-50%);
   }
}
.slider-item-media {
  display: table-cell;
  width: 35%;
  padding-left: 30px;
  vertical-align: middle;
  img {
    max-width: 45px;
    border-radius: 50%;
    margin-bottom: 10px;
  }
  h4{
    font-size: 24px;
  }
}
.star-rating{
    position: relative;
    vertical-align: middle;
    display: inline-block;
    &::before{
        font: var(--fa-font-solid);
        content: "\f006\f006\f006\f006";
        top: 0;
        left: 0;
        letter-spacing: .05em;
        font-size: 13px;
        position: absolute;
        color: #fab915;
    }
    span{
        &::before{
            font: var(--fa-font-regular);
            content: "\f005\f005\f005\f005\f005";
            top: 0;
            left: 0;
            letter-spacing: .05em;
            font-size: 13px;
            position: absolute;
            color: #fab915;
        }
    }
}
.section2 {
  margin-top: 60px;
}
`;