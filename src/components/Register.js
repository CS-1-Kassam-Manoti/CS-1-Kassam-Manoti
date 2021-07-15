import React, { useRef, useState } from 'react';
import styled from 'styled-components' //installed via "npm install styled-components"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom' //installed via "npm install react-router-dom"
import Login from './Login'
import { useAuth } from '../contexts/AuthContext'


function Register() {

    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    const { register } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        if(passwordRef.current.value !== confirmPasswordRef.current.value){
            return setError('Passwords do not match')
        }

        try{
            setError('')
            setLoading(true)
            register(emailRef.current.value, passwordRef.current.value)
        } catch{
            setError('Failed to create an account')
        }

        setLoading(false)
    }

    return (        
            <Container>
                <RegisterContainer>
                    <h3>Register</h3>
                    <hr/>
                    {error && alert({error})}
                    <form onSubmit={handleSubmit} >
                        <Name>
                            <label htmlFor="name">Name</label>
                            <input id="name" type="text"  ref={nameRef} /> 
                        </Name>
                        <Email>
                            <label htmlFor="email">Email Address</label>
                            <input id="email" type="email" ref={emailRef}  />
                        </Email>
                        <Password>
                            <label htmlFor="password">Password</label>
                            <input id="password" type="password" ref={passwordRef}  />
                        </Password>
                        <ConfirmPassword>
                            <label htmlFor="confirm_password">Confirm Password</label>
                            <input id="confirm_password" type="password" ref={confirmPasswordRef}  />
                        </ConfirmPassword>
                        <Submit>
                            <button disabled={loading} type="submit" value="submit" onClick={handleSubmit}>Submit</button>
                        </Submit>

                    </form>
                    <LoginText>
                        <h6>Already Have an Account? <Link to="/login">Login</Link></h6>
                    </LoginText>
                </RegisterContainer>

                    
            </Container>
        
        
    )
}

export default Register

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
const RegisterContainer = styled.div`
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
            font-size: 15px;
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
const Name = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    height: 30px;
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
const ConfirmPassword = styled.div`
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
const LoginText = styled.div`
    text-align: center;
    font-size: 17px;

    h6{
        a{
            text-decoration: underline;
            cursor: pointer;
        }
    }
`