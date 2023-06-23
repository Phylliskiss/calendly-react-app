/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>

<nav>

{/* <div className="links">
  <Link className="link" to={"/"}> Index</Link>
  <Link className="link"to={"/individuals"}> Individuals</Link>
  <Link className="link"to={"teams"}>Teams</Link>
  <Link className="link"to={"/enterprise"}> Enterprise</Link>
</div> */}
</nav>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
              <Link className="navbar-brand" to="/"><img src="images/Calendly-Logo.png" className="img-fluid logo" height="170px" width="130px"/></Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse mx-auto" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/individuals">Individuals</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/teams">Teams </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/enterprise">Enterprise</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    </div>
  )
}

export default Navbar