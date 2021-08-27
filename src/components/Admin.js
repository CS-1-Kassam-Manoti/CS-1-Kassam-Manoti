import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Header from './Header'

import {useHistory, Link} from 'react-router-dom'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

import { database } from '../firebase';

import { useAuth } from '../contexts/AuthContext'

function Admin() {
    const [blogs, setBlogs] = useState([])
    const [users, setUsers] = useState([])
    const [isAdmin, setIsAdmin] = useState([])
    const [isDisabled, setDisabled] = useState([])
    const [adminButtonText, setAdminButtonText] = useState("Make Admin")
    const [isUserAdmin, setIsUserAdmin] = useState("")

    const [blogToDeleted, setBlogToDeleted] = useState("")
    const history = useHistory()
    
    const { currentUser } = useAuth()

    // const isUserAdmin = database.ref('/admin/' + currentUser.uid)

    const isAdminUser = database.ref("admin")
        .child(currentUser.uid)

    useEffect(() => {
        const blogsRetrieved = database.ref(`/blogs`)
        // const key = blogsRetrieved.key
        blogsRetrieved.on('value', snapshot => {
            let allBlogs = [];
            snapshot.forEach(snap => { 
                allBlogs.push(snap.val())
            })
            setBlogs(allBlogs)
        })

        const usersRetrieved = database.ref(`/users`)
        // const key = usersRetrieved.key
        usersRetrieved.on('value', snapshot => {
            let allUsers = [];
            snapshot.forEach(snap => { 
                allUsers.push(snap.val())
            })
            setUsers(allUsers)
            
        })
        const usersIsAdminRetrieved = database.ref(`/admin`)
        // const key = usersRetrieved.key
        usersIsAdminRetrieved.on('value', snapshot => {
            let allUsers = [];
            snapshot.forEach(snap => { 
                allUsers.push(snap.val())
            })
            setIsAdmin(allUsers)
        })

        const usersIsDisabledRetrieved = database.ref(`/disabled`)
        // const key = usersRetrieved.key
        usersIsDisabledRetrieved.on('value', snapshot => {
            let allUsers = [];
            snapshot.forEach(snap => { 
                allUsers.push(snap.val())
            })
            setDisabled(allUsers)
        })


        isAdminUser.once("value")
        .then((snapshot) => {
            const value = snapshot.val()
            setIsUserAdmin(value)
            console.log(JSON.stringify(value))
         })
        .catch(error => ({
           errorCode: error.code,
           errorMessage: error.message
         }));

    }, [])

    const rootRef = database.ref(`blogs`)

    return (
        
        <ParentContainer>
            <Header/>
            {
                isUserAdmin ? 
            
        <Container>
            <Articles>
            {
                blogs.slice(0).reverse().map((blog, key) => (
                    <ArticleCard key={key} 
                    >
                        <ArticleTextDetails>                        
                            <Author>
                                <AuthorProfileAndName>
                                    <AuthorProfilePicture>
                                    {
                                        blog.postedByProfilePic ? 
                                        <img src={blog.postedByProfilePic} alt="" /> :
                                        <AccountCircleIcon className="icon"/>
                                    }
                                        
                                    </AuthorProfilePicture>
                                    <AuthorUserName>
                                        {blog.postedByName}
                                    </AuthorUserName>
                                </AuthorProfileAndName>
                                <Buttons>
                                    <p className="delete" onClick={() => {
                                        if(isUserAdmin){
                                        localStorage.setItem('blog', JSON.stringify(blog))

                                        console.log("delete button selected for" + blog.heading + "with ID of" + blog.blogId)
                                        
                                            const dialog = window.confirm("Are you sure you want to delete?")
                                            if(dialog === true){ 
                                                const blogRetrieved = localStorage.getItem('blog')
                                                const blogToDelete = JSON.parse(blogRetrieved)
                                                console.log("yes, i want to delete")
                                                // const databaseRef = database.ref(`/blogs`)
                                                rootRef.child(blogToDelete.blogId).remove()
                                                    .then(() =>{
                                                        console.log("Deleted successfully")
                                                        // console.log(theData)
                                                        alert("Blog Deleted")
                                                    }).catch((e)=>{
                                                        console.log(e)
                                                    })
                                                    // console.log(theData)
                                            }
                                            else{
                                                console.log("No, it was by mistake")
                                                // history.push(`/Profile`)
                                                }
                                        }
                                        else{
                                            history.push('/')
                                        }
                                        
                                                
                                                
                                    }}>Delete</p>
                                </Buttons>
                            </Author>

                            <ArticleTitle 
                            onClick={() => {
                                    localStorage.setItem('blog', JSON.stringify(blog))
                                        history.push(`/blog:${blog.blogId}`)
                                }}
                            >
                                {blog.heading}
                            </ArticleTitle>
                                        
                            <ArticleSubTitle>
                                {blog.subHeading}
                            </ArticleSubTitle>

                            <ArticleFooter>
                                <ArticleDatePosted>
                                    <p>{blog.datePosted}</p>
                                </ArticleDatePosted>
                                <ArticleClassTag>
                                    <p>{blog.Bclass}</p>
                                </ArticleClassTag>
                                <ArticleSubjectTag>
                                    <p>{blog.subject}</p>
                                </ArticleSubjectTag>
                                <ArticleTopicTag>
                                    <p>{blog.level}</p>
                                </ArticleTopicTag>
                                
                            </ArticleFooter>
                            
                        </ArticleTextDetails>

                        <ArticlePicture>
                            <img src="images/logo.png" alt="" />
                        </ArticlePicture>
                    
                    </ArticleCard>
            
            )
            )
        }
            </Articles>




            <RightSideBar>
            
            <div>
                <div>
                    Admins
                </div>
            {
                isAdmin.slice(0).reverse().map((admin, key) => (
                    <AdminSectionCard key={key}>
                        <UserDetails>  

                            <UserEmail>
                                {admin.email}
                            </UserEmail>
                            
                            <UserButton>

                                    <p className="delete" onClick={(e) => {
                                        // TODO: #18 Check whether the user is an admin
                                        if(isUserAdmin){
                                        localStorage.setItem('user', JSON.stringify(admin))
                                        console.log("disable button selected for" + admin.displayName + "with ID of" + admin.uid)
                                            e.preventDefault()
                                            const admindb = database.ref('/admin/' + admin.uid)
                                                
                                                    const dialog = window.confirm("Are you sure you want to make them an admin?")
                                                    if(admindb){
                                                        if(dialog === true){ 
                                                            console.log("yes, i want to make them Admin")
        
                                                            admindb.remove()
                                                        }
                                                        else{
                                                            console.log("No, it was by mistake")
                                                            }
                                                        }
                                                        else{
                                                            window.reload()
                                                        }
                                                }
                                                else{
                                                    history.push('/')
                                                }
                                               
                                                }
                                    }>Remove Admin
                                    </p>
                                </UserButton>
                        </UserDetails>                   
                    </AdminSectionCard>
            // TODO: To display the isAdmin and isDisabled attributes from their nodes
            )
            )
        }
            </div>
            <div>
                <div>
                    Disabled Users
                </div>
            {
                isDisabled.slice(0).reverse().map((disable, key) => (
                    <AdminSectionCard key={key}>
                        <UserDetails>

                            <UserEmail>
                                {disable.email}
                            </UserEmail>
                            {/* <UserEmail>
                                {disable.displayName}
                            </UserEmail> */}
                            
                            <UserButton>

                                    <p className="delete" onClick={(e) => {
                                        if(isUserAdmin){
                                        localStorage.setItem('user', JSON.stringify(disable))
                                        console.log("disable button selected for" + disable.displayName + "with ID of" + disable.uid)
                                            e.preventDefault()
                                            const disabledb = database.ref('/disabled/' + disable.uid)
                                                
                                                    const dialog = window.confirm("Are you sure you want to make them an admin?")
                                                
                                                    if(dialog === true){ 
                                                        console.log("yes, i want to make them Admin")
    
                                                        disabledb.remove()
                                                    }
                                                    else{
                                                        console.log("No, it was by mistake")
                                                        }
                                                }
                                                else{
                                                    history.push('/')
                                                }
                                                
                                                }
                                            
                                    }>Enable
                                    </p>
                                </UserButton>
                        </UserDetails>                   
                    </AdminSectionCard>
            // TODO: To display the isAdmin and isDisabled attributes from their nodes
            )
            )
        }
            </div>

                <div>
                    All Users
                </div>

            {
                users.slice(0).reverse().map((user, key) => (
                    
                    <UserCard key={key}>
                        <UserDetails>                        
                            <Author>
                                
                                <UserButton>
                                    <p className="delete" onClick={(e) => {
                                        if(isUserAdmin){
                                        localStorage.setItem('user', JSON.stringify(user))
                                        console.log("disable button selected for" + user.displayName + "with ID of" + user.uid)
                                            e.preventDefault()
                                                const dialog = window.confirm("Are you sure you want to disable the user?")
                                                if(dialog === true){ 
                                                    console.log("yes, i want to disable the user")
    
                                                    const data = {
                                                        isDisabled: "true",
                                                        uid: user.uid,
                                                        email: user.email,
                                                    }
                                                    database.ref('/disabled/' + user.uid).set(data)
                                                        .then(() =>{
                                                            console.log("disabled user")
                                                            alert("disabled user")
                                                        }).catch((e)=>{
                                                            console.log(e)
                                                        })
                                                }
                                                else{
                                                    console.log("No, it was by mistake")
                                                    }
                                            }
                                            else{
                                                history.push('/')
                                            }
                                            
                                    }}>Disable</p>

                                    <p className="delete" onClick={(e) => {
                                        if(isUserAdmin){
                                        localStorage.setItem('user', JSON.stringify(user))
                                        console.log("disable button selected for" + user.displayName + "with ID of" + user.uid)
                                            e.preventDefault()
                                            const admin = database.ref('/admin/' + user.uid)

                                            
                                                const dialog = window.confirm("Are you sure you want to make them an admin?")
                                                
                                                if(dialog === true){ 
                                                    console.log("yes, i want to make them Admin")

                                                    const data = {
                                                        isAdmin: "true",
                                                        uid: user.uid,
                                                        email: user.email,
                                                    }
                                                    admin.set(data)
                                                        .then(() =>{
                                                            console.log("Make Admin")
                                                            alert("Specified user is now Admin")
                                                            setAdminButtonText("Remove Admin")
                                                        }).catch((e)=>{
                                                            console.log(e)
                                                        })
                                                }
                                                else{
                                                    console.log("No, it was by mistake")
                                                    }
                                            }
                                            else{
                                                window.reload()
                                                history.push('/')
                                            }
                                                
                                                }
                                            
                                    }>Make Admin
                                    </p>
                                </UserButton>
                            </Author>

                                        
                            <UserEmail>
                                {user.email}
                            </UserEmail>
                            {/* <UserEmail>
                                {user.displayName}
                            </UserEmail> */}
                            
                        </UserDetails>                   
                    </UserCard>
            // TODO: To display the isAdmin and isDisabled attributes from their nodes
            )
            )
        }
            </RightSideBar>
        </Container>
        :
        <Error>
                    <Card>
                        <ErrorHeading>
                            <p>Error !</p>
                        </ErrorHeading>
                        <ErrorContent>
                            You dont have Admin rights
                        </ErrorContent>
                        <SignIn>
                            <p> <Link to="/">Redirect to Home</Link></p>
                        </SignIn>
                    </Card>
                </Error>
        
        }
        </ParentContainer>
    )
}

