import React, { useState } from 'react'
import './FirstPage.css'
import { Link } from 'react-scroll'

const FirstPage = () => {
  return (
    <div className="header">
      <h2 className="logo">klaw.</h2>
      <ul className="header-menu">
        <li className="h">HOME</li>
        <li className="a">ABOUT</li>
        <li className="w">WORKS</li>
        <li className="c">CONTACT</li>
      </ul>
    </div>
  )
}

export default FirstPage
