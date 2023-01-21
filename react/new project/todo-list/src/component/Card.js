import React from 'react'
// import './cards.css';

const Card = (prop) => {

        // title: "Mount Fuji",
        // location: "Japan",
        // googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
        // startDate: "12 Jan, 2021",
        // endDate: "24 Jan, 2021",
        // description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
        // imageUrl: "https://source.unsplash.com/WLxQvbMyfas"
  return (
    <>
       <section className='imagedata flex'>
           <div className='imageoflocation'>
             <img src={prop.item.imageUrl} alt="imageof location" />
           </div>
           <div>
           
                 
                 <p className='location-country inline'>{prop.item.location}</p>
                 <a className='greylink' href={prop.item.googleMapsUrl}  >View on Google Map</a>
                 <h2>{prop.item.title}</h2>
                 <h3>{prop.item.startDate}  {prop.item.endDate}</h3>
                 <p className='location-info'>{prop.item.description}</p>
           </div>
       </section> 
    </>
  )
}

export default Card