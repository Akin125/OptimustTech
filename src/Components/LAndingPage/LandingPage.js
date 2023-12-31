import React, { useRef } from 'react';
import NavBar from '../Navbar/NavBar';
import Footer from '../Footer/Footer';
import './LandingPage.css'
import { Link } from  'react-router-dom'
import AxiosWithAuth from "../SignUp/AxiosWithAuth";

export default function LandingPage(){
    const waitListRef = useRef(null);

    const [waitList, setWaitList] = React.useState(() => '')
    const [show, setShow] = React.useState(() => '')
    const [show1, setShow1] = React.useState(() => '')
    const [changeBtn, setChangeBtn] = React.useState(() => false)

    const email = waitList;
    localStorage.setItem('waitlist_user', email)

    const clearInput = () => {
        setWaitList('');
    };


    const handleSubmitClick = async (event) => {
        event.preventDefault();


        try {
            const response = await AxiosWithAuth.post("/user/subscribe-email/", {
                email
            });

            if (response.status === 200 || response.status === 201) {
                //const token = response.data.token;

                console.log("All good, user subscribed");
                setShow1('Subscription Successful')
                setShow('')
                // Navigate to the home page after successful login
                // navigate("/
                clearInput();
                setChangeBtn(true)
                // window.location.reload();
                //console.log(localStorage.getItem("token"))
            } else {
                // setErrorMessage("Invalid credentials. Please try again.");

            }
        }
        catch (error) {
            setShow('Subscription Unsuccessful')
            setShow1('')
            //setErrorMessage("Invalid credentials. Please try again.");
            console.log(error);
        }
    };

    const handleScrollClick = () => {
        waitListRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return(
        <>
            <NavBar/>
            <div className="landPageContainer">
                <div className="hero-section">
                    <div className="hero-text">
                        Are you searching for a reputable
                        Academy to learn & master
                        essential tech skills ?
                    </div>

                    <div className="hero--subtext">
                        Or perhaps you yearn to elevate your expertise, make waves
                        in your tech career and sieze life changing opputunities?
                    </div>

                   <Link to='/' className='link-d'> <div className="makepayment hero-btn">
                        Get Started
                    </div></Link>

                </div>

                <div className="first-section">
                    <div className="first-section-text">
                        <p className='ohh'>In today's digital age, possessing tech
                            skills is not only lucrative but also essential.
                            Companies, institutions, and organizations
                            have a high demand for individuals proficient
                            in tech. The world is increasingly influenced by
                            technology, with countless possibilities yet to be
                            explored. Research has revealed that the top 20
                            highest-paid skills are all tech-related. Imagine
                            earning a seven-figure income, in dollars or
                            pounds, by embarking on a journey to learn a
                            tech skill.</p>
                    </div>
                    
                    <div className="first-section-img">
                        <img className='sec1-img' src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1687553252/starpenzu/mobile_illust_ti8e38.svg" alt=""/>
                    </div>
                </div>

                <div className="second-section" ref={waitListRef}>
                    <div className="second-section-text">
                        At OptimustTech Academy, we are dedicated to helping you realize
                        your aspirations by providing extensive training that will transform
                        you into a knowledgeable and skilled tech expert.
                    </div>

                    <div className="fourthSection">
                        <div className="randomContainer">
                            <div className="fourthText">
                                Join The Waiting List
                            </div>

                            <div className="fourthSubtext">
                                Get Personal Learning Recommendations.
                            </div>

                            <form onSubmit={handleSubmitClick}>
                                <input type="email" placeholder={'Enter your mail...'} value={waitList} onChange={(e) => setWaitList(e.target.value)}/>
                                <button> {changeBtn ? 'Joined' : 'Join'}</button>
                            </form>



                        </div>

                        <div className="validationsec">
                            {show && (<div className="valid ssaa">{show}</div>)}
                            {show1 && (<div className="valid ssaa">{show1}</div>)}
                        </div>

                    </div>

                    {/*<div className="sec-section-btn">*/}
                    {/*   */}
                    {/*</div>*/}
                </div>

                <div className="third-section">
                    <div className=" testi">
                        Who are We?
                    </div>

                    <div className="third-section-subtext">
                        We are an academy committed to nurturing star players in the tech industry.
                        We firmly believe that every individual possesses the potential to grow, evolve, and
                        become a star player in their chosen field. Our mission is to transform your
                        skill set, turning you into a star player through rigorous challenges, expert training,
                        engaging projects,  and collaborative team initiatives. At Starpenzu Tech Academy,
                        we strive to create changemakers who will leave a lasting impact on the world
                        through tech. You too can be a part of this community of
                        empowered individuals.
                    </div>

                    <div className=" testi">
                        What do i gain?
                    </div>

                    <div className="third-section-subtext">
                        <li>Expert Training with professionals in the field.</li>
                        <li>Live Session with mentors.</li>
                        <li>Projects to help our students grow their creativity and proficiency with their tech skills..</li>
                        <li>Team collaboration to enhance teamwork and collective initiative.</li>
                        <li>Certificate after completion to launch our students into the tech world.</li>
                    </div>
                </div>

                <div className="thirdSection landingpage">
                    <div className="testi">Testimonials</div>
                    <div className="testiSub">
                        What Our Student Are Saying About Us.
                    </div>

                    <div className="peeps">
                        <div className="peeps1 co1">
                            {/*<img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1688763915/starpenzu/Mask_group_dv9wlp.svg" alt=""/>*/}
                            <div className="name">John Doe</div>
                            <div className="notes">
                                I would recommend OptimustTech Academy
                                to any aspiring tech expert looking forward to upskilling
                                themselves into an elite level.
                                The tutors offer a practical oriented teaching system,
                                they are very patient and  they pay attention to little details to
                                ensure that students learn effectively and implement efficiently.
                                The training was really impactful in my journey from a
                                tech enthusiast to a professional.
                            </div>
                        </div>

                        <div className="peeps1 co2">
                            {/*<img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1688763912/starpenzu/IMG-20230626-WA0006_1_ifxyem.svg" alt=""/>*/}
                            <div className="name">John Doe</div>
                            <div className="notes">
                                OptimustTech Academy has been very beneficial in
                                helping me carve my resume. The Management team did a great job
                                of following up on their student and ensuring they get the
                                complete tech training experience.
                                They ensured that we kept being productive by giving us
                                assignments to practice all we’ve learnt. They also sent videos
                                and messages to my mail to help me in my training process.
                                This Academy will be one of the biggest
                                training platforms in year’s to come, keep up the good work guys.
                            </div>

                        </div>

                        <div className="peeps1 co3">
                            {/*<img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1688763910/starpenzu/Mask_group_1_uvcg46.svg" alt=""/>*/}

                            <div className="name">John Doe</div>
                            <div className="notes">
                                Firstly, I want to show my appreciation to OptimustTech Academy
                                for the oppurtunity they have given me to learn more about data
                                analysis, I joined at a time when I had no knowledge on
                                what data analysis entails.
                                Secondly, the teachings process was flexible and in 3 weeks
                                I had acquired te essential knowledge needed to become a
                                top analyst and all of this would not be possible if not for Starpenzu
                                Tech Academy.
                            </div>
                        </div>

                </div>

                </div>



            </div>
            <Footer/>
        </>
    )
}