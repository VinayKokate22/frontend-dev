import React,{useState,useEffect} from 'react';
import './App.css';
import Tours from './components/Tours';
import Loading from './components/Loading';
import Tour from './components/Tour';

const url="https://course-api.com/react-tours-project";
function App() {
  const [loading,setloading]=useState(true)
  const [tours,settours]=useState([])

  const fetchtours=async ()=>{
    setloading(true)

    try{
      const response =await fetch(url)
      const tours=await response.json()
      setloading(false);
      settours(tours)
    }catch(error){
      setloading(false)
      console.log(error)
    }

    

  }
  useEffect(()=>{
    fetchtours()
  },[])


  if(loading)
  {
    return (

    <>
      <Loading />
    </>
  )
}
 
  return(
    <>
      <Tours tours={tours} />
    </>
  )
 
}
export default App;
