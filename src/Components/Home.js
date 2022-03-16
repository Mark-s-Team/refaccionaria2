import React, {useRef, useEffect} from 'react';
import { About } from '../styles/About';
import { Header } from '../styles/Header';
import { Services } from '../styles/Services';

export default function Home(){

    return(
        <>
            <Header>
                <div className="header-top">
                    <div className="header-social">
                        <div className="social-icons">
                            <div className="social-icon">
                                <i className="fa-brands fa-facebook-f"></i>
                            </div>
                            <div className="social-icon">
                                <i className="fa-brands fa-twitter"></i>
                            </div>
                            <div className="social-icon">
                                <i className="fa-brands fa-google"></i>
                            </div>
                            <div className="social-icon">
                                <i className="fa-brands fa-linkedin-in"></i>
                            </div>
                            <div className="social-icon">
                                <i className="fa-brands fa-youtube"></i>
                            </div>
                           
                        </div>
                    </div>
                    <div className="header-data">
                        <div className="data-items">
                            <div className="data-item">
                                <i className="fa-solid fa-location-dot"></i>
                                58/3 Kass Drives, Miami 
                            </div>
                            <div className="data-item">
                                <i className="fa-solid fa-pencil"></i>
                                clearview@example.com
                            </div>
                            <div className="data-item">
                                <i className="far fa-clock"></i>
                                Working Hours: 24/7 
                            </div>
                        </div>
                    </div>
                    <div className="header-search">
                        <div className="search-input">
                            <input type="" name="" placeholder="SEARCH KEYWORD"/>
                            <div className="icon-input">
                                <button type="submit" className="search-btn"></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header" id="navbar">
                    <div className="header-container">
                        <div className="header-logo">
                            <div className="logo">
                                <img src="assets/images/logo.png" alt="" />
                            </div>
                        </div>
                        <div className="header-menu">
                            <div className="menu-ul">
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Services</a></li>
                                    <li><a href="#">Team</a></li>
                                    <li><a href="#">Get Quote</a></li>
                                    <li><a href="#">Testimonals</a></li>
                                    <li><a href="#">CallcBack</a></li>
                                    <li><a href="#">News</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="header-txt">
                            <h5>Call us quickly</h5>
                            <span>(800) 846 4235</span>
                        </div>
                    </div>
                </div>
                <div className="page_main">
                    <div className="slider-container">
                        <img src="assets/images/slide01.jpg" alt="" />
                        <div className="sl-container">
                            <div className="description">
                                <div className="description-layer ">
                                    <p className="bold text-uppercase highlight"> welcome to the clearview </p>
                                    <h2>We Provide 24/7 Mobile Service</h2>
                                </div>
                                <div className="description-layer">
                                    <p className="normal-p">We Offer FREE mobile repair service, for all customers within a 25 mile range of our location.</p>
                                </div>
                                <div className="description-layer">
                                    <div className="description-buttons">
                                        <a href="#" className="btn1">
                                            Free Estimate
                                        </a>
                                        <a href="#" className="btn2">
                                            <span className="left-icon">
												<img src="assets/images/bbb.png" alt="" draggable="false" />
											</span>
											Accredited<br/> bussiness
											<span className="right-icon">A+</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Header>
            <About>
                <div className="container">
                    <div className="section1">
                        <div className="section1-txt">
                            <span className="section1-span">
                                Who is clearview?
                            </span>
                            <h2 className="section1-h2"> About Our Company </h2>
                            <div className="divider">
                            </div>
                            <p className="section1-p1"> A specialized team of experienced technicians thriving to help clients in their needs. </p>
                            <p className="section1-p2">
                                Since 2001, ClearView has specialized in repairing and replacing auto glass, windshields, automotive tinting, mobile services and more!
                            </p>
                            <p className="section1-p3">
                                Our full line of services is backed by decades of delivering quality workmanship and value to our customers. At ClearView, we pride ourselves on providing superior products and services for every one of our customers. It's what makes us the clear
								choice for all your glass needs. 
                            </p>
                        </div>
                    </div>
                    <div className="section2">
                        <div className="section2-container">
                            <a href="#" className="videoPlace">
                                <img src="assets/images/videobg.jpg" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </About>
            <Services>
                <div className="services-container">
                    <div className="section1">
                        <div className="section1-1">
                            <span class="section1-1-span">
                                Our Services
                            </span>
                            <h2 class="section1-1-h2"> Our Service Plans To Meet All Your Demands </h2>
                            <div className="divider">
                            </div>
                        </div>
                        <div className="section1-2">
                            <p class="section1-2-p">ClearView is incredibly flexible, friendly and easy to work with. Our list of services are widely acknowledged to assure you get the best quality service; Anytime. Anywhere! Pork loin capicola beef, pork tail strip steak pig ribeye cupim ball tip
								burgdoggen prosciutto biltong.</p>
                        </div>
                    </div>
                    <div className="section2">
                        <div className="section2-items">
                            <div className="section2-item">
                                <div className="section2-item-ico">
                                    <img src="assets/images/hood.png" alt="" />
                                </div>
                                <div className="section2-item-txt">
                                    <h5>
                                        <a href="#">
                                            <small>Windshield</small>
                                            remplacements
                                        </a>
                                    </h5>
                                </div>
                            </div>
                            <div className="section2-item">
                                <div className="section2-item-ico">
                                    <img src="assets/images/hood.png" alt="" />
                                </div>
                                <div className="section2-item-txt">
                                    <h5>
                                        <a href="#">
                                            <small>Windshield</small>
                                            remplacements
                                        </a>
                                    </h5>
                                </div>
                            </div>
                            <div className="section2-item">
                                <div className="section2-item-ico">
                                    <img src="assets/images/hood.png" alt="" />
                                </div>
                                <div className="section2-item-txt">
                                    <h5>
                                        <a href="#">
                                            <small>Windshield</small>
                                            remplacements
                                        </a>
                                    </h5>
                                </div>
                            </div>
                            <div className="section2-item">
                                <div className="section2-item-ico">
                                    <img src="assets/images/hood.png" alt="" />
                                </div>
                                <div className="section2-item-txt">
                                    <h5>
                                        <a href="#">
                                            <small>Windshield</small>
                                            remplacements
                                        </a>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Services>
        </>
    )
}