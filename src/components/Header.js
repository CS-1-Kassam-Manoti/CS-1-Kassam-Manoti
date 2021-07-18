import React, { useState } from 'react'
import styled from 'styled-components'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { useHistory, Link } from 'react-router-dom'
// import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
// import useDropdownMenu from 'react-accessible-dropdown-menu-hook'; //installed via 'npm install react-accessible-dropdown-menu-hook'


import { useAuth } from '../contexts/AuthContext'

function Header() {

    
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    // const { signoutProps, updateProp, isOpen, setIsOpen } = useDropdownMenu(2)

    

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
    
    // const email = currentUser.email
    // const name = email.substring(0, email.indexOf("." || '@'))
    

    return (
        <Container>
            <Logo>
                <img src='/images/logo.png' /> 
            </Logo>
            <Profile>
                <UserName>
                    <h5>{currentUser.displayName ? currentUser.displayName : currentUser.email}</h5>
                </UserName>
                <UserIcon >
                    {
                            currentUser.photoURL ? 
                            <img src={currentUser.photoURL}></img> :
                            <AccountCircleIcon className="icon"/>
                    }
                    <Hover>
                        <SignOut onClick={handleLogout}>
                            <a>Sign out</a>
                        </SignOut>
                        <UpdateProfileButton >
                            <Link to="/update-profile">Update Profile</Link>
                        </UpdateProfileButton>
                    </Hover>
                    
                </UserIcon>
                
                
            </Profile>
        </Container>
    )
}

export default Header

const Container = styled.section`
    height: 60px;
    padding: 5px 3px;
    display: flex;
    justify-content: space-between;
`
const Logo = styled.div`
    width: 60px;
    height: 60px; 
    overflow: hidden;
    display: flex;
    border-radius: 15px;

    img{
        width: 100%;
        transform: scale(1.8);
    }
`
const Profile = styled.div`
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

`
const Hover = styled.div`
    position: absolute;
    top: 60px;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    font-size: 16px;
    transition-duration: 167ms;
    text-align: none;
    border: 1px solid black;
    padding: 5px;
    display: none;
    /* height: 100px; */
    width: 120px;
`

const UpdateProfileButton = styled.div`
    width: 100%;
    text-align: center;

    :hover{
        background-color: lightgrey;
    }

    a{
        :hover{
            cursor: pointer;
        }
    }
`

const SignOut = styled.div`
    width: 100%;
    text-align: center;
    border-bottom: 1px solid grey;
    cursor: pointer !important;

    a{
        :hover{
            cursor: pointer;
        }
    }
    :hover{
        background-color: lightgrey;
    }
    
`

const UserIcon = styled.div`
    margin-left: 5px;
    margin-right: 10px;

    .icon{
        width: 35px;
        height: 35px;
        border-radius: 50%;
    }

    img{
        width: 35px;
        border: 1px solid grey;
        height: 35px;
        border-radius: 50%;
        
    }

    :hover{
        ${Hover}{
            align-items: center;
            display: flex;
            justify-content: center;
        }
    }
`
const UserName = styled.div`
    /* border: 1px solid grey; */
    display: flex;
    align-items: center;
    justify-content: center;
`