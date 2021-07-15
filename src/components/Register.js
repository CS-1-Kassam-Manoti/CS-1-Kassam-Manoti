import styled from 'styled-components'


function Register() {
    return (
        <RegisterParentComponent>
            Register is me
        </RegisterParentComponent>
    )
}

export default Register

const RegisterParentComponent = styled.div`
    height: 300px;
    background-color: black;
`