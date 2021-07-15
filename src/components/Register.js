import styled from 'styled-components'


function Register() {
    return (
        <Container>
            <RegisterContainer>
                <h3>Register</h3>
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
                    <Login>
                        <h6>Already Have an Account? <a Link="">Login</a></h6>
                    </Login>
                </form>
            </RegisterContainer>
        </Container>
    )
}

export default Register

const Container = styled.div`
    border: 1px solid black;
    width: 100%;
    height: 100vh;
    margin: auto 0;
    display: flex;
`
const RegisterContainer = styled.div`
    width: 350px;
    height: 400px;
    margin: auto;
    background-color: grey;

    h3{
        text-align: center;
        border: 1px solid black;
    }

    form{
        border: 1px solid black;
        margin: 0 15px;
    }
`
const Name = styled.div`
    display: flex;
    justify-content: space-between;
`
const Email = styled.div`
    display: flex;
    justify-content: space-between;
`
const Password = styled.div`
    display: flex;
    justify-content: space-between;
`
const ConfirmPassword = styled.div`
    display: flex;
    justify-content: space-between;
`
const Submit = styled.div`
    text-align: center;
    margin-top: 20px;
`
const Login = styled.div`
    text-align: center;
`