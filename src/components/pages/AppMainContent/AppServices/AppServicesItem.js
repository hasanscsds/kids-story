import React from 'react';
import defaultImg from "../../../../images/лего 1.png";


function AppServicesItem ({item}) {
   return (
      <div className="services__item">
         <img className="services__item__bg" src={item.servicesBg? item.servicesBg : defaultImg} alt="img" />
         <div className="services__item__details">
            <span className="services__item__details__icon">
               <img src={item.servicesIcon} alt="img"/>
            </span>
            <span className="services__item__details__text">
               <p>{item.servicesLabel}</p>
            </span>
         </div>
      </div>
      );
   };

export default AppServicesItem;