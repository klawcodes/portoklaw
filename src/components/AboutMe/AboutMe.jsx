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
    <div className="abotme" id="about">
      <div className="left-a">
        <h2 ref={splitRef} data-splitting='true' >ABOUT ME.</h2>
        <p>I know you're confused about what the above means, <br/> so let me introduce myself.<br/><br/> Hello, my name is Muhammad Dimas, known by many names.<br/> I am a Junior Programmer and Digital Artist. passionate about <br/>design, music, technology and programming.
          <br/><br/>I like to give a nickname to myself in some hobby examples <br/> of making 3d, design, and music. so the name<br/> you see above is my nickname in some jobs. <br/><br/>
I'm interested in programming since 2020, the first time i started programming was to make a Portfolio Website for my self and now i'm learning something cool. </p>
      </div>
      <div className="right-a">
        <h1>SKILLS.</h1>    
        <div className="skills">
          <div className="coding">
            <h2>PROGRAMMING LANGUAGES & TOOLS</h2>
            <div className="skill-main">
              <div className="skill-bar">
                <div className="info">
                  {/*<p>HTML</p>
                <p>80%</p>*/}
                  <img className="prologo" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg'/>
                </div>
                {/*<div className="bar">
                  <span className="html"></span>
              </div>*/}
              </div>
              <div className="skill-bar">
                <div className="info">
                  {/*<p>CSS</p>
                <p>80%</p>*/}
                  <img className="prologo" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg'/>
                </div>
                {/*<div className="bar">
                  <span className="css"></span>
              </div>*/}
              </div>
              <div className="skill-bar">
                <div className="info">
                  {/*<p>JAVASCRIPT</p>
                <p>50%</p>*/}
                  <img className="prologo" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg'/>
                </div>
                {/*<div className="bar">
                  <span className="js"></span>
              </div>*/}
              </div>
              <div className="skill-bar">
                <div className="info">
                  {/*<p>REACT JS</p>
                <p>40%</p>*/}
                  <img className="prologo" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'/>
                </div>
                {/*<div className="bar">
                  <span className="react"></span>
                </div>*/}
              </div>
             <div className="skill-bar">
              <div className="info">
                {/*<p>VUE JS</p>
              <p>40%</p>*/}
                <img className="prologo" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-plain.svg'/>
              </div>
              {/*<div className="bar">
                <span className="react"></span>
            </div>*/}
            </div> 
              <div className="skill-bar">
                <div className="info">
                  {/*<p>PYTHON</p>
                <p>30%</p>*/}
                  <img className="prologo" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'/>
                </div>
                {/*<div className="bar">
                  <span className="python"></span>
              </div>*/}
              </div>
              <div className="skill-bar">
                <div className="info">
                  {/*<p>PYTHON</p>
                <p>30%</p>*/}
                  <img className="prologo" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg'/>
                </div>
                {/*<div className="bar">
                  <span className="python"></span>
              </div>*/}
              </div>
              <div className="skill-bar">
                <div className="info">
                  {/*<p>PYTHON</p>
                <p>30%</p>*/}
                  <img className="prologo" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg'/>
                </div>
                {/*<div className="bar">
                  <span className="python"></span>
                </div>*/}
              </div>
              <div className="skill-bar">
                <div className="info">
                  {/*<p>PYTHON</p>
                <p>30%</p>*/}
                  <img className="prologo" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg'/>
                </div>
                {/*<div className="bar">
                  <span className="python"></span>
              </div>*/}
              </div>
            </div>
          </div>
          <div className="design">
            <h2>DESIGN TOOLS</h2>
            <div className="skill-main">
              <div className="skill-bar">
                <div className="info">
                  {/*<p>ADOBE PHOTOSHOP</p>
                  <p>90%</p>*/}
                  <img className="prologo" src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/photoshop/photoshop-plain.svg'/>
                </div>
                {/*<div className="bar">
                  <span className="ps"></span>
                </div>*/}
              </div>
               <div className="skill-bar">
                <div className="info">
                  {/*<p>ADOBE AFTER EFFECT</p>
                  <p>90%</p>*/}
                  <img className="prologo" src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/aftereffects/aftereffects-plain.svg'/>
                </div>
                {/*<div className="bar">
                  <span className="ae"></span>
                </div>*/}
              </div>
               <div className="skill-bar">
                <div className="info">
                  {/*<p>BLENDER</p>
                  <p>80%</p>*/}
                  <img className="prologo" src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/blender/blender-original.svg'/>
                </div>
                {/*<div className="bar">
                  <span className="blender"></span>
                </div>*/}
              </div>
               <div className="skill-bar">
                <div className="info">
                  {/*<p>ADOBE ILLUSTRATOR</p>
                  <p>70%</p>*/}
                  <img className="prologo" src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/illustrator/illustrator-plain.svg'/>
                </div>
                {/*<div className="bar">
                  <span className="ai"></span>
                </div>*/}
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
