import React from 'react'
import { Link } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
function NewMenu() {
    return (
        <div>
              <nav className = "  nav justify-content-center nav-pills flex-column flex-md-row">
                <ul>
                    <li><Link to ="/mockrest">MockREST</Link></li>
                    <li><Link to ="/UnitTesting">Unit Testing</Link></li>
                    <li><Link to ="/ES2015">ES2015</Link></li>
                    <li><Link to ="/others">Others</Link></li>
                  
                </ul>

            </nav>
        </div>
    )
}

export default NewMenu
