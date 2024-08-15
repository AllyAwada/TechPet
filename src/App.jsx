import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Inicio from './pages/Home';
import Qop from './pages/Qop';
import Criadores from './pages/Criadores';
import Produto from './pages/Produto';
import Referencias from './pages/Referencias';
import Pecas from './pages/Pecas';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/qop" element={<Qop />} />
            <Route path="/criadores" element={<Criadores />} />
            <Route path="/produto" element={<Produto />} />
            <Route path="/referencias" element={<Referencias />} />
            <Route path="/pecas" element={<Pecas />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
