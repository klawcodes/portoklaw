import React, { useState } from 'react'
import './FirstPage.css'
import Bars from '../../images/bars.png'
import { Link } from 'react-scroll'

const FirstPage = () => {

  const mobile1 = window.innerWidth<=540 ? true: false;
  const [menuOpened, setMenuOpened] = useState(false)

  return (
    <div className="header">
      <h2 className="logo"><Link

      onClick={()=> setMenuOpened(false)}
      activeClass="active"
      to='home'
      spy={true}
      smooth={true}
      
      >Klaw.</Link></h2>
      {menuOpened === false && mobile1 === true ? (
        <div className="bars" style={{backgroundColor: "#555", padding: ".7rem", borderRadius: "5px",}} onClick={() => setMenuOpened(true)}>
          <img src={Bars} style={{width: '1rem', height: '1rem'}}/>
        </div>
      ) : (
      <ul className="header-menu">
        <li className="h"><Link
        
        onClick={()=> setMenuOpened(false)}
        activeClass="active"
        to='home'
        spy={true}
        smooth={true}
                                                    
        >HOME</Link></li>
        <li className="a"><Link
        
        onClick={()=> setMenuOpened(false)}
        activeClass="active"
        to='about'
        spy={true}
        smooth={true}
        
        >ABOUT</Link></li>
        <li className="w"><Link
        
        onClick={()=> setMenuOpened(false)}
        activeClass="active"
        to='works'
        spy={true}
        smooth={true}

        >WORKS</Link></li>
        <li className="c"><Link
        
        onClick={()=> setMenuOpened(false)}
        activeClass="active"
        to='contact'
        spy={true}
        smooth={true}
        
        >CONTACT</Link></li>
      </ul>
      )}
    </div>
  )
}

export default FirstPage
