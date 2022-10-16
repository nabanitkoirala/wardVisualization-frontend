import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CryptoJS from 'crypto-js';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const [userInfoAvailable, setUserInfoAvailable] = useState(false)
    const history = useNavigate();
    const handleChange = (e) => {
        setUser({
            ...user, [e.target.name]: e.target.value
        })
    }
    console.log("This is user info available", userInfoAvailable)
    const handleLogin = () => {
        axios.post('http://localhost:5000/api/v1/auth/login', user)
            .then(function (res) {
                const secretdata = CryptoJS.AES.encrypt(
                    res.data.token,
                    process.env.REACT_APP_SECRET_ENCRYPT_KEY
                );
                localStorage.setItem("UserLoginInformation", secretdata);
                setUserInfoAvailable(true)
                history('/dashboard')

            })
            .catch(function (error) {
                console.log(error);
            });

    }

    // useEffect(() => {
    //     const auth = localStorage.getItem("UserLoginInformation");
    //     if (auth) {
    //         console.log("entered")
    //         history('/dashboard')
    //     }
    // }, [userInfoAvailable])


    return (
        <>
            <input type="text" placeholder="username" name='email' value={user.email} onChange={handleChange} />
            <input type="password" placeholder="password" name='password' value={user.password} onChange={handleChange} />
            <button type='button' onClick={handleLogin} >Login</button>

        </>
    )
}


export default Login;