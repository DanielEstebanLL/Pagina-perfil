import React from 'react';
import description from '../../components/estilos/description.module.css';
import pick from '../images/pick.jpg';

function Description() {
    return (
        <div>
            <div className={description.container1}>
                <div className={description.container_photo}>
                    <img className={description.photo} src={pick} alt="imagen" />
                </div>
                <div className={description.container_text}>
                    <h1 className={description.title}> Daniel Esteban Lopez Lopera </h1>
                    <h3 className={description.complement}> Desarrollador fullstack y Abogado </h3>
                </div>
            </div>
        </div>
    );
}

export default Description;