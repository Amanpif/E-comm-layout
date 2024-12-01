import React ,{useEffect} from 'react';
import {useParams} from 'react-router-dom';


const Update=()=>{
    const [name,setName]=React.useState('');
    const [price,setPrice]=React.useState('');
    const [userid,setUserid]=React.useState('');
    const params=useParams();

    useEffect(()=>{
        console.log(params)
        getproductdetails();
    },[])

    const getproductdetails = async()=>{
        console.warn(params);
        let result=await fetch(`http://localhost:450/product/${params.id}`);
        result= await result.json();
        setName(result.name)
        setPrice(result.price)
        setUserid(result.userid)

    }
    
    const updateProduct= async ()=>{
        console.warn(name,price,userid)
        let result=await fetch(`http://localhost:450/product/${params.id}`,{
        method:'Put',
        body: JSON.stringify({ name, price, userid }),
        headers:{
            'Content-Type':"application/json"
        }
    })
    result= await result.json();
    console.log(result);



      
}

        
    

    return(
        <div className='product-input'>
            <h1>Update product</h1>
            <input type="text" placeholder='enter your name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
            
            <input type="number" placeholder='enter price'value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
            
            <input type="number" placeholder='enter user id'value={userid} onChange={(e)=>{setUserid(e.target.value)}}/>
            <button onClick={updateProduct}>Update</button>

        </div>
    )
}
export default Update;
