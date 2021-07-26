import React, {useState} from 'react'
import Header from './Header'
import styled from 'styled-components'

import {useHistory} from 'react-router-dom'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import UpdateProfile from './UpdateProfile'
import { database } from '../firebase';
import BlogDataService from "../firebaseDatabase";
import { useAuth } from '../contexts/AuthContext'

export default function Profile() {

    const blogRetrieved = localStorage.getItem('blog')
    const blogToDelete = JSON.parse(blogRetrieved)

    const [blogs, setBlogs] = useState([])
    const [currentBlog, setCurrentBlog] = useState({})
    const history = useHistory()

    
    const { currentUser, logout } = useAuth()
    
        const blog = BlogDataService.getAll()
        useState(() => {
            const storing = database.ref(`/blogs`).orderByChild('postedByUid').equalTo(currentUser.uid)
            // const storing = database.ref(`/blogs`)
            const key = storing.key
            storing.on('value', snapshot => {
                let allBlogs = [];
                snapshot.forEach(snap => { 
                    allBlogs.push(snap.val())
                })
                setBlogs(allBlogs)
                console.log(storing)
                
            })
        }, [])
        const rootRef = database.ref(`blogs`)

        const dialogFunction = () => {
        const dialog = window.confirm("Are you sure you want to delete?")
            if(dialog == true){
                console.log("yes, i want to delete")
                const databaseRef = database.ref(`/blogs`)
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
                }
        }
        

    return (
        <ParentContainer>

        
            <Header/>
            <Container>
            <Articles>
            {
                blogs.slice(0).reverse().map((blog, key) => (
                    <ArticleCard key={key} >
                        
                        <ArticleTextDetails>                        
                            <AuthorContainer>
                                <Author>                                    
                                    <AuthorProfilePicture>
                                    {
                                        blog.postedByProfilePic ? 
                                        <img src={blog.postedByProfilePic} alt="" /> :
                                        <AccountCircleIcon className="icon"/>
                                    }
                                        
                                    </AuthorProfilePicture>
                                    <AuthorUserName>
                                        {blog.postedByName}
                                        {/* {blog.dateCreated} */}
                                    </AuthorUserName>
                                </Author>
                                <Buttons>
                                    <p onClick={() => {
                                        localStorage.setItem('blog', JSON.stringify(blog))
                                        history.push(`/edit-blog:${blog.blogId}`)
                                        console.log("edit button selected for" + blog.heading)
                                    }} 
                                    >Edit</p>
                                    <p className="delete" onClick={() => {
                                        localStorage.setItem('blog', JSON.stringify(blog))
                                        console.log("delete button selected for" + blog.heading + "with ID of" + blog.blogId)
                                        dialogFunction()
                                    }}>Delete</p>
                                </Buttons>
                            </AuthorContainer>

                            <ArticleTitle onClick={() => {
                        localStorage.setItem('blog', JSON.stringify(blog))
                            history.push(`/blog:${blog.blogId}`)
                        
                    }
                    } >
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
                                    <p>{blog.topic}</p>
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
                {/* <UpdateProfile className="update-profile"/> */}
            </RightSideBar>
        </Container>
        </ParentContainer>
    )
}
const ParentContainer = styled.div`

`

const Container = styled.div`
    height: 85vh;
    padding: 10px 100px;
    display: flex;
    justify-content: space-between;
`
const Articles = styled.div`
    width: 60%;
    overflow-y: scroll;
    /* box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset; */

    border: 1px solid grey;
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
const AuthorContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Author = styled.div`
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
        /* border: 1px solid grey; */
    }
    .icon{
        /* width: 100%; */
        width: 30px;
        height: 30px;
        border-radius: 50%;
    overflow: hidden;
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
    cursor: pointer;

    :hover{
        text-decoration: underline;
        color: darkgrey;
    }
`
const ArticleSubTitle = styled.div`
    font-size: 14px;
` 
const ArticleFooter = styled.div`
    display: flex;
    font-size: 11px;
    margin-top: 30px;
    width: 70%;
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
    
`
//END OF ARTICLE TEXT DESCRIPTIONS STYLING
const ArticlePicture = styled.div`
    img{
        height: 100%;
    }
`

const RightSideBar = styled.div`
    width: 30%;
    /* height: 700px; */
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

    
`
