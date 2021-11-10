import React from 'react';
import { Link } from 'react-router-dom'

import 'semantic-ui-css/semantic.min.css'

import Banner from './Banner';
// import ModalAssujetti from '../Modal/assujetti';

function Home() {
  return(
    <div id="welcome" className='wrap'>
      <Banner />

      <div id="welcome_banner">
        <h1>Bonjour et bienvenue sur notre simulateur de TVA pour la vente d'Ebook</h1>
        <p>Vous avez réalisé un e-book et le commercialisez via votre site Internet ou via des plateformes spécialisées</p>
        
        <h5>Vos prestations ne s'inscrivent pas dans le cadre de celles mentionnées précédemment ? Retrouvez parmi nos simulateurs, celui correspondant à votre activité : <a href="https://simulateur-prestations-services.netlify.app/">C'est par ici !</a></h5>
        <p>C’est parti !</p>
      </div>

      {/* <div id="assujetti">
        <h2>Le preneur est il assujetti à la TVA ? <ModalAssujetti /></h2>
        <div className="select_container">
          <Link to='Assujetti' ><button className='select'>Oui</button></Link>
          <Link to='non_assujetti' ><button className='select'>Non</button></Link>
        </div>
      </div> */}

    </div>
  )
}

export default Home