import React from 'react'
import styled from 'styled-components'
import app from '../firebase'


function Home() {

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