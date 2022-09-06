import React from 'react'
import './Hero.css'
import klaw from '../../images/klaw.png'
import riot from '../../images/riot.png'
import mk from '../../images/mk.png'

const Hero = () => {
  return (
    <div>
      <div className="image">
        <div className="klaw">
          <a href="https://github.com/klawcodes" target="_blank">
            <img src={klaw} className="imagek"/> 
          </a>  
          <hr className="g"/>
          <p>FRONT END DEVELOPER - JUNIOR PROGRAMMER</p>
          <h2>KLAW</h2>
        </div>
        <div className="riot">
          <a href="https://instagram.com/riotrevenger" target="_blank">
            <img src={riot} className="imager"/>
          </a>  
          <hr className="g"/>
          <p>3D DESIGNER - DIGITAL ARTIST</p>
<h2>RIOT REVENGER</h2>
        </div>
        <div className="neon">
          <a href="https://instagram.com/neonpaperkid">
            <img src={riot} className="imager"/>
          </a>
          <hr className="g"/>
          <p>GRAPHIC DESIGNER - DIGITAL ARTIST</p>
          <h2>NEON PAPER KID</h2>
        </div>
        <div className="koala">
          <a href="https://open.spotify.com/artist/6l6neQdiyZXEXDDJAINfIm" target="_blank">
            <img src={mk} className="imageko"/>
          </a>  
          <hr className="g"/>
          <p>MUSIC PRODUCERS - MUSICIAN</p>
          <h2>MIDNIGHT KOALA</h2>
        </div>
      </div>
    </div>
  )
}

export default Hero
