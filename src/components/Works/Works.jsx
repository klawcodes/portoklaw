import React, { useEffect, useRef } from 'react'
import './Works.css'
import test from "../../images/mk.png"
import test2 from "../../images/klaw.png"
import { DiReact, DiHtml5, DiCss3, DiJsBadge, DiPython } from "react-icons/di"
import { SiBlender, SiVuedotjs, SiElectron } from "react-icons/si";
import { gsap } from 'gsap';
import LocomotiveScroll from "locomotive-scroll";
import AOS from 'aos';
import "aos/dist/aos.css";

const Works = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div data-scroll id="works">
      <div className="works">
        <h2 data-aos="fade-up" data-aos-delay="500" data-aos-duration="200" className="t-v fwt">Featured Works.</h2>
        {/*<div className="test2" ref={ref}>
          <img src={test2} className="cursor-follow" ref={el => cursor =el}/>
        </div>
        <div className="test" ref={ref}>
          <img src={test} className="cursor-follow" ref={el => cursor =el}/>
        </div>*/}
        <div className="list-works">
          <div className="movie" data-aos="fade-up" data-aos-delay="500" data-aos-duration="500">
            <div className="line">
              <h2 className="title">IMDB WANNA BE</h2>
              <DiReact title="React JS" className="icon"/>
              <DiHtml5 title="HTML" className="icon"/>
              <DiCss3 title="CSS" className="icon"/>
            </div>
            <p>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
            <a href="https://github.com/klawcodes/movie-app" target="_blank"><button className="button">VIEW WORK</button></a>
          </div>
          <div className="larq" data-aos="fade-up" data-aos-delay="500" data-aos-duration="800">
            <div className="line">
              <h2 className="title">LARQ API</h2>
              <DiJsBadge title="JavaScript" className="icon"/>
            </div>
            <p>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
            <a href="https://github.com/klawcodes/larq-api" target="_blank"><button className="button">VIEW WORK</button></a>
          </div>
          <div className="game" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1200">
            <div className="line">
              <h2 className="title">PLATFORMER GAME</h2>
              <DiPython title="Python" className="icon"/>
            </div>
            <p>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
            <a href="https://github.com/secretego/platformer-game" target="_blank"><button className="button">VIEW WORK</button></a>
          </div>
          <div className="hsd" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1500">
            <div className="line">
              <h2 className="title">HAND SIGN DETECTOR</h2>
              <DiPython title="Python" className="icon"/>
            </div>
            <p>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
            <a href="https://github.com/klawcodes/hand-sign-detector" target="_blank"><button className="button">VIEW WORK</button></a>
          </div>
          <div className="hsd" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1800">
            <div className="line">
              <h2 className="title">MARKDOWN EDITOR</h2>
              <SiElectron title="Electron" className="icon"/>
              <DiReact title="React JS" className="icon"/>
            </div>
            <p>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
            <a href="https://github.com/klawcodes/markdown-editor" target="_blank"><button className="button">VIEW WORK</button></a>
          </div>
         <div className="hsd" data-aos="fade-up" data-aos-delay="500" data-aos-duration="2100">
          <div className="line">
            <h2 className="title">HOLOLIVE ID WEBSITE</h2>
              <DiReact title="React JS" className="icon"/>
              <DiHtml5 title="HTML" className="icon"/>
              <DiCss3 title="CSS" className="icon"/>
          </div>
          <p>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
          <a href="https://github.com/klawcodes/holoid-website" target="_blank"><button className="button">VIEW WORK</button></a>
        </div> 
        <div className="hsd" data-aos="fade-up" data-aos-delay="500" data-aos-duration="2400">
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
