import React, {useEffect, useState} from 'react';
import NavBar from '../Navbar/NavBar';
import InprogressProps from './InprogressProps';
import CompletedProps from './CompletedProps';
import AxiosWithAuth from "../SignUp/AxiosWithAuth";

export default function MyCourses (){
    const [dataBaseCourse, setDataBaseCourse] = useState(() => null);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await AxiosWithAuth.get('/user/me/', {

                });

                if (response.status === 200 || response.status === 201) {
                    // setUserInfo(response.data.name)
                    // setUserGender(response.data.gender)
                    // setNick(response.data.username)
                    setDataBaseCourse(response.data.course)
                    console.log(response.data.gender)
                }else {
                    console.log('ori e ti gbale')
                }


                // Access the user info from the response data


                // Further processing of the user info
                // ...
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);


    return (
        <>
            <NavBar/>

            <div className="dashcontainer">
                <div className="myProfile margine">
                    My Courses
                </div>
                {dataBaseCourse === "No Course" ? 'No course available' :

                    (
                        <div className="conterr">
                            <InprogressProps
                                CompletedProps
                                imgFirst='https://res.cloudinary.com/do5wu6ikf/image/upload/v1686911910/starpenzu/How-Important-is-UI-UX-Design-in-an-App-Development-Process_4_k6q7yv.svg'
                                headtext='The complete javascript course 2023: build real projects'
                                subtext='In Progress'
                                thirdsegbtn='View Course'
                            />

                            <CompletedProps
                                imgFirst='https://res.cloudinary.com/do5wu6ikf/image/upload/v1686911910/starpenzu/How-Important-is-UI-UX-Design-in-an-App-Development-Process_4_k6q7yv.svg'
                                headtext='The complete javascript course 2023: build real projects'
                                subtext='Completed'
                                thirdsegbtn='View Course'
                            />
                        </div>
                    )

                }



            </div>
        </>
    )
}