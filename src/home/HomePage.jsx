import * as React from 'react';
import '../resources/main.css'

const Footer = ()=> {
  return(
    <footer className="footer mt-5 sm:footer-horizontal bg-neutral text-neutral-content p-10">
    <aside>
    <img src="/logo.svg" className="h-10" />
      <p>
        GB Tracker.
        <br />
        Providing reliable tech since 2025
      </p>
    </aside>
    <nav>
      <h6 className="footer-title">Social</h6>
      <div className="grid grid-flow-col gap-4">
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="fill-current">
            <path
              d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
          </svg>
        </a>
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="fill-current">
            <path
              d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
          </svg>
        </a>
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="fill-current">
            <path
              d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
          </svg>
        </a>
      </div>
    </nav>
  </footer>
  )
} 

export default function HomePage(props) {
  return (
    <main className='flex flex-col items-center justify-center'>
      <div className="navbar min-h-4! md:min-h-12! top-2 w-[98%]! rounded-2xl w-full fixed bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost">
            <img
              src="/logo.svg"
              className="md:h-10 h-8" />
          </a>
        </div>
        <div className="flex-none">
          <button className="btn btn-sm md:btn-md  btn-secondary btn-outline">
            My Account
          </button>
          <label className="px-2 swap swap-rotate">
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" className="theme-controller" value="dark" />

  {/* sun icon */}
  <svg
    className="swap-on size-8 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>

  {/* moon icon */}
  <svg
    className="swap-off size-8 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
</label>
        </div>
      </div>




      <div className="hero pt-20 bg-base-200 w-full">
        <div className="hero-content flex-col text-center">
          <div className="max-w-3xl">
            <h2 className="text-2xl text-secondary font-bold">Contrôlez vos Véhicules 24/7</h2>
            <h1 className="text-4xl font-bold"><span className='text-secondary font-black'>#1</span> Plateforme de Suivi et de Gestion de Flotte GPS</h1>
            <p className="text-lg py-6">
            GB Tracker Le Leader en Géolocalisation GPS et Gestion de Flotte, nous proposons une solution complète de géolocalisation GPS en temps réel pour ceux qui souhaitent suivre et protéger leurs véhicules, objets de valeur ou même assurer la sécurité de leurs proches.
            </p>
            <div className='flex justify-center items-center gap-2 md:flex-row flex-col'>
            <button className="btn btn-wide btn-outline btn-secondary">Essayez la démo</button>
            <button className="btn btn-wide btn-accent">Demander</button>
            </div>
            
          </div>
          <div className='text-sm'>En cliquant sur "Demander", vous acceptez nos&nbsp;
            <a className='link'>
            Conditions Générales
            </a></div>
          <img
      src="/img/screenshoot-light.png"
      className="max-w-4xl w-full  rounded-base shadow-2xl" />
        </div>
      </div>

      <Footer />
    </main>
  );
}
