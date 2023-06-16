import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Blog from './Components/Blog';
import News from './Components/News';
import Events from './Components/Events';
import Jobs from './Components/Jobs';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='sm:h-auto w-full '>
      <Navbar />
      <Hero />
      <Blog />
      <News />
      <Events />
      <Jobs />
      <Footer />
    </div>
  );
}

export default App;
