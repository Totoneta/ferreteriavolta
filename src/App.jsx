import './App.css';
import { Footer } from './components/footer/footer.jsx';
import { NavBar } from './components/navbar/navbar';
import { InicioPage } from './pages/inicio/InicioPage.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProductosPage } from './pages/productos/ProductosPage.jsx';
import { EmpresaPage } from './pages/empresa/EmpresaPage.jsx';
import { ContactoPage } from './pages/contacto/ContactoPage.jsx';

function App() {
  return (

    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<InicioPage />} />
        <Route path="/Productos" element={<ProductosPage />} />
        <Route path="/Empresa" element={<EmpresaPage />} />
        <Route path="/Contacto" element={<ContactoPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
