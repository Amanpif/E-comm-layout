import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Login=()=>{
    
    const navigate=useNavigate();
    const [email,setEmail]=React.useState('');
    const [name,setName]=React.useState('');
    const [password,setPassword]=React.useState('');
    useEffect(()=>{
        const auth=localStorage.getItem("users");
        if(auth){
            navigate("/")
        }
    },[])
    const handlelogin= async ()=>{
        console.warn("name-email-password:" ,name,email,password)
        let result=await fetch("http://localhost:450/login",{
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            }

        });
        result=await result.json();
        console.warn(result);
        if(result.name){
            localStorage.setItem("users",JSON.stringify(result));
            navigate('/')

        }else{
            alert("please enter correct details")
        }
    }

    return(
        <div className='login'>
            <h1>Login page</h1>
            <input type="text" placeholder="enter name"  
            onChange={(e)=>setName(e.target.value)} value={name}/>
            <input type="email" placeholder="enter email" 
            onChange={(e)=>setEmail(e.target.value)} value={email} />
            <input type="password" placeholder="enter password" 
            onChange={(e)=>setPassword(e.target.value)} value={password} />
            <button onClick={handlelogin}>Sign in</button>
        </div>
    )
}
 export default Login;