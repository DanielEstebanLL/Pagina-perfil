import React from 'react';
import profile from '../../components/estilos/profile.module.css';


function Profile() {
    return (
        <div>
            <div className={profile.container1}>
                <div className={profile.container_title}>
                    <h1 className={profile.title_p}> Abuot me </h1>
                    <h3 className={profile.title3}>
                        Abogado y Desarrolador full stack en fomacion, con muchas ganas de apender
                        <br />
                        todo acerca de la programacion para mejorara mi calidad de vida.
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default Profile;