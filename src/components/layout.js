import React from "react"
import PropTypes from "prop-types"


import DesktopNavigation from './desktopNavigation';
import "./layout.scss"
import "../index.scss"

const Layout = ({ children }) => {

  return (
    <>
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
