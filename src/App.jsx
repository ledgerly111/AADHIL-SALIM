import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Aadhil Salim. All rights reserved.</p>
        <p style={{ marginTop: '10px', fontSize: '0.9rem' }}>Designed by Aadhil Salim</p>
      </footer>
    </div>
  );
}

export default App;
