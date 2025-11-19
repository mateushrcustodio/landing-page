import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Analytics } from '@vercel/analytics/react';

function RootLayout() {
  return (
    <>
      {/* O Outlet é o espaço onde suas páginas (LandingPage, Login, etc.) serão renderizadas */}
      <Outlet />
      
      {/* O Toaster fica aqui, "flutuando" acima de todas as páginas */}
      <Toaster 
        position="top-right" 
        toastOptions={{
          duration: 4000,
          style: {
            background: '#333',
            color: '#fff',
          },
        }}
      />

      <Analytics />
    </>
  );
}

export default RootLayout;