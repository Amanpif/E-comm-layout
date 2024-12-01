import React from 'react';


const AddProduct=()=>{
    const [name,setName]=React.useState('');
    const [price,setPrice]=React.useState('');
    const [userid,setUserid]=React.useState('');
    const [err,setErr]=React.useState(false);
    const addproduct= async ()=>{
        console.warn(name,price,userid)
        if(!name || !price){
            setErr(true);
            return(false)
        }
        const userID=JSON.parse(localStorage.getItem('users'));
        console.warn(userID._id);
        let result=await fetch("http://localhost:450/add-products",{
            method: 'post',
            body: JSON.stringify({ name, price, userid }),
            headers: {
                'Content-Type': 'application/json'
            }

    });
    result=await result.json();
    console.warn(result); 
}

    return(
        <div className='product-input'>
            <h1>Add product</h1>
            <input type="text" placeholder='enter your name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
            {err && !name && <span className='invalid-input'>Enter valid name</span>}
            <input type="number" placeholder='enter price'value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
            {err && !price && <span className='invalid-input'>Enter valid price</span>}
            <input type="number" placeholder='enter user id'value={userid} onChange={(e)=>{setUserid(e.target.value)}}/>
            <button className='btn' onClick={addproduct}>Add</button>

        </div>
    )
}
export default AddProduct;