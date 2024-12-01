import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const Nav = () => {
    const auth = localStorage.getItem('users');
    const navigate = useNavigate();
    const logout = () => {
        // warn("do you want to logout")
        localStorage.clear();
        navigate('/Signup')

    }

    return (
        <div>
            {auth ? <ul className='nav-ul'>
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Products</Link></li>
                {/* <li><Link to="/update">Update Products</Link></li> */}
                <li><Link to="/profile">Profile</Link></li>
                <li><Link onClick={logout} to="/Signup">Logout({JSON.parse(auth).name})</Link></li>
                {/* <li>{auth ?<Link onClick={logout} to="/Signup">logout</Link>:
                <Link to="/Signup">Signup</Link>}</li>
                <li><Link to="/login">Login</Link></li> */}



            </ul>
                :
                <ul className='nav-ul'>
                    <li><Link to="/Signup">Signup</Link></li>
                    <li><Link to="/login">Login</Link></li>

                </ul>
            }
        </div>
    )
}

export default Nav;