import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Productlist = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();

    }, [])


    const getProducts = async () => {
        let result = await fetch('http://localhost:450/products');
        result = await result.json();
        setProducts(result);
        
    }
    const deleteproduct= async (_id)=>{
        const result=await fetch(`http://localhost:450/product/${_id}`,{
            method:'Delete'
        });
        result=await result.json();
        if(result)        
        getProducts();
        
    
 
        
        


    };

    const searchHandle= async (event)=>{
        console.warn(event.target.value)
        let key=event.target.value;
        if(key){
        let result=await fetch(`http://localhost:450/search/${key}`)
        result=await result.json();
        if(result){
            setProducts(result)
        }}
        else{
            getProducts();
        }
    }
        
    
    

    return (
        <div className='product-list'>
        list
        <input type="text" placeholder="Search product" className='search-box' 
        onChange={searchHandle} />
            <ul>
                <li>s.no</li>
                <li>Name</li>
                <li>price</li>
                <li>userid</li>
                <li>operation</li>
            </ul>
            {   
                products.length>0 ? products.map((item,index)=>
                    <ul key={item._id}>
                <li>{index+1}</li>
                <li>{item.name}</li>
                <li>${item.price}</li>
                <li>{item.userid}</li>
                <li><button onClick={()=>deleteproduct(item._id)}>DELETE</button>
                <Link to={"/update/"+item._id}>Update</Link>
                </li>
            
            </ul>


                )
                : <h1>no result found</h1>
            }
            
        </div>
    )
}

export default Productlist;