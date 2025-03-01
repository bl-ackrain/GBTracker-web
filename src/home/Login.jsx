import * as React from 'react';
import { useState } from 'react';
import Lottie from 'react-lottie';
import '../resources/main.css'
import { useNavigate } from 'react-router-dom';

import Tracking from '../resources/Tracking.json'
import usePersistedState from '../common/util/usePersistedState';
import { generateLoginToken } from '../common/components/NativeInterface';
import { useDispatch } from 'react-redux';
import { sessionActions } from '../store';

export default function Login(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = usePersistedState('loginEmail', '');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');
  const [failed, setFailed] = useState(false);
  const [disableButton, setDisableButton] = useState(false);

  const handlePasswordLogin = async (event) => {
    event.preventDefault();
    setFailed(false);
    setDisableButton(true)
    try {
      const query = `email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;
      const response = await fetch('/api/session', {
        method: 'POST',
        body: new URLSearchParams(code.length ? `${query}&code=${code}` : query),
      });
      if (response.ok) {
        const user = await response.json();
        generateLoginToken();
        dispatch(sessionActions.updateUser(user));
        navigate('/app');
      }else {
        throw Error(await response.text());
      }
    } catch (error) {
      console.log(error)
      setFailed(true);
      setPassword('');
      setDisableButton(false)
    }
  };

  return (
    <main className='size-full'>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content mx-auto max-w-md sm:max-w-lg md:max-w-3xl lg:max-w-4xl flex flex-col">
        <a className='link' href='/'><img src="/logo.svg" className="max-w-80 w-full" /></a>

        <div className='grid grid-cols-1 md:grid-cols-9 gap-6 lg:gap-7'>
          <div className="col-span-1 md:col-span-5">
          
            <div className="p-7 bg-base-100 rounded-md border-1 border-base-300 shadow-md">
            <div className='text-center font-bold py-2'>Connectez-vous a GB Tracker</div>
            
            <div className='text-center text-[0.8rem]'>Vous n'avez pas de compte ? <a className='link link-primary'>Commencez un essai gratuit</a></div>
            
            {failed?<div role="alert" className="alert alert-error alert-soft rounded-md my-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Erreur! Email ou mot de passe invalide</span>
            </div>: ''}
              

            <form className="fieldset w-full">
                <legend className="fieldset-legend">Email:</legend>
                <label className="input validator w-full" >
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
                <input
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                type="email" placeholder="mail@site.com" required/>
                </label>
                <div className="validator-hint hidden">Enter valid email address</div>

                <legend className="fieldset-legend">Password:</legend>
                <label className="input validator  w-full">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle></g></svg>
                <input 
                onChange={(e) => setPassword(e.target.value)} 
                autoComplete="current-password"
                type="password" required placeholder="Password" minLength="8" pattern="(?=.*\d)(?=.*[a-z]).{8,}" title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" />
                </label>
                <p className="validator-hint hidden">
                Must be more than 8 characters, including
                <br/>At least one number
                <br/>At least one lowercase letter
                </p>
        <button
          type="submit"
          className="btn btn-primary my-5"
          onClick={handlePasswordLogin}
          disabled={disableButton}
        >
          <div className="flex flex-row items-center justify-center">
            <div className="mr-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                ></path>
              </svg>
            </div>
            <div className="font-bold">Se Connecter</div>
          </div>
        </button>
            </form>

              <div className="divider">Télécharez l'application</div>
              <div className='items-center flex flex-col gap-2'>
                <img src="/img/PlayStore.svg" className="cursor-pointer opacity-90 hover:opacity-100 max-w-40 w-full" />

                <div className="flex items-center font-medium text-base-content/50 text-xs">
                    <span>Designed with</span>
                    <span className="px-2 drop-shadow-[0px_4px_16px_rgba(114,92,255,0.50)]">
                    <svg width="18" height="15" viewBox="0 0 19 17" fill="red" xmlns="http://www.w3.org/2000/svg"><path d="M1.96563 1.79864C0.0114548 3.75282 0.0114558 6.92117 1.96563 8.87535L8.68932 15.5992C9.2751 16.1849 10.2249 16.185 10.8106 15.5992L17.5344 8.87545C19.4885 6.92127 19.4885 3.75292 17.5344 1.79875C15.5802 -0.155433 12.4118 -0.155432 10.4576 1.79875L9.75005 2.50635L9.04234 1.79864C7.08816 -0.155537 3.91981 -0.155537 1.96563 1.79864Z"></path></svg>
                    </span>
                    <span>In Algeria</span>
                    <div className='mx-1 opacity-80 rounded-sm overflow-hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="15" viewBox="0 0 900 600"><path fill="#fff" d="M0 0h900v600H0z"/><path fill="#063" d="M0 0h450v600H0z"/><path fill="#d21034" d="M579.903811 225a150 150 0 1 0 0 150 120 120 0 1 1 0-150M585.676275 300 450 255.916106 533.852549 371.329239v-142.658277L450 344.083894z"/></svg>
                    </div>
                </div>
                <div className="font-medium text-base-content/40 text-xs">© 2025 GB Tracker - All Rights Reserved.</div>
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-4 min-h-96">
                <div className=" bg-[url(/img/customer-service.jpg)] bg-cover bg-center p-6 h-full rounded-md border-1 border-base-300 shadow-md">
                  <div className="p-2 rounded-md bg-base-100/50 backdrop-blur-xl">
                  <h1 className='font-bold text-center'>Besoin d’Aide ?</h1>
                  <p className='my-3 text-[13px]'>
                  Contactez-nous pour en savoir plus,
                  notre équipe est joignable par e-mail et par téléphone (7j/7j H24) et nous définissons avec vous les fonctionnalités nécessaires pour améliorer votre gestion au quotidien.

                  </p>
                  <div className='flex flex-col justify-center items-center'>
                  <button className='btn btn-wide btn-ghost'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  support@gbtracker.com
                  </button>
                  <button className='btn btn-wide btn-ghost'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>

                  05 58 55 65 96
                  </button>
                  </div>
                  
                  </div>
                </div>
          </div>
        </div>
        </div>
    </div>
    </main>
  );
}
