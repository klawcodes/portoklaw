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
import "locomotive-scroll/src/locomotive-scroll.scss"

function App() {
  return (
    <div className="App">
      <FirstPage/>
      <About/>
      <Hero/> 
      <AboutMe/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
