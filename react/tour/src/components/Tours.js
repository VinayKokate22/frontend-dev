import React, { useState } from 'react';
import Tour from './Tour';
const Tours = ({tours}) => {
  const [readmore,setreadmore]=useState(false)
  
  const tour =tours.map((item)=>{
    return(
      <div className='flex col locationcard'>
        <img src={item.image} alt="" />
        
        <div className='flex col locationinfo'>
          <div className="flex row">
            <h2>{item.name}</h2>
            <h3 className='pricetag'>{item.price}</h3>
          </div>
          <p>{readmore? item.info :item.info.substring(0,250)} <span className='infotoggle' onClick={()=>{
                   setreadmore(!readmore)
            
          }}>{readmore ? "show less":"show more"}</span></p>
        </div>
        <div>
          <button>not interested</button>
          
        </div>
      </div>
    )
  })
  return (
    <section>
      
        <h1 className='heading'>our tours</h1>
        {tour}
    </section>
  );
};

export default Tours;