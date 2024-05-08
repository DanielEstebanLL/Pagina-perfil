import React, { createContext, useContext, useState, useEffect } from 'react';


const ReposContext = createContext();


export const ReposProvider = ({ children }) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/danielestebanll/repos')
      .then(response => response.json())
      .then(data => setRepos(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <ReposContext.Provider value={repos}>
      {children}
    </ReposContext.Provider>
  );
};


export const useRepos = () => useContext(ReposContext);