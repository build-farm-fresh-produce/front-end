import React, { useState } from 'react';
import { axiosWithAuth } from '../tools/axiosAuth';

import styled from 'styled-components';
import Load from './Loader';
import '../App.css';


const FormWrap = styled.div`
background-color: rgba(0,0,0,.3);
color: white;
text-shadow: 2px 2px 2px #111;
width: 20em;
border-radius: 8px;
height: 35em;
margin: 0 auto;
padding: 3%;
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
    margin-top: 5em;
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

const Registration = (props) => {

    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
        
    });

    const [loading, setLoading] = useState({
        isLoading: false
    })

    const [validation, setValidation] = useState({
        usernameVal: false,
        passwordVal: false,
    })

    const register = e => {
        e.preventDefault();
        if(validation.usernameVal || validation.passwordVal || credentials.username === '' || credentials.password==='') {
            setValidation({...validation,usernameVal: true,passwordVal: true})
            
        }else {
            axiosWithAuth().post('https://farm-fresh-produce-api.herokuapp.com/api/auth/login', credentials)
            .then(res => {
            localStorage.setItem('token', res.data.token);
            console.log(res)
            console.log(res.data.token)
            props.history.push('/login');
        
            })
            setLoading({...loading,isLoading: true})
            setTimeout(()=> {
                setLoading({...loading,isLoading: false})
            },3000)
            console.log(credentials)
        }
    }
    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
        console.log(credentials)
    }

    const validateUserName = (e) => {

        if(credentials.username === '') {
            setValidation({...validation,usernameVal: true})
        }else {
            setValidation({...validation,usernameVal: false})
        }
        
        
    }

    const validatePassword = (e) => {

        if(credentials.password === '') {
            setValidation({...validation,passwordVal: true})
        }else{
            setValidation({...validation,passwordVal: false})

        }
        
        
    }

    return (
        <div className='field'>
            

            { loading.isLoading ? <FormWrap><h4>Logging in...</h4> <Load /> </FormWrap>   :
            <FormWrap>
                <h4>Register here to get access to farm fresh produce!</h4>
            <form onSubmit={register}>
                <input 
                name='username'
                value={credentials.username}
                type="text"
                placeholder='Username'
                onChange={handleChange}
                onBlur ={validateUserName}/>
                {validation.usernameVal ? <p>You need a username!</p> : '' }

            {/* <input 
                name='email'
                value={credentials.email}
                type="text"
                placeholder='Email'
                onChange={handleChange}/> */}

                <input 
                name='password'
                value={credentials.password}
                type="text"
                placeholder='Password'
                onChange={handleChange}
                onBlur ={validatePassword}/>
                {validation.passwordVal ? <p>You need a password!</p> : '' }

                <button type='submit'>Register!</button>
            </form>
            </FormWrap> }

            
            

            

            
            
        </div>
    );
}

export default Registration;