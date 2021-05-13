import React from 'react'
import About from './components/About'
import Courses from './components/Courses'
import Menu from './components/Menu'
import Home from './components/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function Header() {
    return (

        <>
            <BrowserRouter>
                    <Menu />
                    <Switch>
                        <Route path="/home" exact component={Home} />
                        <Route path="/courses" exact component={Courses} />
                        <Route path="/about" exact component={About} />
                    </Switch>
                </BrowserRouter>

            <h1 className="display-4 header">ReactJS CRUD Boilerplate</h1>
            <p className="lead paras">with mock backend</p>
        </>

    )
}

export default Header
