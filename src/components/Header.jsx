import React, { Component } from 'react';
import { BrowserRouter,Link,Route } from 'react-router-dom';
import ContactPage from './ContactPage';
class Header extends Component {
    render() {
        return (
            
            <div className="header">
                <a className="logo">RESUME</a>
               
                <div className="header-right">
                    <Link to= "intro">Introduction</Link>
                    <Link to= "skills">Skills</Link>
                    <Link to= "projects">Projects</Link>
                    {/* <Link to= "hobby">Hobby</Link> */}
                    <Link to= "contact">Contact</Link>
           
                </div>
                
            </div>
            
        )
    }
}
export default Header;