import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <footer>
            <div className="container">
                          <h5>Copyright &copy; 2021 <Link to="/">storecity</Link> . All rights reserved</h5>
            </div>
        </footer>
    )
}

export default Footer
