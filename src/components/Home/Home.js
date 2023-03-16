import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import './Home.css';
import mernImage from './mern.jpg'

const Home = () => {
    const courses = useLoaderData();
    const getCourses = courses.data;
    return (
        <div className='main-home'>
            <div className='display-home'>
                <img src={mernImage} alt="" />
                <div>
                    <h3>What is the MERN stack?</h3>
                    <p><strong>
                        MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack.
                        MongoDB — document database
                        Express(.js) — Node.js web framework
                        React(.js) — a client-side JavaScript framework
                        Node(.js) — the premier JavaScript web server
                    </strong></p>
                </div>
            </div>
            <div className='home-div'>
                {
                    getCourses.map(course => <Course
                        key={course.id}
                        course={course}
                    ></Course>)
                }
            </div>
        </div>
    );
};

export default Home;