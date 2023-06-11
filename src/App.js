import Navbar from './components/navbar/Navbar';
import Frame from './components/frame/Frame';
import Skills from './components/skills/Skills';
import Footer from './components/footer/Footer';
import './app.css';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Frame />
      <Skills />
      <Footer />      
    </div>
  );
}

export default App;
