import * as React from 'react';


const MobileApp = ()=> {
    return(
        <section className='max-w-3xl px-6 flex flex-col py-5 gap-6 items-center justify-center bg-base-100'>
            <h2 className=' text-3xl font-bold text-secondary'>GBTracker Application Mobile</h2>

            <p className='text-base text-center '>
            GBTracker Mobile fournit une interface utilisateur simplifiée pour afficher les informations les plus importantes, être informé des événements importants et contrôler les appareils à distance. Pour utiliser cette application, vous devez disposer d'un compte.
            </p>
            
            
            <a className='link'><img src="/img/PlayStore.svg" className="opacity-90 hover:opacity-100 max-w-40 w-full" /></a>

        </section>
    )
  } 
  
  export default MobileApp