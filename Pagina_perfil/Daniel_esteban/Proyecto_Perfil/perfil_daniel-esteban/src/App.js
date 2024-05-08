import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NotFound from './components/pages/notfoud';
import Experience from './components/experience/index.jsx';
import App from './components/pages/inicio';
import './App.css';
import './components/estilos/experience.module.css'
import GitProyects from './components/GitProjects/GitProyects.jsx';
import { ReposProvider } from './components/context/repo.js';


const Work = () => {
  return (
    <ReposProvider>
      <Router>
        <div className="fondo">
          <nav>
            <ul>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/experience">Acerca de</Link>
              </li>
              <li>
                <Link to="/GitProyects">GitProjects</Link>
              </li>
              <li>
                <Link to="/NotFound">NotFound</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/GitProyects" element={<GitProyects />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </ReposProvider>
  );
};
export default Work