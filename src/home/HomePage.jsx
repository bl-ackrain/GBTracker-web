import * as React from 'react';
import Footer from './Footer';
import '../resources/main.css'
import TopBar from './TopBar';
import Hero from './Hero';

export default function HomePage(props) {
  return (
    <main className='flex flex-col items-center justify-center'>
      <TopBar />
      <Hero />
      
      <div className='w-full bg-base-300 flex items-center justify-center'>
        <img src="/img/Devices.svg" className=" max-w-6xl" />
      </div>
      

      <Footer />
    </main>
  );
}
