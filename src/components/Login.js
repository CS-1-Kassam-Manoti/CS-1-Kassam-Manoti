import React from "react";
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

return (
	<Router>
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
                            <input type="submit" value="submit" />
                        </Submit>
                        <RegisterText>
                            <h6>Already Have an Account? <Link to="/login">Login</Link></h6>
                        </RegisterText>
                    </form>
                </LoginContainer>

                    
            </Container>
        </Router>

);
};

export default Login;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`
const LoginContainer = styled.div`
    width: 400px;
    height: 400px;
    margin: auto;
    padding-top: 50px;
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
        margin: 15px;
        height: 100%;

        input{
            width: 200px;
            margin-right: 10px;
            font-size: 17px;
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
    margin-top: 20px;
    padding: 20px 0 5px 0;
    height: 30px;

    input{
        height: 30px;
        padding: 0;
        width: 100px !important;
        margin-bottom: 5px;
        background: transparent;
        border: 1px solid blue;
        border-radius: 4px;
    }
`
const RegisterText = styled.div`
    text-align: center;
    font-size: 16px;

    h6{
        a{
            text-decoration: underline;
            cursor: pointer;
        }
    }
`