import '../styles/global.css'; // Import global CSS
import { useEffect } from 'react';
import Router from 'next/router';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // If not authenticated, redirect to login page
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated && window.location.pathname !== '/login') {
      Router.push('/login');
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
