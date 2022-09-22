import React, { useState, useRef, useEffect } from 'react'
import './About.css'
import './About.scss'
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import AOS from 'aos';
import "aos/dist/aos.css";


const About = () => {
  
  const [lines, setLines] = useState([])
  const splitRef = useRef(null)

  useEffect(() => {
    if (splitRef) {
      let split_res = Splitting({
        by: 'chars',
      })
      setLines(split_res[0].chars)
      console.log(`Split text into ${lines} chars`)
    }
  }, [splitRef])

  useEffect(() =>{
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div id="home">
      <div className="about">
        <p className="text bf" ref={splitRef} data-splitting='true'>HELLO, MY NAME IS KLAW.<br/> A JUNIOR PROGRAMMER &<br/> DIGITAL ARTIST</p>
          <div className="sub-about" data-aos="fade-up" data-aos-delay="3000" data-aos-duration="1000">
            <p id="1">based in bekasi _ indonesia <br/> working worldwide</p>
          </div>
      </div>
    </div>
  )
}

export default About
