import { Link } from 'react-router-dom';
import React from 'react';
import styles from '../../estilos/experience.module.css';

const NotFound = () => {
    return (
        <div>
            <h1> Opps!! Page Not Found !! </h1>
            <div className={styles.container} >
                <Link to="/" >Inicio</Link>
            </div>
        </div>
    )

}

export default NotFound