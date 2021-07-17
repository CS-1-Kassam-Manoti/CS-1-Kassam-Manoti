import React from 'react'
import styled from 'styled-components'
import app, {auth} from '../firebase'
import { useAuth } from '../contexts/AuthContext'


function Home() {

    
    const { signup, currentUser } = useAuth()

    const Signoutfunction = () => {
        const signout = app.auth().signOut()

        console.log( signout && 'signout working')

        return signout
    }

    


    return (
        <Container>
            <Header>
            This is the home page
            </Header>
            <Button>
                <button onClick={Signoutfunction}>SignOut</button>
            </Button>

            {
                currentUser.providerData[0].displayName
            }
        </Container>
    )
}

export default Home

const Container = styled.div`

`
const Header = styled.div`

`
const Button = styled.div`

`