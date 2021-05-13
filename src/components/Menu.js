import React from 'react'
import { Link } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
function Menu() {
    return (
        <div>
          <nav className = "  navbar justify-content-center nav-pills flex-column flex-md-row">
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/courses">Courses</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>

            </nav>
        </div>
    )
}

export default Menu
