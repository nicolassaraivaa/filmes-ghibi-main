import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Home from './containers/Home';
import GlobalStyle from './styles/globalStyles';
import { ToastContainer } from 'react-toastify';
import { MovieProvider } from './hooks/movieContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MovieProvider>
      <GlobalStyle />  
      <Home />
      <ToastContainer autoClose={2000} theme='colored' />
    </MovieProvider>
  </StrictMode>
);
