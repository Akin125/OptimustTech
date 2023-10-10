import React from 'react';
import CoursesPageHeaderProps from '../CourseProps/CoursesPageHeaderProps';
import CoursesPageBodyProps from '../CourseProps/CoursesPageBodyProps';
import '../CoursesPageALL.css';
import NavBar from '../../Navbar/NavBar';
import CoursesPageContent from '../CourseProps/CoursesPageContentProps';
import Footer from '../../Footer/Footer';
import accordionData from './accordionData';



export default function CoursesPageDjango(){
    return(
        <>
                    <NavBar/>
                <div className='forceMiddle2'>
                    <div className="CoursesPageContainer">
                        <CoursesPageHeaderProps
                            CoursesPagetitle='Backend Web Development (Python & Django)'
                            CoursesPageimgClass='CoursesPageimg'
                        />
                        <CoursesPageBodyProps
                            //CoursesPagetext
                                    CoursesPagetext=' Are you ready to embark on a journey into the world of web development with Django? Look no further! Our Django course is designed to equip you with the knowledge and skills you need to become a proficient Django developer. Whether youre a beginner or an experienced developer looking to expand your toolkit, this course has something for everyone.'


                                    //CoursesPagelist1
                                    one='Introduction to python'
                                    two='Introduction to Django'
                                    three='Building Your First Django App'
                                    four='Working with Databases'
                                    five='Building User Authentication'
                                    six='Creating RESTful APIs'
                                    seven='Frontend Development with Django'
                                    eight='Testing and Deployment'
                                    nine=' Advanced Django Topics'
                                    ten='Real-World Projects'
                                    ele='Career and Freelancing'
                                    

                                    //CoursesPagelist2
                                    fourt='Internet Connectivity'
                                    fivt='At Least a 8GB RAM Laptop'
                                    sixt='A Pen and Jotter for Note Taking'
                                    sevent='Your Concentration'

                                    coursedata={accordionData}


                        />
                    </div>

                    <Footer/>
                </div>
        </>
    )
}