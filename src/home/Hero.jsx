import exported from 'mapbox-gl';
import * as React from 'react';

const Hero = ()=> {
    return(
    <div className="hero pt-20 bg-base-200 w-full">
      <div className="hero-content flex-col text-center">
          <div className="max-w-3xl flex justify-center items-center flex-col">
            <h2 className="text-2xl text-secondary font-bold">Contrôlez vos Véhicules 24/7</h2>
            <h1 className="text-4xl font-bold"><span className='text-secondary font-black'>#1</span> Plateforme de Suivi et de Gestion de Flotte GPS</h1>
            <p className="text-lg py-6">
            GB Tracker Le Leader en Géolocalisation GPS et Gestion de Flotte, nous proposons une solution complète de géolocalisation GPS en temps réel pour ceux qui souhaitent suivre et protéger leurs véhicules, objets de valeur ou même assurer la sécurité de leurs proches.
            </p>
            <div className='max-w-md w-full flex justify-center items-center gap-2 md:gap-5 md:flex-row flex-col'>
              <button className="btn w-full md:btn-wide btn-lg btn-outline btn-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
              </svg>
                Essayez la démo</button>
              <button className="btn w-full md:btn-wide btn-lg btn-accent">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
              </svg>
                Demander un devis
              </button>
            </div>
            
          </div>
          <div className='text-xs'>En cliquant sur "Demander un devis", vous acceptez nos&nbsp;
            <a className='link'>Conditions Générales</a>
          </div>
          
      </div>
    </div>
    )
}

export default Hero