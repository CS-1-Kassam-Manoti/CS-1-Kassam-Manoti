import React from 'react'
import styled from 'styled-components'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'


import { useAuth } from '../contexts/AuthContext'

function Header() {

    
    const { currentUser, logout } = useAuth()
    return (
        <Container>
            <Logo>
                <img src='/images/logo.png' /> 
            </Logo>
            <Profile>
                <UserIcon>
                    {
                        currentUser.photoURL ? 
                        <img src={currentUser.photoURL}></img> :
                        <AccountCircleIcon className="icon"/>
                    }
                    
                </UserIcon>
                <UserName>
                    <h5>{currentUser.displayName && currentUser.displayName}</h5>
                </UserName>
            </Profile>
        </Container>
    )
}

export default Header

const Container = styled.section`
    height: 60px;
    padding: 5px 3px;
    border: 1px solid grey;
    display: flex;
    justify-content: space-between;
`
const Logo = styled.div`
    width: 60px;
    height: 60px; 
    overflow: hidden;
    display: flex;
    /* align-items: center;
    justify-content: center; */
    border: 1px solid grey;
    border-radius: 15px;

    img{
        width: 100%;
        transform: scale(1.8);
        /* overflow: hidden; */

    }
`
const Profile = styled.div`
    width: 20%;
    border: 1px solid grey;
    display: flex;
    align-items: center;

`
const UserIcon = styled.div`
    .icon{
        width: 30px;
        border: 1px solid grey;
        height: 30px;
    }
`
const UserName = styled.div`
    border: 1px solid grey;
    display: flex;
    align-items: center;
    justify-content: center;
`