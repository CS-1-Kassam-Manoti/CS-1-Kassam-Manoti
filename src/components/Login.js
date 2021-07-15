import React from "react";
import styled from 'styled-components'
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import Card from "@material-ui/core/Card";
import InputHints from "react-input-hints";

const Login = () => {
const [values, setValues] = React.useState({
	password: "",
	showPassword: false,
});

const handleClickShowPassword = () => {
	setValues({ ...values, showPassword: !values.showPassword });
};

const handleMouseDownPassword = (event) => {
	event.preventDefault();
};

const handlePasswordChange = (prop) => (event) => {
	setValues({ ...values, [prop]: event.target.value });
};

return (
	<Container>
            <RegisterContainer>
                <h3>Register</h3>
                <hr/>
                <form action="">
                    <Name>
                        <label htmlFor="name">Name</label>
                        <input id="name" type="text"  /> 
                    </Name>
                    <Email>
                        <label htmlFor="email">Email Address</label>
                        <input id="email" type="email"  />
                    </Email>
                    <Password>
                        <label htmlFor="password">Password</label>
                        <input id="password" type="email"  />
                    </Password>
                    <ConfirmPassword>
                        <label htmlFor="confirm_password">Confirm Password</label>
                        <input id="confirm_password" type="password"  />
                    </ConfirmPassword>
                    <Submit>
                        <input type="submit" value="submit" />
                    </Submit>
                    <Register>
                        <h6>Already Have an Account? <a Link="">Login</a></h6>
                    </Register>
                </form>
            </RegisterContainer>
        </Container>

);
};

export default Login;

const Container = styled.div`
    /* border: 1px solid black; */
    width: 100%;
    height: 100vh;
    margin: auto 0;
    display: flex;
`
const RegisterContainer = styled.div`
    width: 400px;
    height: 400px;
    margin: auto;
    padding-top: 50px;
    border-radius: 15px;
    /* background-color: grey; */
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    h3{
        text-align: center;
        /* border-bottom: 1px solid black; */
        
    }

    hr{
        margin: 0 11%
    }

    form{
        margin: 15px;
        height: 100%;
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
    margin-top: 20px;
    padding-top: 20px;
    height: 30px;
`
const Register = styled.div`
    text-align: center;
`
