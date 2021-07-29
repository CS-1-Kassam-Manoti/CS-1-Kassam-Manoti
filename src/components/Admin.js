import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Header from './Header'

import {useHistory} from 'react-router-dom'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

import { database } from '../firebase';

function Admin() {

    const [blogs, setBlogs] = useState([])

    const history = useHistory()

    
    

    useEffect(() => {
        const storing = database.ref(`/blogs`)
        const key = storing.key
        storing.on('value', snapshot => {
            let allBlogs = [];
            snapshot.forEach(snap => { 
                allBlogs.push(snap.val())
            })
            setBlogs(allBlogs)
            
        })
    })

    
    const rootRef = database.ref(`blogs`)

    const dialogFunction = () => {
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

    return (
        <ParentContainer>
            <Header/>
            <ArticleSearchbar>  
                        {/* <ArticleTextDetails>              */}
                        <SearchTitle>
                            Search Here                          
                        </SearchTitle> 
                        <Bar>
                        <div className="search">   
                        <input type="text" placeholder="Search Article..."/>                        
                        </div> 
                        </Bar> 
                        {/* </ArticleTextDetails>                     */}
             
             </ArticleSearchbar>
        <Container>
            
            
            
            <Articles>
            {
                blogs.slice(0).reverse().map((blog, key) => (
                    <ArticleCard key={key} 
                    // onClick={() => {
                    //     localStorage.setItem('blog', JSON.stringify(blog))
                    //         history.push(`/blog:${blog.blogId}`)
                        

                        
                    // }
                    // }
                    >
                        
                        <ArticleTextDetails>                        
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
                            </Author>

                            <ArticleTitle 
                            onClick={() => {
                                    localStorage.setItem('blog', JSON.stringify(blog))
                                        history.push(`/blog:${blog.blogId}`)
                                    
            
                                    
                                }
                                }
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
                <Advert>
                    <img src="images/logo.png" alt="" />
                </Advert>
                {/* <Footer/> */}
            </RightSideBar>
        </Container>
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
const Articles = styled.div`
    width: 60%;
    overflow-y: scroll;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;

    ::-webkit-scrollbar{
        display: none;
    }
`
const ArticleSearchbar=styled.div`
/* margin-top: 60px; */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    text-align: center;
    border-radius: 15px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

`
const SearchTitle = styled.div`
    font-weight: bold;
    font-size: 24px;
    margin-right: 20px;
    text-align:center;
   
`
const Bar=styled.div`

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
    /* box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px; */
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
    /* border: 1px solid grey; */
    display: relative;
`
const Advert = styled.div`
    height: 75%;
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        /* padding: 30px; */
    }
`