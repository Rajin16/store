import React ,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {Row,Col,Image} from 'react-bootstrap'

function Details() {
  const Params=useParams()
  const [prod,setProd]=useState([])

  const fetchData=async ()=>{
     await fetch("/prodect.json").then(res=>res.json()).then(res=>setProd(res))
  }
   useEffect(()=>{
    fetchData()
  },[])
  const details = prod.find((item)=>item.id==Params.id);

  return (
    <div>
{details?
<Row>
  <Col>
  <Image className='img'  src={details.image}></Image>


  </Col>
  <Col>
  <h1>
    {details.title}
  </h1>
  <p>{details.category}</p>
  <p>{details.description}</p>
  </Col>
  <Col>
  <h3>{details.price}</h3>
  <p>{details.rating.rate}({details.rating.count})</p>
  </Col>
</Row>
:<h1>cannot get Product</h1>}





    </div>
  )
}

export default Details