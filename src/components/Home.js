import React, { useState } from 'react'
import styled from 'styled-components'
import app from '../firebase'
import { useAuth } from '../contexts/AuthContext'
import {useHistory, Link} from 'react-router-dom'
import ErrorIcon from '@material-ui/icons/Error';


function Home() {
    const [error, setError] = useState("")
    
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    const handleLogout = async () => {
        setError('')

        try{
            await logout()
            history.push('/login')
        }
        catch{
            setError('Failed to log out')
        }
    }

    
    console.log(JSON.stringify(currentUser))
    const email = currentUser.email
    const name = email.substring(0, email.lastIndexOf("@"));


    return (
        <Container>
            <Header>
            { 
                    error && 
                        <ErrorComponent>
                            <ErrorIcon className="error_icon"/>
                            {error}
                        </ErrorComponent>
                    }
            This is the home page
            </Header>
            <Button>
                <button onClick={handleLogout} >SignOut</button>
            </Button>
            <Button> 
                <button>
                    <Link to="/update-profile">Update Profile</Link>
                </button>
            </Button>

                {currentUser.displayName ? currentUser.displayName : name}
            
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
const ErrorComponent = styled.div`

`
