import logo from './logo.svg';
import './App.css';
import FirstPage from './components/FirstPage/FirstPage'
import About from './components/About/About'
import Hero from './components/Hero/Hero'
import AboutMe from './components/AboutMe/AboutMe'
import Works from './components/Works/Works'

function App() {
  return (
    <div className="App">
      <FirstPage/>
      <About/>
      <Hero/> 
      <AboutMe/>
      <Works/>
    </div>
  );
}

export default App;
