import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import MockRest from './components/MockREST';
import NewMenu from './components/NewMenu';
import UnitTesting from './components/UnitTesting';
import ES2015 from './components/ES2015';
import Others from './components/Others';

function Footer() {
    return (
        <>
            <h2 class="display-4 text-center py-5 my-4">Features</h2>
            <BrowserRouter>
                <NewMenu />
                <Switch>
                    <Route path="/mockrest" exact component={MockRest} />
                    <Route path="/UnitTesting" exact component={UnitTesting} />
                    <Route path="/ES2015" exact component={ES2015} />
                    <Route path="/others" exact component={Others} />

                </Switch>
            </BrowserRouter>
        </>
    )
}

export default Footer
