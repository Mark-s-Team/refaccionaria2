import { isVisible } from '@testing-library/user-event/dist/utils';
import React, {useEffect} from 'react';
import { Contact as StyledContact } from '../styles/Contact';
import { Divider } from '../styles/Divider';
import Map from './Map';


export default function Contact(props){
    const { isVisible } = props;
    useEffect(() => {
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
          });
    }, []);
    const closePage = () =>{
        if((typeof isVisible) === 'function'){
            isVisible();
        }
    }
    return(
        <StyledContact>
            <div className="contact-container">
                <div className="contact-top">
                    <div className="contact-top-title">
                        <h2>Contact</h2>
                        <ul>
                            <li onClick={closePage}>Home</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>   
            </div>
            <Map />
            <div className="contact">
                <div className="contact-cont">
                    <div className="contact-title">
                        <h3>Contact Form</h3>
                        <Divider />
                    </div>
                 
                    <form className="contact-form">
                        <div className="input-50">
                            <input type="" name="" placeholder="Full Name*" />
                        </div>
                        <div className="input-50">
                            <input type="" name="" placeholder="Email Address*" />
                        </div>
                        <div className="input-50">
                            <input type="" name="" placeholder="Phone Number" />
                        </div>
                        <div className="input-50">
                            <input type="" name="" placeholder="Your Subject" />
                        </div>
                        <div className="input-100">
                            <textarea rows="5" cols="45" placeholder="message"></textarea>
                        </div>
                        <div className="input-100">
                            <button type="submit">Send Now</button>
                        </div>
                    </form>
                </div>
                <div className="contact-info">
                    <div className="contact-title">
                        <h3>Contact Info</h3>
                        <Divider />
                    </div>
                    <div className="contact-info-item first">
                        <div className="contact-info-item-ico">
                            <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <div className="contact-info-item-txt">
                            58/3 Kass Drives, Miami, Inc - 845
                        </div>
                    </div>
                    <div className="contact-info-item">
                        <div className="contact-info-item-ico">
                            <i className="fa-solid fa-phone"></i>
                        </div>
                        <div className="contact-info-item-txt">
                        0 (800) 846 4235 (operator)
                        </div>
                    </div>
                    <div className="contact-info-item">
                        <div className="contact-info-item-ico">
                            <i className="fa-solid fa-pencil"></i>
                        </div>
                        <div className="contact-info-item-txt">
                            <a href="#">clearview@example.com</a>
                        </div>
                    </div>
                    <div className="contact-info-item">
                        <div className="contact-info-item-ico">
                            <i className="far fa-clock"></i>
                        </div>
                        <div className="contact-info-item-txt">
                            Working Hours: 24/7
                        </div>
                    </div>
                </div>
            </div>
            
        </StyledContact>
    )
}