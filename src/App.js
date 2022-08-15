import './App.css';
import Navbar from './components/Navbar';
import Introduction from "./components/Introduction";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Introduction />
      <Resume />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
