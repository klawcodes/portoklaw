import React from 'react'
import './About.css'
import './About.scss'
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

const About = () => {
  
  Splitting();

  return (
    <div>
      <div className="about">
        <p className="text" data-splitting="">HELLO, MY NAME IS KLAW.<br/> A JUNIOR PROGRAMMER &<br/> DIGITAL ARTIST</p>
          <div className="sub-about">
            <p id="1">based in bekasi _ indonesia <br/> working worldwide</p>
          </div>
      </div>
    </div>
  )
}

export default About
