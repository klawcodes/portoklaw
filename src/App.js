import logo from './logo.svg';
import './App.css';
import FirstPage from './components/FirstPage/FirstPage'
import About from './components/About/About'
import Hero from './components/Hero/Hero'
import AboutMe from './components/AboutMe/AboutMe'

function App() {
  return (
    <div className="App">
      <FirstPage/>
      <About/>
      <Hero/> 
      <AboutMe/>
    </div>
  );
}

export default App;
