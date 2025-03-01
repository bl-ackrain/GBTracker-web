import * as React from 'react';


const MobileApp = ()=> {
    return(
        <section className='max-w-3xl px-6 flex flex-col py-5 gap-6 items-center justify-center bg-base-100'>
            <h2 className=' text-3xl text-center font-bold text-secondary'>
            GBTracker Application Mobile
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="inline-block size-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>

            </h2>

            <p className='text-base text-center '>
            GBTracker Mobile fournit une interface utilisateur simplifiée pour afficher les informations les plus importantes, être informé des événements importants et contrôler les appareils à distance. Pour utiliser cette application, vous devez disposer d'un compte.
            </p>
            
            
            <a className='link'><img src="/img/PlayStore.svg" className="opacity-90 hover:opacity-100 max-w-40 w-full" /></a>

        </section>
    )
  } 
  
  export default MobileApp