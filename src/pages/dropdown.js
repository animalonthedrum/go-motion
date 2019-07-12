import { Link } from "gatsby"
import React, { Component, useState } from "react"
import ReactDOM from "react-dom"
import Dropdown from "../components/dropdown"


function DesktopNavigation() {
    // const [active, setClass] = useState();
 

    return (
      <header className="header">
        <nav
          style={{
            display: `flex`,
          }}
        >
        <Link to='/' className='brand'>GoMotion</Link>
          <Dropdown
            title="Features"
            pages={[
            <Link to="/classmanagement">Class Management</Link>,
            <Link to="/onlineregistration">Online Registration</Link>,
            <Link to="/financialmanagement">Financial Management</Link>,
            <Link to="/membermanagement">Member Management</Link>,
            <Link to="/websitemanagement">Website Management</Link>,
            <Link to="/mobile">Mobile</Link>
            ]}//end of pages
          />
          <Dropdown
            title="Sports"
            pages={[
            <Link to="/allstarcheer">All Star Cheer</Link>,
            <Link to="/gymnastics">Gymnastics</Link>,
            <Link to="/martialarts">Martial Arts</Link>,
            <Link to="/dance">Dance</Link>
            ]}//end of pages
          />
          <Dropdown
            title="Contact"
            pages={[<Link to="/contact">Contact</Link>]}//end of pages
          />
        </nav>
      </header>
    )
  }

  export default DesktopNavigation;

