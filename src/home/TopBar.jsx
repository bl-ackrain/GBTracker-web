import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const TopBar = ()=> {
  const navigate = useNavigate()
    return(
  <nav className="w-full px-2 md:px-10 min-h-12 md:min-h-15 flex flex-row items-center justify-between
   z-20 top-0 fixed bg-base-100 shadow-md">
    <div className="navbar-start">
      <a className="link ml-2" href='/'>
        <img
          src="/logo.svg"
          className="md:h-10 h-8" />
      </a>
    </div>
    <div className="navbar-end">
      <button onClick={() => navigate('/login')}
       className="btn btn-sm md:btn-md  btn-secondary btn-outline">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
          <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
        </svg>

        Espace Client
      </button>
      <label className="px-2 swap swap-rotate">
        {/* this hidden checkbox controls the state */}
        <input type="checkbox" className="theme-controller" value="dark" />

        {/* sun icon */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="swap-on size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
        </svg>


          {/* moon icon */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="swap-off size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
        </svg>

      </label>
    </div>
  </nav>
  
)
}

export default TopBar