import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Banner from '../App/Banner'

import GreyArrow from '../../Assets/grey arrow.svg'
import Check from '../../Assets/check.svg'

const UE = () => {
  let history = useNavigate()
  return ( 
<div className='wrap'>
      <Banner />
      <div>

        <button onClick={() =>history(-1)} className="return">
        <img src={GreyArrow} alt="fleche grise"/>
          Retour
        </button>

      <div className="breadcrumbs">
        <p><img src={Check} alt="fleche grise"/>Le preneur n'est pas assujetti à la TVA</p>
        <p><img src={Check} alt="fleche grise"/>Le preneur est établi dans l'Union Européenne (hors France)</p>
      </div>

      <p style={{fontSize: '18px'}}>Vous avez réalisé (ou vous prévoyez de réaliser) plus de 10 000 € de chiffre d'affaires sur l'année civile au titre des ventes à distance intracommunautaires et des prestations de télécommunications ainsi que les services fournis par voie électronique effectués auprès de personnes non assujetties ou avez opté pour l'OSS ?</p>

      <div className="select_container">
        <Link to='/OSS' ><button className='select'>Oui</button></Link>
        <Link to='/France_non_soumis_europe' ><button className='select'>Non</button></Link>
      </div>

      </div>
    </div>
);
}

export default UE;