import * as React from 'react';


const Features = ()=> {
    return(
        <section className='p-6 w-full flex flex-col py-20 gap-10 items-center justify-center bg-base-300'>
            <h2 className='max-w-3xl text-4xl text-center font-bold'>Découvrez comment GBTracker aide votre entreprise</h2>
            <div className='max-w-7xl gap-4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                <div className='card size-full bg-base-100 shadow-md border-1 border-base-100'>
                    <div className='card-body'>
                        <div><img className='h-20' src='/img/route-color.png'></img></div>
                        <h2 className='card-title'> Suivi GPS en temps réel </h2>
                        <p className=''>
                            Suivez vos agents de terrain et vos véhicules sur une seule carte. Soyez toujours conscient de l’emplacement actuel des actifs de votre entreprise. Améliorez la précision de la gestion de vos forces de terrain et de votre flotte.
                        </p>
                    </div>
                    
                </div>
                <div className='card size-full bg-base-100 shadow-md border-1 border-base-100'>
                    <div className='card-body'>
                    <div><img className='h-20' src='/img/map-color.png'></img></div>
                        <h2 className='card-title'>Geofencing et POI</h2>
                        <p className=''>
                        Dessinez des zones virtuelles autour des chantiers de construction et des zones de travail pour contrôler chaque entrée et sortie avec des alertes en temps opportun. Ajoutez des points de repère avec des descriptions pour visualiser les lieux importants et les points d’intérêt.
                        </p>
                    </div>
                    
                </div>
                <div className='card size-full bg-base-100 shadow-md border-1 border-base-100'>
                    <div className='card-body'>
                    <div><img className='h-20' src='/img/fleet-color.png'></img></div>
                        <h2 className='card-title'>Gestion de flotte</h2>
                        <p className=''>
                        Suivez tous vos véhicules en temps réel. Fournissez aux conducteurs la navigation la plus rapide et les itinéraires les plus courts. Contrôlez les dépenses de carburant, le kilométrage et le comportement de conduite en ligne. Automatisez la maintenance de votre flotte pour prolonger le cycle de vie des véhicules et réduire les coûts de maintenance.
                        </p>
                    </div>
                    
                </div>
                <div className='card size-full bg-base-100 shadow-md border-1 border-base-100'>
                    <div className='card-body'>
                    <div><img className='h-20' src='/img/report-color.png'></img></div>
                        <h2 className='card-title'>Rapports et analyses</h2>
                        <p className=''>
                        Mesurez et analysez les mesures de performance clés de votre main-d’œuvre mobile et de votre flotte. Définissez un calendrier préféré pour recevoir automatiquement des rapports détaillés avec des graphiques et des données complètes sur le kilométrage.</p>
                    </div>
                    
                </div>
            </div>
        </section>
    )
  } 

  export default Features