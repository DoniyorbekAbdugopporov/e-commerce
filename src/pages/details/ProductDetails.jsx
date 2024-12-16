import { useFetch } from '@/hooks/useFetch'
import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const {id} = useParams()

    const {data} = useFetch(`/product/get/${id}`)
    console.log(data);
    
  return (
    <div className="container">
        <p>Product Details</p>
        <img src={data?.image} alt="iamge" />
    </div>
  )
}

export default ProductDetails