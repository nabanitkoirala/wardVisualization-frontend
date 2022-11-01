import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CryptoJS from 'crypto-js';
import { useNavigate } from 'react-router-dom';
import './styles.scss';




const FormHeader = props => (
    <h2 id="headerTitle">{props.title}</h2>
);


const Form = props => (
    <div>
        <FormInput description="Username" placeholder="Enter your username" type="text" />
        <FormInput description="Password" placeholder="Enter your password" type="password" />
        <FormButton title="Log in" />
    </div>
);

const FormButton = props => (
    <div id="button" className="row">
        <button onClick={props.onClick} >{props.title}</button>
    </div>
);

const FormInput = props => (
    <div className="row">
        <label>{props.description}</label>
        <input type={props.type}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder} />
    </div>
);
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
            {/* <input type="text" placeholder="username" name='email' value={user.email} onChange={handleChange} />
            <input type="password" placeholder="password" name='password' value={user.password} onChange={handleChange} />
            <button type='button' onClick={handleLogin} >Login</button> */}
            <div className="mainContainer" >
                <div id="loginform">
                    <FormHeader title="Login" />
                    <div>
                        <FormInput description="Username" placeholder="Enter your username" type="text" name='email' value={user.email} onChange={handleChange} />
                        <FormInput description="Password" placeholder="Enter your password" type="password" name='password' value={user.password} onChange={handleChange} />
                        <FormButton title="Log in" onClick={handleLogin} />
                    </div>

                </div>
            </div>





        </>
    )
}


export default Login;