import './App.css';
import './reset.css';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className="App">
        <Navbar />    
        <Hero/>
    </div>
  );
}

export default App;
