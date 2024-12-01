import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem('users');
        if (auth) {
            navigate('/')

        }
    },[])
    const collectData = async () => {
        console.warn(name, email, password)
        let result = await fetch('http://localhost:450/register', {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.warn(result);
        localStorage.setItem("users", JSON.stringify(result));
        if (result) {

            navigate('/')

        }
    }

    return (
        <div className="inputbox">
            <h1>Register</h1>
            <input type="text" placeholder="enter name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={collectData}>Sign in</button>
        </div>
    )
}

export default Signup;