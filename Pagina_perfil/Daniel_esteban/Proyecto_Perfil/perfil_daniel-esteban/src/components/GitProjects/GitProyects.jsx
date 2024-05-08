
import React, { useState, useEffect } from 'react';
import styles from '../estilos/experience.module.css';


const GitProyects = () => {
    const  [repos, setRepos] = useState([]);
    
  useEffect(() => {
    fetch('https://api.github.com/users/danielestebanll/repos')
      .then(response => response.json())
      .then(data => setRepos(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  const experienceIter = repos.map((repo, index) => {
    return (
      <div className={styles.About} key={index}>
        <h1 className={styles.title}>Repositorios de: {repo.owner.login}</h1>
        <div className={styles.profileAbout}>
          <div className={styles.col}>
            <div className={styles.date}>Fecha de Creación: {repo.created_at}</div>
            <div className={styles.date}>Fecha de Actualización: {repo.updated_at}</div>
          </div>
          <div className={styles.job}>
            <div className={styles.title2}>{repo.name}</div>
            <div className={styles.order}>Descripción: {repo.description}</div>
            <div className={styles.order}>Lenguaje: {repo.language}</div>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">Ver más</a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      {experienceIter}
    </div>
  );
}

export default GitProyects;