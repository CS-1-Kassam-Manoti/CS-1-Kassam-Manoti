import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Link , useHistory } from 'react-router-dom'

import { database } from '../firebase';

import BlogDataService from "../firebaseDatabase";

export const MContext = React.createContext();

function Article() {

    // console.log(JSON.stringify(BlogDataService.getAll()))
    const postedByNameRef = useRef()
    // console.log(document.getElementsByClassName('.author-user-name'))

    const [blogs, setBlogs] = useState([])
    
    const [currentBlog, setCurrentBlog] = useState({})

    const history = useHistory()

    
        const blog = BlogDataService.getAll()
        useState(() => {
            database.ref('/blogs').on('value', snapshot => {
                let allBlogs = [];
                snapshot.forEach(snap => {
                    allBlogs.push(snap.val())
                })
                setBlogs(allBlogs)
                Object.keys(allBlogs).forEach(key => {
                    var documentKey = key
                })
            })
        }, [])

    return (
        <MContext.Provider value={currentBlog}>
        <Container>
            {console.log(JSON.stringify(currentBlog))}
            <Articles >
            
            {
                blogs.slice(0).reverse().map((blog, key) => (

                    <ArticleCard key={key} 
                    onClick={() => {
                        setCurrentBlog({
                            Bclass: blog.Bclass,
                            blog: blog.blog,
                            blogId: blog.blogId,
                            datePosted: blog.datePosted,
                            level: blog.level,
                            heading: blog.heading,
                            postedByUid: blog.postedByUid,
                            subject: blog.subject,
                            subHeading: blog.subHeading,
                            topic: blog.topic,
                            postedByName: blog.postedByName,
                        })
                            console.log(currentBlog)
                            history.push('/blog:currentBlog')
                        
                    }
                    }>
                    
                                
                        <ArticleTextDetails>                        
                            <Author>
                                <AuthorProfilePicture value={blog.postedByProfilePic} >
                                
                                    <img src={blog.postedByProfilePic} alt="" />
                                </AuthorProfilePicture>
                                <AuthorUserName className="author-user-name" value={blog.postedByName} ref={postedByNameRef} >
                                    {blog.postedByName}
                                    {/* {blog.dateCreated} */}
                                </AuthorUserName>
                            </Author>

                            <ArticleTitle>
                            {/* {blog.heading} */}
                                
                                    <Link to={{
                                        pathname: `/blog:${currentBlog}`
                                        
                                    }} >{blog.heading}</Link>
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
                Something on the side
            </RightSideBar>
        </Container>
        </MContext.Provider>
    );

}

export default Article

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

    /* border: 1px solid grey; */
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
    }
`
const AuthorUserName = styled.div`
    font-size: 13px;
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
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
`
