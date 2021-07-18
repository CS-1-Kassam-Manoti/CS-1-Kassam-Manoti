import React, { useState } from 'react'
import styled from 'styled-components'
import app from '../firebase'
import { useAuth } from '../contexts/AuthContext'
import {useHistory, Link} from 'react-router-dom'
import ErrorIcon from '@material-ui/icons/Error'
import Header from './Header'


function Home() {
    const [error, setError] = useState("")
    
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    
    console.log(JSON.stringify(currentUser))
    const email = currentUser.email
    const name = email.substring(0, email.indexOf("." || '@'));
    


    return (
        <Container>
            <Header/>
            { 
                    error && 
                        <ErrorComponent>
                            <ErrorIcon className="error_icon"/>
                            {error}
                        </ErrorComponent>
                    }
            
            <Button> 
                <button>
                    <Link to="/update-profile">Update Profile</Link>
                </button>
            </Button>

            {/* {JSON.stringify(currentUser)} */}
            
        </Container>
    )
}

export default Home

const Container = styled.div`

`
const Button = styled.div`

`
const ErrorComponent = styled.div`

`
