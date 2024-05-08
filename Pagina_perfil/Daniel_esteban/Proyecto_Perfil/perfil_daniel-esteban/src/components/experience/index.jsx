import { Link } from 'react-router-dom';
import React from 'react';
import experience from '../../components/estilos/experience.module.css';

function Experience() {
    const exp= [
        {
            date: "Junary 2022 - December 2022",
            title: "Lawyer",
            description: "Legal adviser",
            languages: "N/A",
        },
        {
            date: "Decermber 2022 - July 2023",
            title: "Lawyer",
            description: "Legal adviser",
            languages: "Native spanish",
        },
    ]
    return (
        <div className={experience.fondo}>
            <div className={experience.title_exp}>
                <h2>Work Experience</h2>
            </div>
            {exp.map((info) => (
                <div className={experience.container}>
                    <p>Date: {info.date}</p>
                    <p>Title: {info.title}</p>
                    <p>Description: {info.description}</p>
                    <p>Languages: {info.languages}</p>
                </div>
            ))}

            <div>
            <Link to="/"> Volver al inicio </Link>
            </div>


        </div>
    )
}

export default Experience;