import React, { Component } from 'react';
import './../style/Header.css';
import a from './../image/logo.png';
import { Link } from 'react-router-dom';
import Zoom  from 'react-reveal/Zoom';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <nav className="navbar navbar-inverse" style={{background:"transparent"}}>
                    <div className="nav-item dropdown navbar-left">
                        <a href="x" className="btn2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-bars" style={{fontSize:30}} ></i>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a className="dropdown-item"><Link to ="/About/daus"   >About</Link></a>
                            <a className="dropdown-item"><Link to ="/Contact/daus" >Contact</Link></a>
                            <a className="dropdown-item"><Link to ="/Database/daus">Admin</Link></a>
                        </div>
                    </div>
                    <div className="navbar-header navbar-right">
                        <Zoom left cascade>
                        <Link to="/Front" className="navbar-brand" style={{color:'white'}}>JN-Bojonegara
                        </Link>
                        </Zoom>
                    </div>
                </nav>
            </div> 
        );
    }
}

export default Header ;