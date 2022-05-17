import './App.css';
import profile from "./profile.png";
import billboard from "./billboard.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBell, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import "@fontsource/bebas-neue";

function App() {
  return (
    <div className="container">
      
      <div className="navbar">
        <div className='navbar-container'>
          <div className="navbar-firsts-elements">
            <div className="logo">
              Necflis
            </div>
              
            <div className="nav-text-element">Inicio</div>
            <div className="nav-text-element">Series</div>
            <div className="nav-text-element">Películas</div>
            <div className="nav-text-element">Novedades Populares</div>
            <div className="nav-text-element">Mi lista</div>
            

          </div>
          <div className='navbar-end-elements'>
            <div className="nav-element">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <div className="nav-text-element"> Niños </div>
            <div className="nav-element">
              <FontAwesomeIcon icon={faBell} />            
            </div>
            <div className="nav-element">
              <img src={profile} alt="" />
              <span className='caret-down'><FontAwesomeIcon icon={faCaretDown} /></span>
            </div>
            <div className="nav-element">
            </div>
          </div>
        </div>
      </div>

      <div className='main-view'>
        <img className='billboard-img' src={billboard} alt="" />

      </div>
      
    </div>
  );
}

export default App;
