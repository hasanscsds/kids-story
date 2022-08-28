import React from 'react';

function FeaturesItem ({item}) {

   return (
      <div className="features__item" key={item.index}>
         <span className="features__img" style={{ background: `${item.bgColor}`}}>
            <img src={item.featuresIcon} alt="img"/>
         </span>
         <span  className='features__text'>
            <p><strong>{item.dataKey} </strong> {item.data}</p>
         </span>
      </div>
   );
};


export default FeaturesItem;