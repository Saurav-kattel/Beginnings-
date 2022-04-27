import React from 'react'
import { Link } from "react-router-dom"
export default function Navbar(props){
  return (
    <>
<nav className={`navbar navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">text-utils</Link>
     <Link className="navbar-brand" to="/home">Home us</Link>
     <Link className="navbar-brand" to="/about">about us</Link>
     <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
  <label className={`form-check-label text-${props.mode==="light"?"dark":"light"}`}htmlFor="flexSwitchCheckDefault">Enable {props.mode==="light"?"dark":"light"} mode</label>
</div>
    <form className="d-flex">
      <input className="form-control me-2" type="search"  placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
    </>
    )
}