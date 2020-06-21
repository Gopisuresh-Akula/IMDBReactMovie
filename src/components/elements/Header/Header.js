import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
 <div>
< nav className = "navbar fixed navbar-dark bg-primary" >
            <div className="container">
                <em>Movie App</em>
   <Link to="/">
        <img className="rmdb-logo" src="/images/reactMovie_logo.png" alt="rmdb-logo" /> 
    </Link>
      <img className="rmdb-tmdb-logo" src="/images/tmdb_logo.png" alt="tmdb-logo" />
   </div>
    </nav>
    



</div>


      












     
)

export default Header;