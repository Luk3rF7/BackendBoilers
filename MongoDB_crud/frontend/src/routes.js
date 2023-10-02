import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './pages/index/index';
import Details from './pages/details/details';

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/CriarUsuarios" element={<Insert />} />
        <Route path="/usuarios/:id" element={<Details />} />
        <Route path="/DeletarUsuario/:id" element={<Delete />} />
        <Route path="/EditarUsuario/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Rotas;