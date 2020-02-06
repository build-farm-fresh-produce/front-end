import React from 'react';
import styled from 'styled-components';
import  { Route, Link, Redirect } from 'react-router-dom';
import'../App.css'


const Splash = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;

.banner {
    margin-top: 10%;
    background-color: rgba(0,0,0,.7);
    padding: 3%;
    color: white;
}


.buttons {
    display: flex;
    justify-content: space-evenly;
    background-color: rgba(0,0,0,.7);
    border: 1px solid;
    margin: 4em 0em;
    

    .login {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-right: 1px solid black;
    }
    .register {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    button {
        background-color: rgb(17, 56, 121);
        border-color: rgb(17, 56, 121);
        color: white;
        width: 8em;
        margin: 2em;
        padding: 3%;
    
    }

}

`

const Home = () => {
    return (
        <Splash className='splash'>
            <div className="banner">
            <h2>Welcome to Freshist!</h2>
            <h5>Your best choice for farm-fresh produce.</h5>
            </div>
            
            <div className="buttons">
                <div className="login">
                    
                    <Link to='/login-user'><button>Log In</button></Link>
                    
                    
                </div>
                <div className="register">
                    
                    <Link to='/register-user'><button>Register</button></Link>
                    
                    
                </div>
                    
            </div>
        </Splash>
    );
}

export default Home;
