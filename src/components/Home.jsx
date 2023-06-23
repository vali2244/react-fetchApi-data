
import "./home.css"
import  Axios  from "axios"

import React, { useEffect, useState } from 'react'
import Cards from "./Cards"
import Loader from "./Loader"

const Home = () => {

    const[products,Setproducts]=useState([])
    const[Load,SetLoad]=useState(false)


const fetchData=async()=>{
SetLoad(true)
    await Axios.get('https://dummyjson.com/products').then((res)=>{
console.log(res.data.products)
Setproducts(res.data.products)
    }).catch((error)=>console.log(error))
SetLoad(false)
}

useEffect(()=>{
fetchData()
},[])



  return (
    <>
    {Load ? <Loader/> :
    <div className="box">

      {products.map((ele=> <Cards img= {ele.thumbnail} title= {ele.title} price= {ele.price}/>))}


    </div>}
    </>
  )
}

export default Home
