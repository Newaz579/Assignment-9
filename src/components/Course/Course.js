import React from 'react';
import { Link } from 'react-router-dom';
import './Course.css'

const Course = ({ course }) => {
    const { id, name, logo, total } = course;
    return (
        <div className='course-container'>
            <img src={logo} alt="" />
            <div className='course-details'>
                <h2>{name}</h2>
                <p>Total: {total}</p>
            </div>
            <button className='practice-button'><Link className='practice' to={`/quiz/${id}`}>Starts Practice</Link></button>
        </div>
    );
};

export default Course;