export default Admin


const ParentContainer = styled.div`
    
`

const Container = styled.div`
    height: 80vh;
    padding: 10px 100px;
    display: flex;
    justify-content: space-between;
`
const AdminSectionCard = styled.div`
    border: 1px solid black;
`
const Articles = styled.div`
    width: 50%;
    overflow-y: scroll;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;

    ::-webkit-scrollbar{
        display: none;
    }
`
const ArticleCard = styled.div`
    margin: 20px;
    display: flex;
    justify-content: space-between;
    height: 170px;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`
const ArticleTextDetails = styled.div`
    padding: 20px 20px;
    width: 80%;
    /* border: 1px solid grey; */
`
const Author = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const AuthorProfileAndName = styled.div`
    display: flex;
    align-items: center;
`
const AuthorProfilePicture = styled.div`
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid grey;
    width: 30px;
    height: 30px;
    margin-right: 8px;

    img{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        overflow: hidden;
    }
    .icon{
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }
`
const AuthorUserName = styled.div`
    font-size: 13px;
`

const Buttons = styled.div`
    display: flex;
    /* border: 1px solid grey; */
    width: 17%;
    justify-content: space-between;

    .delete{
            color: red !important;
            
        }

    p{
        border: 1px solid grey;
        padding: 3px;
        font-size: 13px;
        cursor: pointer;

        :hover{
            background-color: lightgrey;
        }

    }
`
const ArticleTitle = styled.div`
    margin-top: 14px;
    font-weight: bold;
    font-size: 24px;
`
const ArticleSubTitle = styled.div`
    font-size: 14px;

` 
const ArticleFooter = styled.div`
    display: flex;
    font-size: 11px;
    margin-top: 30px;
    width: 100%;
    justify-content: space-around;
    color: grey;

    p{
        padding: 4px;
    }
`
const ArticleDatePosted = styled.div`
    font-size: 11px;
    
    
`
const ArticleClassTag = styled.div`

`
const ArticleSubjectTag = styled.div`

`
const ArticleTopicTag = styled.div`
    width: 30%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`
