import React, { useEffect } from 'react'
import './Contact.css'
import { MdOutlineMailOutline } from "react-icons/md"
import { AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai"
import { GoPrimitiveDot } from "react-icons/go"
import Email from "../../images/email.svg"
import AOS from 'aos';
import "aos/dist/aos.css";

const Contact = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="kontak" id="contact">
      <div className="left-c">
        <div className="ava" data-aos="fade-up" data-aos-duration="200" data-aos-delay="500">
          <GoPrimitiveDot className="iconxx"/>
          <h1 className="t-ava">Available for hire</h1>
        </div> 
        <div className="email" data-aos="fade-up" data-aos-duration="400" data-aos-delay="500">
          <MdOutlineMailOutline className="iconx"/>
          <h1 className="temail"><a href="mailto:hi@klaw.my.id" target="_blank">hi@klaw.my.id</a></h1>
        </div>
        <div className="email" data-aos="fade-up" data-aos-duration="600" data-aos-delay="500">
          <AiOutlineGithub className="iconx"/>
          <h1 className="temail"><a href="https://github.com/klawcodes" target="_blank">klawcodes</a></h1>
        </div>
        <div className="email" data-aos="fade-up" data-aos-duration="900" data-aos-delay="500">
          <AiOutlineTwitter className="iconx"/>
          <h1 className="temail"><a href="https://twitter.com/0xKlaw" target="_blank">@0xKlaw</a></h1>
        </div>
      </div>
      <div className="right-c" data-aos="fade-up" data-aos-duration="1100" data-aos-delay="500">
        <p className="tkontak">I WOULD LOVE TO HEAR FROM YOU.<br/>✦ LETS WORK TOGETHER.</p>
      </div>
    </div>
  )
}

export default Contact
