import React from 'react';
import {NavLink} from 'react-router-dom'
import './index.css';

const Navbar = () =>{
    return(
    <>
        <div className="nav_bg navbar_style">
            <div className="row">
              <div className="col-12 mx-auto">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <h4>Assignment</h4>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                        <NavLink className="nav-link active" to="/">Home</NavLink>
                        </li>
                        
                    </ul>    
                    </div>
                </nav>
            </div>
        </div>
    </div> 
</>

    );
}

export default Navbar;