//END OF ARTICLE TEXT DESCRIPTIONS STYLING
const ArticlePicture = styled.div`
    img{
        height: 100%;
    }
`

const RightSideBar = styled.div`
    width: 45%;
    /* box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px; */
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
    /* border: 1px solid grey; */
    display: relative;
    overflow-y: scroll;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;

    ::-webkit-scrollbar{
        display: none;
    }
`
const UserCard = styled.div`
    border: 1px solid black;
    display: flex;
`

const UserDetails = styled.div`
    padding: 20px 20px;
    width: 80%;
    /* display: flex; */
`
const UserEmail = styled.div`

`
const UserButton = styled.div`
    display: flex;
    /* border: 1px solid grey; */
    width: 47%;
    justify-content: space-between;

    .delete{
            color: red !important;
            
        }

    p{
        border: 1px solid grey;
        padding: 3px;
        font-size: 13px;
        cursor: pointer;

        :hover{
            background-color: lightgrey;
        }

    }
`
const Error = styled.div`
    display: flex ;
    align-items: center;
    justify-content: center;
    height: 100vh;
`
const Card = styled.div`
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;    
`
const ErrorHeading = styled.div`
    text-align: center;
    font-size: 37px;
    color: red;
    font-style: bold;
    margin: 40px;
`
const ErrorContent = styled.div`
    padding: 20px;

    b{
        color: grey;
    }

    i{
        color: blue;
    }
`
const SignIn = styled.div`
    text-align: center;
    font-size: 14px;
    text-decoration: underline;
    margin-bottom: 10px;
`