import React,{useState,useEffect} from 'react'
import {Row,} from 'react-bootstrap'
import Pcard from './Pcard'

function Home() {
    const[prod,setProd]=useState([])
    const fetchData=async ()=>{
        await fetch("/prodect.json").then(res=>res.json()).then(res=>setProd(res))
    }
    useEffect(()=>{
      fetchData()
    },[])
  return (
    <div>
      <Row>
  {prod.map(item=>{
    return(
< Pcard item={item}/>)

    
  })}
      </Row>

    </div>
  );
}

export default Home