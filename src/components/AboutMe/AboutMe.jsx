import React, { useState, useRef, useEffect } from 'react'
import './AboutMe.css'
import 'splitting/dist/splitting.css'
import 'splitting/dist/splitting-cells.css'
import Splitting from 'splitting'

const AboutMe = () => {

  const [lines, setLines] = useState([])
  const splitRef = useRef(null)

  useEffect(() => {
    if (splitRef) {
      let split_res = Splitting({
        by: 'chars',
      })
      setLines(split_res[0].chars)
      console.log(`Split text into ${lines} lines`)
    }
  }, [splitRef])
  
  
  return (
    <div className="abotme">
      <div className="left-a">
        <h2 ref={splitRef} data-splitting='true' >ABOUT ME.</h2>
        <p>I know you're confused about what the above means, <br/> so let me introduce myself.<br/><br/> Hello, my name is Muhammad Dimas aka many names.<br/> I am a Junior Programmer and Digital Artist. passionate about <br/>design, music, technology and programming.
          <br/><br/>I like to give a nickname to myself in some hobby examples <br/> of making 3d, design, and music. so the name<br/> you see above is my nickname in some jobs. <br/><br/>
I'm interested in programming since 2020, the first time i started programming was to make a Portfolio Website for my self and now i'm learning something cool. </p>
      </div>
      <div className="right-a">
        <h1>SKILLS.</h1>    
        <div className="skills">
          <div className="coding">
            <h2>PROGRAMMING</h2>
            <div className="skill-main">
              <div className="skill-bar">
                <div className="info">
                  <p>HTML</p>
                  <p>80%</p>
                </div>
                <div className="bar">
                  <span className="html"></span>
                </div>
              </div>
              <div className="skill-bar">
                <div className="info">
                  <p>CSS</p>
                  <p>80%</p>
                </div>
                <div className="bar">
                  <span className="css"></span>
                </div>
              </div>
              <div className="skill-bar">
                <div className="info">
                  <p>JAVASCRIPT</p>
                  <p>50%</p>
                </div>
                <div className="bar">
                  <span className="js"></span>
                </div>
              </div>
              <div className="skill-bar">
                <div className="info">
                  <p>REACT JS</p>
                  <p>40%</p>
                </div>
                <div className="bar">
                  <span className="react"></span>
                </div>
              </div>
              <div className="skill-bar">
                <div className="info">
                  <p>PYTHON</p>
                  <p>30%</p>
                </div>
                <div className="bar">
                  <span className="python"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="design">
            <h2>DESIGN</h2>
            <div className="skill-main">
              <div className="skill-bar">
                <div className="info">
                  <p>ADOBE PHOTOSHOP</p>
                  <p>90%</p>
                </div>
                <div className="bar">
                  <span className="ps"></span>
                </div>
              </div>
               <div className="skill-bar">
                <div className="info">
                  <p>ADOBE AFTER EFFECT</p>
                  <p>90%</p>
                </div>
                <div className="bar">
                  <span className="ae"></span>
                </div>
              </div>
               <div className="skill-bar">
                <div className="info">
                  <p>BLENDER</p>
                  <p>80%</p>
                </div>
                <div className="bar">
                  <span className="blender"></span>
                </div>
              </div>
               <div className="skill-bar">
                <div className="info">
                  <p>ADOBE ILLUSTRATOR</p>
                  <p>70%</p>
                </div>
                <div className="bar">
                  <span className="ai"></span>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
