import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Filmes from './pages/Filmes';
import Salas from './pages/Salas';
import Sessoes from './pages/Sessoes';
import Ingressos from './pages/Ingressos';
import Menu from './components/Menu';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filmes" element={<Filmes />} />
          <Route path="/salas" element={<Salas />} />
          <Route path="/sessoes" element={<Sessoes />} />
          <Route path="/ingressos" element={<Ingressos />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
