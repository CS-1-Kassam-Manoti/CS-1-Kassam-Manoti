import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

import { database } from '../firebase';

import BlogDataService from "../firebaseDatabase";

function Article() {

    // console.log(JSON.stringify(BlogDataService.getAll()))

    const [blogs, setBlogs] = useState([])
    const [currentBlog, setCurrentBlog] = useState({})
    const history = useHistory()
    // this.state = {
    //     ...
    //     blogs: []
    // };

    
        const blog = BlogDataService.getAll()
        useState(() => {
            database.ref('/blogs').on('value', snapshot => {
                let allBlogs = [];
                snapshot.forEach(snap => {
                    allBlogs.push(snap.val())
                })
                setBlogs(allBlogs)
            })
        }, [])

        // componentDidMount() {
        //     database.ref('/blogs').on('value', snapshot => {
        //         let allBlogs = [];
        //         snapshot.forEach(snap => {
        //             allBlogs.push(snap.val())
        //         })
        //         setBlogs(allBlogs)
        //     })
        // }
        
    
    // const blog = BlogDataService.getAll()
    // console.log(BlogDataService.getAll())

    
    return (
        <Container>
            <Articles>
            {
                blogs.map((blog, key) => (
                    <ArticleCard key={key} onClick={() => {
                        localStorage.setItem('blog', JSON.stringify(blog))
                            history.push(`/blog:${blog.blogId}`)
                        

                        
                    }
                    }>
                        
                    
                                
                        <ArticleTextDetails>                        
                            <Author>
                                <AuthorProfilePicture>
                                
                                    <img src={blog.postedByProfilePic} alt="" />
                                </AuthorProfilePicture>
                                <AuthorUserName>
                                    {blog.postedByName}
                                    {/* {blog.dateCreated} */}
                                </AuthorUserName>
                            </Author>

                            <ArticleTitle>
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
                Something on the side
            </RightSideBar>
        </Container>
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
