import React, { useEffect, useRef } from 'react'
import './Works.css'
import { DiReact, DiHtml5, DiCss3, DiJsBadge, DiPython } from "react-icons/di"
import { SiBlender, SiVuedotjs } from "react-icons/si";
import LocomotiveScroll from "locomotive-scroll";

const Works = () => {
  return (
    <div data-scroll>
      <div className="works">
        <h2>FEATURED WORKS.</h2>
        <div className="list-works">
          <div className="movie">
            <div className="line">
              <h2 className="title">IMDB WANNA BE</h2>
              <DiReact title="React JS" className="icon"/>
              <DiHtml5 title="HTML" className="icon"/>
              <DiCss3 title="CSS" className="icon"/>
            </div>
            <p>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
            <a href="https://github.com/klawcodes/movie-app" target="_blank"><button className="button">VIEW WORK</button></a>
          </div>
          <div className="larq">
            <div className="line">
              <h2 className="title">LARQ API</h2>
              <DiJsBadge title="JavaScript" className="icon"/>
            </div>
            <p>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
            <a href="https://github.com/klawcodes/larq-api" target="_blank"><button className="button">VIEW WORK</button></a>
          </div>
          <div className="game">
            <div className="line">
              <h2 className="title">PLATFORMER GAME</h2>
              <DiPython title="Python" className="icon"/>
            </div>
            <p>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
            <a href="https://github.com/secretego/platformer-game" target="_blank"><button className="button">VIEW WORK</button></a>
          </div>
          <div className="hsd">
            <div className="line">
              <h2 className="title">HAND SIGN DETECTOR</h2>
              <DiPython title="Python" className="icon"/>
            </div>
            <p>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
            <a href="https://github.com/klawcodes/hand-sign-detector" target="_blank"><button className="button">VIEW WORK</button></a>
          </div>
          <div className="hsd">
            <div className="line">
              <h2 className="title">ANIME SEARCHER</h2>
              <SiVuedotjs title="Vue JS" className="icon"/>
              <DiHtml5 title="HTML" className="icon"/>
              <DiCss3 title="CSS" className="icon"/>
            </div>
            <p>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
            <a href="https://github.com/klawcodes/anime-searcher" target="_blank"><button className="button">VIEW WORK</button></a>
          </div>
         <div className="hsd">
          <div className="line">
            <h2 className="title">EFFECT DESTROYER</h2>
            <SiBlender title="Blender" className="icon"/>
          </div>
          <p>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
          <a href="https://www.instagram.com/p/CiH99RgBN-E/" target="_blank"><button className="button">VIEW WORK</button></a>
        </div> 
        </div>
      </div>
    </div>
  )
}

export default Works
