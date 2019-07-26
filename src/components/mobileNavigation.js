import { Link } from "gatsby"
import React, { Component, Fragment } from 'react';
import Dropdown from "./dropdown"


export default class MobileNavigation extends Component {
    state = {
        show: false,
      };
      onClick = () => {
        document.body.classList.toggle('mobile-nav-open');
        this.setState({
          show: !this.state.show,
        });
      }
  render() {
    return (
        <Fragment>
          <button className="mobile-menu-toggle-button" onClick={this.onClick}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        {/* <div className="mobile-nav"> */}
          {this.state.show ? [
            <div className="mobile-menu">
              <ul className='mobile-menu-items'>
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
            pages={[<Link to="/contact">Contact Form</Link>]}//end of pages
          />
            {/* <li><a className="button" href="https://www.outdoorsy.com/rv-rental/minneapolis_mn/1945_custom_teardrop-camper_112723-listing" alt="Book Now" onClick={this.onClick}>Book Now</a></li> */}
              </ul>
            </div>,
          ] : null}
        {/* </div> */}
      </Fragment>
    )
  }
}