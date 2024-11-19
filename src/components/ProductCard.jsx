import React, { useEffect, useState } from 'react';

const ProductCard = ({addToCart}) => {
    const[products,setProducts]=useState([]);

    useEffect(()=>{
        fetchData() 
    },[])

    const fetchData = async()=>{
        try {
            const res = await fetch('https://fakestoreapi.com/products');
            const jsonData = await res.json(); // [{}]
            setProducts(jsonData)
        } catch (error) {
            console.log(error);
            
        }
    }
    return (
        <div className='product-cardList'>
            {products.map((product)=>{
                return(
                    <>
                    <div key={product.id} className='product-card'>
                        <img src={product.image} alt={product.title} />
                        <h3>{product.title}</h3>
                        <p>₹ {product.price}</p>
                        <button className='Add-btn' onClick={() => addToCart(product)}>Add To Cart</button>
                    </div>
                    </>
            )})}
        
        </div>
    );
};

export default ProductCard;