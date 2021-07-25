import React, { useState } from 'react'
import styled from 'styled-components'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { useHistory, Link, useLocation } from 'react-router-dom'
import { storage } from '../firebase'
// import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
// import useDropdownMenu from 'react-accessible-dropdown-menu-hook'; //installed via 'npm install react-accessible-dropdown-menu-hook'


import { useAuth } from '../contexts/AuthContext'

function Header(props) {

    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()
    const location = useLocation()

    const { pathname } = location

    const splitLocation = pathname.split("/")

    // console.log(JSON.stringify(currentUser))

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

            <Links>

                <NavigationLinks>
                    <a className={splitLocation[1] === "" ? "active" : ""}><Link to="/">Home</Link></a>
                    <a className={splitLocation[1] === "about" ? "active" : ""}><Link to="/about">About</Link> </a>
                    <a className={splitLocation[1] === "subjects" ? "active" : ""}><Link to="subjects">Levels</Link> </a>
                    <a className={splitLocation[1] === "create-post" ? "active" : ""}> <Link to="/create-post">Write</Link> </a>
                </NavigationLinks>

                <Profile>
                    {/* <UserName>
                        <h5>{currentUser.displayName ? currentUser.displayName : currentUser.email}</h5>
                    </UserName> */}
                    <UserIcon >
                        {
                                currentUser.photoURL ? 
                                <img src={currentUser.photoURL}></img> :
                                <AccountCircleIcon className="icon"/>
                                // <img src={props.urlvar}></img> 
                        }
                        <Hover>
                            <UserName>
                                <h5>{currentUser.displayName ? currentUser.displayName : currentUser.email}</h5>
                            </UserName>
                            <UpdateProfileButton >
                                <Link to="/update-profile">Update Profile</Link>
                            </UpdateProfileButton>
                            <MyBlogs >
                                <Link to='/myblogs'>My Blogs</Link>
                            </MyBlogs>
                            <SignOut onClick={handleLogout}>
                                <a>Sign out</a>
                            </SignOut>
                        </Hover>
                        
                    </UserIcon>
                    
                </Profile>
            </Links>
        </Container>
    )
}

export default Header

const Container = styled.section`
    height: 60px;
    padding: 5px 100px;
    display: flex;
    justify-content: space-between;
    box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
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
const Links = styled.div`
    display: flex;
    /* border: 1px solid grey; */
    width: 40%;
    justify-content: space-between;

`
const NavigationLinks = styled.div`
    /* border: 1px solid grey; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;

    a{
        cursor: pointer;
    }

    .active a{
        border-bottom: 1px solid grey;
    }
`

const Profile = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;

`
const Hover = styled.div`
    position: absolute;
    top: 56px;
    right: 52px;
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
    background-color: white;
`

const UpdateProfileButton = styled.div`
    width: 100%;
    margin-top: 5px;
    text-align: center;
    border-bottom: 1px solid grey;

    :hover{
        background-color: lightgrey;
    }

    a{
        :hover{
            cursor: pointer;
        }
    }
`

const MyBlogs = styled.div`
    width: 100%;
    margin-top: 5px;
    text-align: center;
    border-bottom: 1px solid grey;

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
