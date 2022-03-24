import React, {useState, useEffect, useRef} from 'react';
import { About } from '../styles/About';
import { Header } from '../styles/Header';
import { Services } from '../styles/Services';
import { Team } from '../styles/Team';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Divider } from '../styles/Divider';
import { Title } from '../styles/Title';
import { GetQuote } from '../styles/GetQuote';
import { Testimonials } from '../styles/Testimonials';
import { CallBack } from '../styles/CallBack';
import { Anvantages } from '../styles/Anvantages';
import { Slider } from '../styles/Slider';
import { Footer } from '../styles/Footer';
import { PageMain } from '../styles/PageMain';
import Contact from './Contact';
import VisibilitySensor from "react-visibility-sensor";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Menu } from '../styles/Menu';
export default function Home(){
    const options = {
        margin: 30,
        responsiveClass: true,
        nav: false,
        dots: false,
        autoplay: false,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            750: {
                items: 1,
            },
            980: {
                items: 2,
            },
            1000: {
                items: 3,

            }
        },
    };
    const options2 = {
        margin: 30,
        responsiveClass: true,
        nav: false,
        dots: false,
        autoplay: false,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            750: {
                items: 1,
            },
            900: {
                items: 2,
            },
            1000: {
                items: 2,

            }
        },
    };
    const options3 = {
        margin: 30,
        responsiveClass: true,
        nav: false,
        dots: false,
        autoplay: false,
        smartSpeed: 1000,
        loop:true,
        center:true,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 3,
            },
            980: {
                items: 5,
            },
            1024: {
                items: 5,
            },
            1200: {
                items: 7,
            },
            1600: {
                items: 9,

            }
        },
    };
    useEffect(() => {
        const header = document.getElementById("headerS");
        const sticky = header.offsetTop;
        const scrollCallBack = window.addEventListener("scroll", () => {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
        });
        return () => {
        window.removeEventListener("scroll", scrollCallBack);
        };
    }, []);
    const refA = useRef(null);
    const refB = useRef(null);
    const refC = useRef(null);
    const refD = useRef(null);
    const refE = useRef(null);
    const refF = useRef(null);
    const refG = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [open, setOpen] = useState(false);
    const toggleMenu = () =>{
        setOpen(!open);
    }
    const showContact = () =>{
        setIsVisible(true);
        setOpen(false);
    }
    const scrollTo = (el)=>{
        if (isVisible) {
            setIsVisible(false);
            
        }
        setOpen(false);
        el.current.scrollIntoView({behavior: 'smooth'});
    }
   
    return(
        <>
            <Header ref={refA}>
                <div className="header-top">
                    
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
                    <div className="header-search">
                        <div className="search-input">
                            <input type="" name="" placeholder="SEARCH KEYWORD"/>
                            <div className="icon-input">
                                <button type="submit" className="search-btn"></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header" id="headerS">
                    <div className="header-container">
                        <div className="header-logo">
                            <div className="logo">
                                <img src="assets/images/logo.png" alt="" />
                            </div>
                        </div>
                        <div className="header-menu">
                            <div className="menu-ul">
                                <ul>
                                    <li><div onClick={()=> scrollTo(refA)}>Home</div></li>
                                    <li><div onClick={()=> scrollTo(refB)}>About</div></li>
                                    <li><div onClick={()=> scrollTo(refC)}>Services</div></li>
                                    <li><div onClick={()=> scrollTo(refD)}>Team</div></li>
                                    <li><div className="hide-item" onClick={()=> scrollTo(refE)}>Get Quote</div></li>
                                    <li><div className="hide-item" onClick={()=> scrollTo(refF)}>Testimonals</div></li>
                                    <li><div className="hide-item" onClick={()=> scrollTo(refG)}>CallcBack</div></li>
                                    <li><div onClick={showContact} >Contact</div></li>
                                    <li className="more-li"><div className="hide-item-group">...</div>
                                        <ul className="item-group">
                                            <li><div onClick={()=> scrollTo(refE)}>Get Quote</div></li>
                                            <li><div onClick={()=> scrollTo(refF)}>Testimonals</div></li>
                                            <li><div onClick={()=> scrollTo(refG)}>CallcBack</div></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="menu-ul-mobile">
                                <div className="toggle-btn" onClick={toggleMenu}>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                        <div className="header-txt">
                            <h5>Call us quickly</h5>
                            <span>(800) 846 4235</span>
                        </div>
                    </div>
                </div>
                
                <Menu open={open}>
                    <div className={`${open ? "menu-open":"menu-openc"}`}>
                        <div className="toggle-btn" onClick={toggleMenu}>
                            <span></span>
                        </div>
                    </div>
                    <ul>
                        <li><div onClick={()=> scrollTo(refA)}>Home</div></li>
                        <li><div onClick={()=> scrollTo(refB)}>About</div></li>
                        <li><div onClick={()=> scrollTo(refC)}>Services</div></li>
                        <li><div onClick={()=> scrollTo(refD)}>Team</div></li>
                        <li><div onClick={()=> scrollTo(refE)}>Get Quote</div></li>
                        <li><div onClick={()=> scrollTo(refF)}>Testimonals</div></li>
                        <li><div onClick={()=> scrollTo(refG)}>CallcBack</div></li>
                        <li><div onClick={showContact} >Contact</div></li>
                    </ul>   
                </Menu>
            </Header>
            <div className="body-container">
                {isVisible ? 
                <Contact isVisible={()=> setIsVisible(false)} />
                : 
                <div className="spa">
                <PageMain>
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
                </PageMain>
                <About ref={refB}>
                    <div className="container">
                        <div className="section1">
                            <div className="section1-txt">
                                <Title color="#2f3233">
                                    <span>
                                        Who is clearview? 
                                    </span>
                                    <h2> About Our Company  </h2>
                                    <Divider />
                                </Title>
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
                <Services ref={refC}>
                    <div className="services-container">
                        <div className="section1">
                            <div className="section1-1">
                                <Title color="#fff">
                                    <span>
                                        Our Services
                                    </span>
                                    <h2> Our Service Plans To Meet All Your Demands </h2>
                                    <Divider />
                                </Title>
                            </div>
                            <div className="section1-2">
                                <p class="section1-2-p">ClearView is incredibly flexible, friendly and easy to work with. Our list of services are widely acknowledged to assure you get the best quality service; Anytime. Anywhere! Pork loin capicola beef, pork tail strip steak pig ribeye cupim ball tip
                                    burgdoggen prosciutto biltong.</p>
                            </div>
                        </div>
                        <div className="section2">
                            <div className="section2-items">
                                <div className="section2-item">
                                    <div className="section2-item-icon">
                                        <div className="section2-item-ico">
                                            <img src="assets/images/hood.png" alt="" />
                                        </div>
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
                                    <div className="section2-item-icon">
                                        <div className="section2-item-ico">
                                            <img src="assets/images/hood.png" alt="" />
                                        </div>
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
                                    <div className="section2-item-icon">
                                        <div className="section2-item-ico">
                                            <img src="assets/images/hood.png" alt="" />
                                        </div>
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
                                    <div className="section2-item-icon">
                                        <div className="section2-item-ico">
                                            <img src="assets/images/hood.png" alt="" />
                                        </div>
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
                <Team ref={refD}>
                    <div className="team-container">
                        <div className="section1">
                            <div className="section1-1">
                                <Title color="#2f3233">
                                    <span>
                                        Our Staff
                                    </span>
                                    <h2> The Team Of Our Best Workers  </h2>
                                    <Divider />
                                </Title>
                            </div>
                        </div>
                        <div className="section2">
                        <OwlCarousel className="owl-theme" {...options}>
                            <div className="slider-item">
                                <div className="slider-item-img">
                                    <img src="assets/images/team/01.jpg" alt="" />
                                </div>
                                <div className="slider-item-txt">
                                    <h4>Leanard Meyer</h4>
                                    <p>Director</p>
                                </div>
                            </div>
                            <div className="slider-item">
                                <div className="slider-item-img">
                                    <img src="assets/images/team/01.jpg" alt="" />
                                </div>
                                <div className="slider-item-txt">
                                    <h4>Leanard Meyer</h4>
                                    <p>Director</p>
                                </div>
                            </div>
                            <div className="slider-item">
                                <div className="slider-item-img">
                                    <img src="assets/images/team/01.jpg" alt="" />
                                </div>
                                <div className="slider-item-txt">
                                    <h4>Leanard Meyer</h4>
                                    <p>Director</p>
                                </div>
                            </div>
                            <div className="slider-item">
                                <div className="slider-item-img">
                                    <img src="assets/images/team/01.jpg" alt="" />
                                </div>
                                <div className="slider-item-txt">
                                    <h4>Leanard Meyer</h4>
                                    <p>Director</p>
                                </div>
                            </div>
                            <div className="slider-item">
                                <div className="slider-item-img">
                                    <img src="assets/images/team/01.jpg" alt="" />
                                </div>
                                <div className="slider-item-txt">
                                    <h4>Leanard Meyer</h4>
                                    <p>Director</p>
                                </div>
                            </div>
                            <div className="slider-item">
                                <div className="slider-item-img">
                                    <img src="assets/images/team/01.jpg" alt="" />
                                </div>
                                <div className="slider-item-txt">
                                    <h4>Leanard Meyer</h4>
                                    <p>Director</p>
                                </div>
                            </div>
                            <div className="slider-item">
                                <div className="slider-item-img">
                                    <img src="assets/images/team/01.jpg" alt="" />
                                </div>
                                <div className="slider-item-txt">
                                    <h4>Leanard Meyer</h4>
                                    <p>Director</p>
                                </div>
                            </div>
                            <div className="slider-item">
                                <div className="slider-item-img">
                                    <img src="assets/images/team/01.jpg" alt="" />
                                </div>
                                <div className="slider-item-txt">
                                    <h4>Leanard Meyer</h4>
                                    <p>Director</p>
                                </div>
                            </div>
                        </OwlCarousel>
                        </div>
                        <div className="section3">
                            <div className="section3-1">
                                <a href="#" className="read-more-btn">Read More</a>
                            </div>
                        </div>
                    </div>
                </Team>
                <GetQuote ref={refE}>
                    <div className="get-quote-container">
                        <div className="section1">
                                <Title color="#fff">
                                    <span>
                                        Contact us 
                                    </span>
                                    <h2>  Get Quote Today   </h2>
                                    <Divider />
                                </Title>
                        </div>
                        <div className="section2">
                            <div className="form">
                                <form>
                                    <div className="input-cont">
                                        <div className="input-25">
                                            <input type="text" name="" placeholder="YOUR FULL NAME" />
                                        </div>  
                                        <div className="input-25">
                                            <input type="text" name="" placeholder="YOUR FULL NUMBER" />
                                        </div>  
                                        <div className="input-25">
                                            <input type="text" name="" placeholder="YOUR EMAIL ADDRESS" />
                                        </div>  
                                        <div className="input-25">
                                            <select>
                                                <option value="-1" data-default="" selected="" disabled="">Best time for service</option>
                                            </select>
                                        </div>  
                                        <div className="input-100">
                                            <textarea rows="4" cols="45" placeholder="YOUR QUESTION"></textarea>
                                        </div>    
                                    </div>
                                    <div className="buttons-cont">
                                        <div className="buttons">
                                            <button type="">Send Now</button>
                                            <a href="#" className="our-contacts">Our contacts</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </GetQuote>
                <Testimonials ref={refF}>
                    <div className="testimonials-container">
                        <div className="section1">
                                <Title color="#2f3233">
                                    <span>
                                        Testimonials
                                    </span>
                                    <h2>What Our Clients Said</h2>
                                    <Divider />
                                </Title>
                                <div className="section2">
                                    <OwlCarousel className="owl-theme" {...options2}>
                                        <div className="slider-item">
                                            <blockquote cite="">
                                                <div className="slider-item-txt">
                                                    <p>«I replace my door glass {'&'} windshield, great price and services. Willing to do mobile service.»</p>
                                                </div>
                                                <div className="slider-item-media">
                                                    <img src="assets/images/team/01.jpg" alt="" />
                                                    <h4>Leila Hart</h4>
                                                    <span className="star-rating">
                                                        <span></span>
                                                    </span>
                                                </div>
                                            </blockquote>
                                        </div>
                                        <div className="slider-item">
                                            <blockquote cite="">
                                                <div className="slider-item-txt">
                                                    <p>«I replace my door glass {'&'} windshield, great price and services. Willing to do mobile service.»</p>
                                                </div>
                                                <div className="slider-item-media">
                                                    <img src="assets/images/team/01.jpg" alt="" />
                                                    <h4>Leila Hart</h4>
                                                    <span className="star-rating">
                                                        <span></span>
                                                    </span>
                                                </div>
                                            </blockquote>
                                        </div>
                                        <div className="slider-item">
                                            <blockquote cite="">
                                                <div className="slider-item-txt">
                                                    <p>«I replace my door glass {'&'} windshield, great price and services. Willing to do mobile service.»</p>
                                                </div>
                                                <div className="slider-item-media">
                                                    <img src="assets/images/team/01.jpg" alt="" />
                                                    <h4>Leila Hart</h4>
                                                    <span className="star-rating">
                                                        <span></span>
                                                    </span>
                                                </div>
                                            </blockquote>
                                        </div>
                                        <div className="slider-item">
                                            <blockquote cite="">
                                                <div className="slider-item-txt">
                                                    <p>«I replace my door glass {'&'} windshield, great price and services. Willing to do mobile service.»</p>
                                                </div>
                                                <div className="slider-item-media">
                                                    <img src="assets/images/team/01.jpg" alt="" />
                                                    <h4>Leila Hart</h4>
                                                    <span className="star-rating">
                                                        <span></span>
                                                    </span>
                                                </div>
                                            </blockquote>
                                        </div>
                                    </OwlCarousel>
                                </div>
                        </div>
                        
                    </div>
                </Testimonials>
                <CallBack ref={refG}>
                    <div className="callback-container">
                        <div className="section1">
                            <div className="section1-1">
                                <div className="section1-1-txt">
                                    <h2>A Call Back</h2>
                                </div>
                            </div>
                            <div className="section1-2">
                                <div className="section1-2-input">
                                    <input type="" name="" placeholder="Your Full Name" />
                                </div>
                                <div className="section1-2-input">
                                    <input type="" name="" placeholder="Your Full Number" />
                                </div>
                                <div className="section1-2-button">
                                    <button type="">Request now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </CallBack>
                <Anvantages>
                    <div className="anvantages-container">
                        <div className="section1">
                            <div className="section1-1">
                                <Title color="#2f3233">
                                        <span>
                                            Our anvantages 
                                        </span>
                                        <h2> What We Can Do For You </h2>
                                        <Divider />
                                </Title>
                                <p>We provide the most proficient auto glass installation and replacement services in the greater San Diego area. ClearView can help you with your car needs, whether it means replacing a windshield or repairing a chip.</p>
                            </div>
                            <div className="section1-2">
                            <VisibilitySensor partialVisibility={true} offset={{top:-600}}>
                                {({ isVisible }) => {
                                        const percentage = isVisible ? 75 : 0;
                                        const percentage2 = isVisible ? 66 : 0;
                                        const percentage3 = isVisible ? 43 : 0;
                                        return (
                                        <>
                                            <div className="section1-1-1">
                                                    <CircularProgressbar
                                                        value={percentage}
                                                        text={`${percentage}%`}
                                                        styles={buildStyles({
                                                            textColor: "#fab915",
                                                            pathColor: "#fab915",
                                                          })}
                                                        strokeWidth={5}
                                                    />
                                                    <div className="section1-1-1-txt">
                                                        <h5>Replacement</h5>
                                                    </div>
                                            </div>
                                            <div className="section1-1-1">
                                                    <CircularProgressbar
                                                        value={percentage2}
                                                        text={`${percentage2}%`}
                                                        styles={buildStyles({
                                                            textColor: "#fab915",
                                                            pathColor: "#fab915",
                                                          })}
                                                        strokeWidth={5}
                                                    />
                                                    <div className="section1-1-1-txt">
                                                        <h5>Glass Tinting</h5>
                                                    </div>
                                            </div>
                                            <div className="section1-1-1">
                                                    <CircularProgressbar
                                                        value={percentage3}
                                                        text={`${percentage3}%`}
                                                        styles={buildStyles({
                                                            textColor: "#fab915",
                                                            pathColor: "#fab915",
                                                          })}
                                                        strokeWidth={5}
                                                    />
                                                    <div className="section1-1-1-txt">
                                                        <h5>Chip Repair</h5>
                                                    </div>
                                            </div>
                                        </>
                                        
                                    );
                                }}
                            </VisibilitySensor>
                            </div>
                        </div>
                    </div>
                </Anvantages>
                </div>
                }
                <Slider>
                    <div className="slider-container">
                        <div className="slider-items">
                            <OwlCarousel className="owl-theme" {...options3}>
                                    <div className="slider-item">
                                        <img src="assets/images/slider/01.png" alt="" />
                                    </div>
                                    <div className="slider-item">
                                        <img src="assets/images/slider/02.png" alt="" />
                                    </div>
                                    <div className="slider-item">
                                        <img src="assets/images/slider/03.png" alt="" />
                                    </div>
                                    <div className="slider-item">
                                        <img src="assets/images/slider/04.png" alt="" />
                                    </div>
                                    <div className="slider-item">
                                        <img src="assets/images/slider/05.png" alt="" />
                                    </div>
                                    <div className="slider-item">
                                        <img src="assets/images/slider/06.png" alt="" />
                                    </div>
                                    <div className="slider-item">
                                        <img src="assets/images/slider/07.png" alt="" />
                                    </div>
                                    <div className="slider-item">
                                        <img src="assets/images/slider/08.png" alt="" />
                                    </div>
                                    <div className="slider-item">
                                        <img src="assets/images/slider/09.png" alt="" />
                                    </div>
                            </OwlCarousel>  
                        </div>
                        
                    </div>
                </Slider>
                <Footer>
                    <div className="footer-container">
                        <div className="footer-container-section1">
                            <div className="footer-container-section1-1">
                                <div className="logo-footer">
                                    <img src="assets/images/logo-bottom.png" alt="" />
                                </div>
                                <p>We provide the most proficient auto glass installation and replacement services in the greater San Diego. area. We can help you.</p>
                                <img src="assets/images/signature.png" alt="" />
                            </div>
                            <div className="footer-container-section1-1">
                                <h4>Get in Touch</h4>
                                <Divider />
                                <div className="footer-container-section1-1-item first">
                                    <div className="footer-container-section1-1-item-ico">
                                        <i className="fa-solid fa-location-dot"></i>
                                    </div>
                                    <div className="footer-container-section1-1-item-txt">
                                        58/3 Kass Drives, Miami, Inc - 845
                                    </div>
                                </div>
                                <div className="footer-container-section1-1-item">
                                    <div className="footer-container-section1-1-item-ico">
                                        <i className="fa-solid fa-phone"></i>
                                    </div>
                                    <div className="footer-container-section1-1-item-txt">
                                    0 (800) 846 4235 (operator)
                                    </div>
                                </div>
                                <div className="footer-container-section1-1-item">
                                    <div className="footer-container-section1-1-item-ico">
                                        <i className="fa-solid fa-pencil"></i>
                                    </div>
                                    <div className="footer-container-section1-1-item-txt">
                                        <a href="#">clearview@example.com</a>
                                    </div>
                                </div>
                                <div className="footer-container-section1-1-item">
                                    <div className="footer-container-section1-1-item-ico">
                                        <i className="far fa-clock"></i>
                                    </div>
                                    <div className="footer-container-section1-1-item-txt">
                                        Working Hours: 24/7
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-container2">
                        <div className="footer-container2-items">
                            <div className="footer-container2-section1">
                                <p>© Copyright 2022. Refaccionaria2. All Rights Reserved.</p>
                            </div>
                            <div className="footer-container2-section2">
                                <div className="footer-icons">
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
                        </div>
                    </div>
                </Footer>
            </div>
        </>
    )
}