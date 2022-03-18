import styled from "styled-components";

export const News = styled.div`
    background-color: #2f3233;
    .news-container {
        padding-bottom: 75px;
        padding-top: 100px;
        max-width: 100%;
        width: 1170px;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
        display: flex;
    }
    .section1 {
        width: 25%;
        padding-left: 15px;
        padding-right: 25px;
    }
    .section2 {
        width: 75%;
    }
    .slider-item-content {
        background: #fff;
        padding: 25px 30px;
    }
    .item-txt-cat p {
        color: #fab915;
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
    }
    .item-txt-title {
        margin-bottom: 20px;
        h4 {
            font-size: 20px;
            line-height: 1.2;
            font-weight: 700;
        }
    }
    .item-txt-text p {
        font-weight: 300;
        line-height: 1.625rem;
        font-size: 16px;
        color: #787a7a;
    }
    .section1-1{ 
        ul {
            list-style: none;
            padding: 0;
            margin: 0;
            li {
                border-top: 1px solid #565959;
                &:nth-child(1){
                    border:0 ;
                }
            }
            a {
                color: #bfbfbf;
                padding-bottom: 10px;
                display: inline-block;
                position: relative;
                padding-left: 20px;
                padding-top: 10px;
                font-weight: 300;
                line-height: 1.625rem;
                font-size: 16px;
                display: flex;
                align-items: center;
                &:before{
                    font: var(--fa-font-solid);
                    content: "\f0da";
                    color: #fab915;
                    position:absolute;
                    left: 0;
                    font-size: 12px;
                }
            }
        }
        
    }
    .slider-item {
        overflow: hidden;
        border-radius: 3px;
    }
    .slider-item-img {
        border-top: 3px solid #fab915;
    }
`;