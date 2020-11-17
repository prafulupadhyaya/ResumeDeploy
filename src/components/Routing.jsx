import React, { Component } from 'react'
import Hobby from './Hobby'
import Introduction from './Introduction'
import Projects from './Projects'
import Skills from './Skills'
import { BrowserRouter,Link,Route } from 'react-router-dom';
import ContactPage from './ContactPage'
export default class Routing extends Component {
    render() {
        return (
            <>
            
            <Route exact path="/intro" component={Introduction} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/hobby" component={Hobby} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/" component={Introduction} />
           
            </>
        )
    }
}
