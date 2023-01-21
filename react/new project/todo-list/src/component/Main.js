import React from 'react'
import Card from './Card'
import data from './data'
const Main = () => {

    console.log("i am inside main")
 
    const carddata=data.map((item)=>
    {
            return <Card item={item} />
    })

  return (
    
    <>
    
         <main>
            {carddata}
         </main>
    </>
  )
}

export default Main