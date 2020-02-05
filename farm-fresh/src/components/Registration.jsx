import React, { useState } from 'react';
import { axiosWithAuth } from '../tools/axiosAuth';

import FarmForm from './FarmForm';
import styled from 'styled-components';
import Load from './Loader';
import '../App.css';



const FormWrap = styled.div`
background-color: rgba(0,0,0,.3);
color: white;
text-shadow: 2px 2px 2px #111;
width: 20em;
border-radius: 8px;
height: 100%;
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
    margin: 5.5em 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    input {
        
        height: 2em;
        font-size: 1.3em;
        border-radius 8px;
        font-family: 'Gelasio', serif;
    }
    .userInput {
        margin: 1.5em 0;
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
        is_farmer: 'n',
        
    });


    const [loading, setLoading] = useState({
        isLoading: false
    })

    const [validation, setValidation] = useState({
        usernameVal: false,
        passwordVal: false,
        isFarmer: false,
    })

    const [farmDetails, updateFarmDetails]= useState({
        farm_name: '',
        owner_id:  0,
        address: '',
        city: '',
        state: '',
        zipcode: '',
        phone_number: '',
        email: '',
    })
    const [newFarms, addNewFarms]= useState();

    const register = e => {
        e.preventDefault();
        if(validation.usernameVal || validation.passwordVal || credentials.username === '' || credentials.password==='') {
            setValidation({...validation,usernameVal: true,passwordVal: true})
            
        }else if(validation.isFarmer){
            axiosWithAuth().post('https://farm-fresh-produce-api.herokuapp.com/api/auth/register', credentials)
            .then(res => {
            // localStorage.setItem('token', res.data.token);
            
            console.log('res.data.id',res.data.id)
           updateFarmDetails({farmDetails,owner_id: res.data.id});
            console.log('owner_id',farmDetails.owner_id);

            axiosWithAuth().post('https://farm-fresh-produce-api.herokuapp.com/api/farms', newFarms)
            .then(response => {
                console.log(response)
                localStorage.setItem('farmId', response.data);
            })
            .catch(error => {
                console.log(error)
            })
            
            
    
            })
            .catch(err => {
                console.log(err);
            })

            

            setLoading({...loading,isLoading: true})
            setTimeout(()=> {
                setLoading({...loading,isLoading: false})
            },2000)
            // props.history.push('/login-user');

        }else {
            axiosWithAuth().post('https://farm-fresh-produce-api.herokuapp.com/api/auth/register', credentials)
            .then(res => {
            localStorage.setItem('token', res.data.token);
            props.history.push('/login-user');
            
            
            console.log(credentials)
            
            })
            setLoading({...loading,isLoading: true})
            setTimeout(()=> {
                setLoading({...loading,isLoading: false})
            },2000)
        }
    }
    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
        console.log(credentials)
        console.log(newFarms)
    }

    const validateUserName = (e) => {

        if(credentials.username === '') {
            setValidation({...validation,usernameVal: true})
        }else {
            setValidation({...validation,usernameVal: false})
        }
        
        
    }

    const handleCheck = (e) => {
        setValidation({...validation,isFarmer: !validation.isFarmer})
        setCredentials({...credentials,is_farmer: 'y'})
        console.log(credentials)
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
                className='userInput'
                value={credentials.username}
                type="text"
                placeholder='Username'
                onChange={handleChange}
                onBlur ={validateUserName}/>
                {validation.usernameVal ? <p>You need a username!</p> : '' }
                
            
                <input 
                name='password'
                value={credentials.password}
                type="password"
                placeholder='Password'
                onChange={handleChange}
                onBlur ={validatePassword}/>
                {validation.passwordVal ? <p>You need a password!</p> : '' }
                <h4>Are you a farmer?</h4>
                <input 
                name='isFarmer'
                value={credentials.isFarmer}
                type="checkbox"
                onChange={handleCheck}/>
                {validation.isFarmer ? <FarmForm 
                                        newFarms={newFarms}
                                        addNewFarms={addNewFarms}
                                        farmDetails={farmDetails}
                                        updateFarmDetails={updateFarmDetails}/> : '' }
                <button type='submit'>Register!</button>
            </form>
            
            </FormWrap> }

            
            

            

            
            
        </div>
    );
}

export default Registration;