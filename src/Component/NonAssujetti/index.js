import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Banner from '../App/Banner';

import GreyArrow from '../../Assets/grey arrow.svg'
import Check from '../../Assets/check.svg'

const NonAssujetti = () => {
  let history = useNavigate()
  return ( 
    <div className="wrap">
      <Banner />
      <div>
      <Link to='/'>
        <button onClick={() =>history(-1)} className="return">
        <img src={GreyArrow} alt="fleche grise"/>
          Retour
        </button>
      </Link>

        <div className="breadcrumbs">
          <p><img src={Check} alt="fleche grise"/>Le preneur n'est pas assujetti à la TVA</p>
        </div>

        <h4>Votre client est il situé :</h4>

        <div className="select_container">
          <Link to='/non_assujetti_France'><button className='select'>En France</button></Link>
          <Link to='/non_assujetti_UE'><button className='select'>En Union Européenne</button></Link>
          <Link to='/non_assujetti_hors_UE'><button className='select'>Hors Union Européenne</button></Link>
        </div>

      </div>
    </div>
);
}

export default NonAssujetti;