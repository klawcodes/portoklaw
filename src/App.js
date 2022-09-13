import logo from './logo.svg';
import './App.css';
import FirstPage from './components/FirstPage/FirstPage'
import About from './components/About/About'
import Hero from './components/Hero/Hero'
import AboutMe from './components/AboutMe/AboutMe'
import Works from './components/Works/Works'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect, useRef } from 'react';


function App() {

  {/*let container = useRef(null);

  useEffect(() => {
    new LocomotiveScroll({
      el: container,
      smooth: true,
      lerp: .07,
    });
  }, []);*/}

  return (
    <div className="App container">
      <FirstPage data-scroll className="fp"/>
      <About data-scroll className="ab"/>
      <Hero data-scroll className="hr"/> 
      <AboutMe data-scroll className="abm"/>
      <Works data-scroll className="wrk"/>
      <Contact data-scroll className="ct"/>
      <Footer data-scroll className="ft"/>
    </div>
  );
}

export default App;
