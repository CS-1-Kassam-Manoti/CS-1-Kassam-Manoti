import React, {useRef} from "react";
import styled from 'styled-components'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'



import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import Card from "@material-ui/core/Card";
import InputHints from "react-input-hints";

const Login = () => {


    const handleSubmit = () => {

    }

return (
	
            <Container>
                <LoginContainer>
                    <h3>Login</h3>
                    <hr/>
                    <form action="">
                        
                        <Email>
                            <label htmlFor="email">Email Address</label>
                            <input id="email" type="email"  />
                        </Email>
                        <Password>
                            <label htmlFor="password">Password</label>
                            <input id="password" type="email"  />
                        </Password>
                        
                        <Submit>
                            <button type="submit" value="submit" onClick={handleSubmit}>Submit</button>
                        </Submit>
                        
                    </form>
                    <RegisterText>
                            <h6>Already Have an Account? <Link to="/register">Register</Link></h6>
                    </RegisterText>
                </LoginContainer>

                    
            </Container>
        

);
};

export default Login;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

`
const LoginContainer = styled.div`
    max-width: 450px;
    margin: auto;
    padding: 50px 0;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    h3{
        text-align: center;
        margin-bottom: 10px;
        font-size: 24px;
    }

    hr{
        margin: 0 11%;
    }

    form{
        margin:  15px;

        input{
            width: 250px;
            margin-right: 10px;
            font-size: 17px;
            cursor: text;
            border: none;
            border-bottom: 1px solid grey;

            :focus{
            outline: none;
        }
        }
        

        label{
            display: flex;
            align-items: center;
            margin-left: 10px;
        }
    }
`
const Email = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    height: 30px;
`
const Password = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    height: 30px;
`
const Submit = styled.div`
    text-align: center;
    margin: 20px 10px 0 10px;
    padding: 20px 0 5px 0;
    height: 30px;

    button{
        height: 30px;
        padding: 0;
        margin-bottom: 5px;
        background: transparent;
        border: 1px solid blue;
        border-radius: 4px;
        width: 100%;
        cursor: pointer;
    }
`
const RegisterText = styled.div`
    text-align: center;
    font-size: 17px;

    h6{
        a{
            text-decoration: underline;
            cursor: pointer;
        }
    }
`