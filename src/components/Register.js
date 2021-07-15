import styled from 'styled-components'


function Register() {
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
    width: 100%;
    height: 100vh;
    display: flex;
`
const RegisterContainer = styled.div`
    width: 400px;
    height: 400px;
    margin: auto;
    padding-top: 50px;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    h3{
        text-align: center;
        margin-bottom: 10px;
        
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
const Login = styled.div`
    text-align: center;
    font-size: 16px;
`