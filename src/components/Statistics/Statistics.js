import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Statistics = () => {
    const courseQuizCount = useLoaderData();
    let totals = []
    let names = [];
    let ids =[];
    const allCourseQuizCount = courseQuizCount.data;
    allCourseQuizCount.map(allElement => {
        totals.push(allElement.total);
        names.push(allElement.name);
        ids.push(allElement.id);        
    })
    for(const total of totals){
        console.log(total);
    }

    const data = [
        {
            "name": names[0],
            "total": totals[0],
            "id": ids[0]
        },
        {
            "name": names[1],
            "total": totals[1],
            "id": ids[1]
        },
        {
            "name": names[2],
            "total": totals[2],
            "id": ids[2]
        },
        {
            "name": names[3],
            "total": totals[3],
            "id": ids[3]
        },
    ]
    return (
        <div>
            <h3>This is statistics</h3>
            <BarChart width={730} height={500} data={data}>
                <CartesianGrid strokeDasharray="1 1" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="id" fill="#8884d8" />
                <Bar dataKey="total" fill="#82ca9d" />
            </BarChart>
        </div>
    );
};

export default Statistics;