import React, { useState } from 'react';
import { axiosWithAuth } from '../tools/axiosAuth';
import styled from 'styled-components';
import Load from './Loader';
import cows from '../img/cows.jpg';
import '../App.css';


const FormWrap = styled.div`

width: 100%;
height: 35em;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
h4 {
    font-size: 2.2em;
    text-align: center;
    font-family: 'Gelasio', serif;
    
}
form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    input {
        margin: 1.5em 0em;
        height: 2em;
        font-size: 1.3em;
        border-radius 8px;
        font-family: 'Gelasio', serif;
    }
}
button {
    font-size: 1.3em;
    padding: 3%;
    border-radius: 8px;
    font-family: 'Gelasio', serif;
    
    @media(min-width: 800px) {
        padding: 2%;
    }
}
`

const Login = (props) => {

    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });

    const [loading, setLoading] = useState({
        isLoading: false
    })

    const [validation, useValidation] = useState({
        usernameVal: false,
        passwordVal: false,
    })

    const login = e => {
        e.preventDefault();
        axiosWithAuth().post('https://farm-fresh-produce-api.herokuapp.com/api/auth/login', credentials)
        .then(res => {
        localStorage.setItem('token', res.data.token);
        console.log(res)
        console.log(res.data.token)
        props.history.push('/Products');
    
        })
        setLoading({...loading,isLoading: true})
        setTimeout(()=> {
            setLoading({...loading,isLoading: false})
        },3000)
        console.log(credentials)
    }

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
        console.log(credentials)
    }

    const handleBlur = (e) => {
        
    }

    return (
        <div className='pasture'>
            

            { loading.isLoading ? <FormWrap><h4>Logging in...</h4> <Load /> </FormWrap>   :
            <FormWrap>
                <h4>Welcome! Please log in to proceed.</h4>
            <form onSubmit={login}>
                <input 
                name='username'
                value={credentials.username}
                type="text"
                placeholder='Username'
                onChange={handleChange}/>

                <input 
                name='password'
                value={credentials.password}
                type="text"
                placeholder='Password'
                onChange={handleChange}/>

                <button type='submit'>Log In!</button>
            </form>
            </FormWrap> }

            
            

            

            
            
        </div>
    );
}

export default Login;