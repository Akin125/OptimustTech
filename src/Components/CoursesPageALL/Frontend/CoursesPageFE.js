import React from 'react';
import CoursesPageHeaderProps from '../CourseProps/CoursesPageHeaderProps';
import CoursesPageBodyProps from '../CourseProps/CoursesPageBodyProps';
import '../CoursesPageALL.css';
import NavBar from '../../Navbar/NavBar';
import CoursesPageContent from '../CourseProps/CoursesPageContentProps';
import Footer from '../../Footer/Footer';
import accordionData from './accordionData';



export default function CoursesPageFE(){
    return(
        <>
            <NavBar/>

        <div className='forceMiddle2'>


            <div className="CoursesPageContainer">
                <CoursesPageHeaderProps
                    CoursesPagetitle='Frontend Web Development (HTML, CSS & Javascript)'
                    CoursesPageimgClass='CoursesPageimgFE ggggdFE'
                />
                <CoursesPageBodyProps
                    //CoursesPagetext
                    CoursesPagetext=' Are you ready to dive into the exciting world of frontend web development? Our comprehensive frontend development course is designed to equip you with the skills and knowledge you need to become a proficient frontend developer. Whether youre a beginner looking to start your web development journey or an experienced developer aiming to enhance your frontend skills, this course has something for everyone.'


                    //CoursesPagelist1
                    one='Introduction to Frontend Development'
                    two='HTML - Building the Structure'
                    three='CSS - Styling Your Web Pages'
                    four='Responsive Web Design'
                    five='JavaScript - Adding Interactivity'
                    six='JavaScript - Advanced Concepts'
                    seven='Version Control with Git'
                    eight='Designing with Figma'
                    nine='Frontend Build Tools'
                    ten='Building Style Guides & Design Systems'
                    ele='Understanding Responsive Designs'
                    twel='Frontend Frameworks'
                    thirt='Web Accessibility and SEO'

                    //CoursesPagelist2
                    fourt='Internet Connectivity'
                    fivt='At Least a 4GB RAM Laptop'
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