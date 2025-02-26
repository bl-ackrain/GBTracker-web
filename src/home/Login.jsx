import * as React from 'react';
import Lottie from 'react-lottie';
import '../resources/main.css'

import Tracking from '../resources/Tracking.json'

export default function Login(props) {
  return (
    <main className='size-full'>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col-reverse md:flex-row">
            <div className="max-w-md w-full flex flex-col items-center justify-center text-center lg:text-left">
                
            <p className="md:py-6">
                Notre équipe est joignable par e-mail et par téléphone (7j/7j H24) et nous définissons avec vous les fonctionnalités nécessaires pour améliorer votre gestion au quotidien.
                </p>
                <Lottie width={'50%'} options={{animationData: Tracking}} />
                
            </div>
            <div className="card bg-base-100 min-w-x w-full max-w-md shadow-2xl">
                <div className="card-body items-center">
                <img src="/logo.svg" className="max-w-60 w-full" />
                <div className='text-xl font-bold'>Connectez-vous</div>
                    <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend">Email:</legend>
                        <label className="input validator w-full">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
                        <input type="email" placeholder="mail@site.com" required/>
                        </label>
                        <div className="validator-hint hidden">Enter valid email address</div>

                        <legend className="fieldset-legend">Password:</legend>
                        <label className="input validator  w-full">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle></g></svg>
                        <input type="password" required placeholder="Password" minlength="8" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" />
                        </label>
                        <p className="validator-hint hidden">
                        Must be more than 8 characters, including
                        <br/>At least one number
                        <br/>At least one lowercase letter
                        <br/>At least one uppercase letter
                        </p>


                <button
                  type="submit"
                  class="btn btn-primary my-5"
                >
                  <div class="flex flex-row items-center justify-center">
                    <div class="mr-2">
                      <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                        ></path>
                      </svg>
                    </div>
                    <div class="font-bold">Se Connecter</div>
                  </div>
                </button>
                    </fieldset>
                    <div className="divider">Télécharez l'application</div>

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
    </div>
    </main>
  );
}
