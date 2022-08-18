import './App.css';
import Navbar from './components/Navbar';
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <div className='content'>
        <About />
        <Resume />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
