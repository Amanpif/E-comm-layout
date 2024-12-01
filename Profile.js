import React, { useState,useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';



const Profile = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    useEffect(()=>{
        const auth = localStorage.getItem('users');
        setName(JSON.parse(auth).name)
        setEmail(JSON.parse(auth).email)
        setPassword(JSON.parse(auth).password)

    },[name])


    



    return(
        <div>
            <h1>your profile</h1>
            
                {/* {
                    details.map((user,index)=>
                    <ul key={user._id}>
                    <li>{user.name}</li>
                    <li>{user.email}</li>
                    <li>{user.password}</li>
                    </ul>
                    
                    
                    )
                }
                 */}
                 <li>name : {name}</li>
                 <li>email :{email}</li>
                 <li>password: {password}</li>

        </div>
    )

}


export default Profile;