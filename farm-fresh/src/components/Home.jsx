import React from 'react';
import styled from 'styled-components';
import  { Route, Link, Redirect } from 'react-router-dom';
import'../App.css'


const Splash = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 98vh;

h4 {
    margin-top: 10%;
    background-color: rgba(0,0,0,.7);
    padding: 3%;
    color: white;
}
button {
    width: 8em;
    margin: 2em;
}

.buttons {
    display: flex;
    justify-content: space-evenly;
    border: 1px solid;
    margin: 4em 0em;
    background-color: white;

    .logins {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-right: 1px solid black;
    }
    .registers {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

}
`

const Home = () => {
    return (
        <Splash className='splash'>
            <h4>You've come to the best place for stuff like Veggies!</h4>
            <div className="buttons">
                <div className="logins">
                    <h5>Login</h5>
                    <Link to='/login-user'><button>As User</button></Link>
                    <Link to='/login-farmer'><button>As Farmer</button></Link>
                    
                </div>
                <div className="registers">
                    <h5>Register</h5>
                    <Link to='/register-user'><button>As User</button></Link>
                    <Link to='/register-farmer'><button>As Farmer</button></Link>
                    
                </div>
                    
            </div>
        </Splash>
    );
}

export default Home;
