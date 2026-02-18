import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import Loader from './components/Loader';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800); // Slightly longer than animation duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Loader key="loader" onComplete={() => setLoading(false)} />
      ) : (
        <Home key="home" />
      )}
    </AnimatePresence>
  );
}

export default App;
