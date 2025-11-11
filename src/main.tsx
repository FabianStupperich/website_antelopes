import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import Impressum from './components/Impressum.tsx';
import Datenschutz from './components/Datenschutz.tsx';
import NewsPage from './components/NewsPage.tsx';
import Publications from './components/Publications.tsx';
import KonsortiumPage from './components/KonsortiumPage.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/publikationen" element={<Publications />} />
        <Route path="/konsortium" element={<KonsortiumPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
