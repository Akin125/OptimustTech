import React, {useEffect, useRef} from 'react'
import  { Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom";

export default function Footer(){

    const navigate = useNavigate();


    function handleLogout(){
        localStorage.clear();
        // window.location.reload();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate('/Login')
    }




        const scrollToTop = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };






        return (
            <footer>
                {/*<div className='widthAdjust'>*/}
                <div className="leftSeg">
                    <div className="companySeg">
                        <h1 className='companyHead'>Company</h1>
                        <ul>
                            <Link to='/aboutuspage' onClick={scrollToTop} className='link-d ffs'>
                                <li>About Us</li>
                            </Link>

                                <a className='link-d ffs'
                                   href="">
                                    <li>Contact Us</li>
                                </a>

                            <Link to='/helpSupportpage' onClick={scrollToTop} className='link-d ffs'>
                                <li>Help and Support</li>
                            </Link>


                                <Link to='/privacypage' onClick={scrollToTop} className='link-d ffs'>
                                    <li>Privacy Policy</li>
                                </Link>
                            <Link to='/tncpage' onClick={scrollToTop} className='link-d ffs'>
                                <li>Terms and Condition</li>
                            </Link>
                        </ul>

                    </div>

                    <div className="socialSeg">
                        <h1 className='socialHead'>Social Media</h1>

                        <ul>
                            <a className='link-d ffs'
                               href="">
                                <li>Instagram</li>
                            </a>
                            <a className='link-d ffs' href="">
                                <li>Facebook</li>
                            </a>
                            <a className='link-d ffs' href="">
                                <li>Linkedin</li>
                            </a>
                            <li>Email</li>
                        </ul>

                    </div>

                    <Link to='/' className='link-d ffs'>
                        <div className="footerBrand">

                            <div className="footerlgText">
                                OptimustTechAcademy
                            </div>

                        </div>
                    </Link>


                </div>

                <div className="middleSeg">
                    <h1 className='offersHead'>Offers</h1>
                    <ul>
                        <li>Portfolio Review</li>
                        <li>CV Template</li>
                        <li>Interview Prep</li>
                        <li className='lineHeight'>Cover Letter Template</li>
                        <li>Expert Training</li>
                        <li className='lineHeight'>Certificates After Completion</li>
                        <li>Mentors Live Session</li>
                    </ul>
                </div>

                <div className="rightSeg">
                    <h1 className='menuHead'>Menu</h1>
                    <ul>
                        <Link className='link-d ffs' onClick={scrollToTop} to="/">
                            <li >Course</li>
                        </Link>
                        <Link onClick={scrollToTop} to='/dashboard' className='link-d ffs'>
                            <li> Dashboard</li>
                        </Link>
                        <Link onClick={scrollToTop} to='/' className='link-d ffs'>
                            <li> Support</li>
                        </Link>
                        <li>FAQ</li>
                        <Link onClick={scrollToTop} to='/signup' className='link-d ffs'>
                            <li>Register</li>
                        </Link>

                    </ul>
                </div>

                <div className="socialSeg2">
                    <h1 className='socialHead'>Social Media</h1>

                    <ul>
                        <a className='link-d ffs'
                           href="">
                            <li>Instagram</li>
                        </a>
                        <a className='link-d ffs' href="">
                            <li>Facebook</li>
                        </a>
                        <a className='link-d ffs' href="">
                            <li>Linkedin</li>
                        </a>
                        <li>Email</li>
                    </ul>

                </div>
                {/*</div>*/}

                <div className="fixfooter">

                </div>
            </footer>
        )
    }