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
        <Card>
            <form>
            <InputHints
    placeholders={[
        'Enter your name here...',
    ]} />
                <Input>
                type={values.showPassword ? "text" : "password"}
                onChange={handlePasswordChange("password")}
                value={values.password}
                endAdornment={
                <InputAdornment position="end">
                    <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                </InputAdornment>
                }
                </Input>
            </form>
        
        </Card>
        
    </Container>

);
};

export default Login;

const Container = styled.div`
    width: 300px;
    margin: auto auto;

`
