import * as React from 'react';


const Order = ()=> {
    return(
        <div className='max-w-3xl px-6 flex flex-col py-5 gap-6 items-center justify-center bg-base-100'>
            <h2 className=' text-2xl font-bold text-secondary'>Prêt à commencer ?</h2>
            <p className='text-4xl  text-center font-bold '>
                Rejoignez tous les clients satisfaits utilisant GBTracker
            </p>
            <p className='text-base text-center '>
            Si vous avez des questions, Veuillez nous appeler au <a className='link link-secondary'>0558556596</a>
            </p>
            
            
            <button className="btn md:btn-wide btn-lg btn-accent">Demander un devis</button>

        </div>
    )
  } 
  Order
  export default Order