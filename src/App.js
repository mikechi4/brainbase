import './App.css';
import './reset.css';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Navbar />    
        <Hero />
        <Footer />
    </div>
  );
}

export default App;
