import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNav from './TopNav';
import HomePage from './HomePage';
import Products from './Products';
import Resources from './Resources';
import About from './About';
import BotNav from './BotNav';

function App() {
  return (
    <div className="App">
      <Router>
        <div style={{
          display: 'flex',
          minHeight: 'calc(100vh)',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <TopNav />
          <Routes>
            <Route path="/" element={<HomePage />} />  
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/quickstart" element={<Products />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
          <BotNav />
        </div>
      </Router>
    </div>
  );
}

export default App;
