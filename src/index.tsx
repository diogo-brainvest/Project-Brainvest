import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import BlogPage from './pages/BlogPage';
import NoticiaPix from './pages/NoticiaPix';
import PrimeirosPassosInvestir from './pages/PrimeirosPassosInvestir';
import EvitarDividasCartao from './pages/EvitarDividasCartao';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/noticia/pix-parcelado-2025" element={<NoticiaPix />} />
        <Route path="/blog/primeiros-passos-investir" element={<PrimeirosPassosInvestir />} />
        <Route path="/blog/evitar-dividas-cartao-credito" element={<EvitarDividasCartao />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);