import React from "react"
import PropTypes from "prop-types"
import {Helmet} from "react-helmet";


import DesktopNavigation from './desktopNavigation';
import "./layout.scss"
import "../index.scss"

const Layout = ({ children }) => {

  return (
    <>
    <Helmet>
    <link rel="stylesheet" type="text/css" href="https://cloud.typography.com/737218/727688/css/fonts.css" />
    </Helmet>
        <DesktopNavigation/>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, GoMotion
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
