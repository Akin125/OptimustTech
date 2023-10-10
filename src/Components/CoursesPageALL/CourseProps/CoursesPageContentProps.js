import React from 'react';
import { Link } from 'react-router-dom';
export default function CoursesPageContentProps({ courses }) {
    const [openAccordions, setOpenAccordions] = React.useState([]);

    function handleAccordion(index) {
        setOpenAccordions((prevAccordions) => {
            if (prevAccordions.includes(index)) {
                return prevAccordions.filter((accordion) => accordion !== index);
            } else {
                return [...prevAccordions, index];
            }
        });
    }

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };


    return (
        <>
            {courses.map((course, index) => (
                <div className={openAccordions.includes(index) ? 'xxxx' : 'jjj'} >
                    <div className={openAccordions.includes(index) ? 'ssss' : 'CoursesPageContent' } onClick={() => handleAccordion(index)} key={index}>
                        <div className="CoursesPageContenttext" >
                            {course.title}
                        </div>
                        <img className="force icall" id={openAccordions.includes(index) ? 'makewhite' : ''} src={openAccordions.includes(index) ? course.img2 : course.img} alt="" onClick={() => handleAccordion()} />
                    </div>

                    {openAccordions.includes(index) && (
                        <div className="accordionContents">
                            {course.stages.map((stage, stageIndex) => (
                                <Link className='dddddddddd'
                                    to={`/video/${course.videoIds[stageIndex]}/${course.title}`}
                                    key={stageIndex}>
                                <div className="accordionContentsLists dddddddddd" onClick={scrollToTop}  key={stageIndex}>
                                    <div className='makeFlex'>
                                        <img id='mag' src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1686285838/starpenzu/youtube_od2mnk.svg" alt=""/>
                                        {stage}
                                    </div>
                                    {course.locked && <img  className='icall' src={course.imgLock} alt="" />}
                                </div>
                                </Link>

                            ))}
                        </div>
                    )}
                </div>
            ))}
        </>
    );
}
