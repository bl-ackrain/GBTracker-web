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
              <button className="btn w-full md:btn-wide btn-lg btn-outline btn-secondary">Essayez la démo</button>
              <button className="btn w-full md:btn-wide btn-lg btn-accent">Demander un devis</button>
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