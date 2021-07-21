import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';

function Article() {
    return (
        
        
        <Container>
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
            
            
            <Articles>
            


                <ArticleCard>
                    <ArticleTextDetails>                        
                        <Author>
                            <AuthorProfilePicture>
                                <img src="/images/logo.png" alt="" />
                            </AuthorProfilePicture>
                            <AuthorUserName>
                                John Doe
                            </AuthorUserName>
                        </Author>

                        <ArticleTitle>
                            Title here
                        </ArticleTitle>

                        <ArticleSubTitle>
                            Subtitle here
                        </ArticleSubTitle>

                        <ArticleFooter>
                            <ArticleDatePosted>
                                <p>01/01/2020</p>
                            </ArticleDatePosted>
                            <ArticleClassTag>
                                <p>Class 7</p>
                            </ArticleClassTag>
                            <ArticleSubjectTag>
                                <p>Maths</p>
                            </ArticleSubjectTag>
                            <ArticleTopicTag>
                                <p>Division</p>
                            </ArticleTopicTag>
                            
                        </ArticleFooter>
                        
                    </ArticleTextDetails>

                    <ArticlePicture>
                        <img src="images/logo.png" alt="" />
                    </ArticlePicture>
                </ArticleCard>

                <ArticleCard>
                    <ArticleTextDetails>                        
                        <Author>
                            <AuthorProfilePicture>
                                <img src="/images/logo.png" alt="" />
                            </AuthorProfilePicture>
                            <AuthorUserName>
                                John Doe
                            </AuthorUserName>
                        </Author>

                        <ArticleTitle>
                            Title here
                        </ArticleTitle>

                        <ArticleSubTitle>
                            Subtitle here
                        </ArticleSubTitle>

                        <ArticleFooter>
                            <ArticleDatePosted>
                                <p>01/01/2020</p>
                            </ArticleDatePosted>
                            <ArticleClassTag>
                                <p>Class 7</p>
                            </ArticleClassTag>
                            <ArticleSubjectTag>
                                <p>Maths</p>
                            </ArticleSubjectTag>
                            <ArticleTopicTag>
                                <p>Division</p>
                            </ArticleTopicTag>
                            
                        </ArticleFooter>
                        
                    </ArticleTextDetails>

                    <ArticlePicture>
                        <img src="images/logo.png" alt="" />
                    </ArticlePicture>
                </ArticleCard>
                <ArticleCard>
                    <ArticleTextDetails>                        
                        <Author>
                            <AuthorProfilePicture>
                                <img src="/images/logo.png" alt="" />
                            </AuthorProfilePicture>
                            <AuthorUserName>
                                John Doe
                            </AuthorUserName>
                        </Author>

                        <ArticleTitle>
                            Title here
                        </ArticleTitle>

                        <ArticleSubTitle>
                            Subtitle here
                        </ArticleSubTitle>

                        <ArticleFooter>
                            <ArticleDatePosted>
                                <p>01/01/2020</p>
                            </ArticleDatePosted>
                            <ArticleClassTag>
                                <p>Class 7</p>
                            </ArticleClassTag>
                            <ArticleSubjectTag>
                                <p>Maths</p>
                            </ArticleSubjectTag>
                            <ArticleTopicTag>
                                <p>Division</p>
                            </ArticleTopicTag>
                            
                        </ArticleFooter>
                        
                    </ArticleTextDetails>

                    <ArticlePicture>
                        <img src="images/logo.png" alt="" />
                    </ArticlePicture>
                </ArticleCard>
                <ArticleCard>
                    <ArticleTextDetails>                        
                        <Author>
                            <AuthorProfilePicture>
                                <img src="/images/logo.png" alt="" />
                            </AuthorProfilePicture>
                            <AuthorUserName>
                                John Doe
                            </AuthorUserName>
                        </Author>

                        <ArticleTitle>
                            Title here
                        </ArticleTitle>

                        <ArticleSubTitle>
                            Subtitle here
                        </ArticleSubTitle>

                        <ArticleFooter>
                            <ArticleDatePosted>
                                <p>01/01/2020</p>
                            </ArticleDatePosted>
                            <ArticleClassTag>
                                <p>Class 7</p>
                            </ArticleClassTag>
                            <ArticleSubjectTag>
                                <p>Maths</p>
                            </ArticleSubjectTag>
                            <ArticleTopicTag>
                                <p>Division</p>
                            </ArticleTopicTag>
                            
                        </ArticleFooter>
                        
                    </ArticleTextDetails>

                    <ArticlePicture>
                        <img src="images/logo.png" alt="" />
                    </ArticlePicture>
                </ArticleCard>





                
                
            </Articles>

            <RightSideBar>
                Something on the side
            </RightSideBar>
        </Container>
    )
}

export default Article


const Container = styled.div`
    height: 85vh;
    padding: 10px 100px;
    // display: inline-block;
    justify-content: space-between;
`
const Articles = styled.div`
    // width: 60%;
    overflow-y: scroll;

    ::-webkit-scrollbar{
        display: none;
    }
`
const ArticleSearchbar=styled.div`
    margin: 20px;
    display: flex;
    // justify-content: space-between;
    height: 170px;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    // text-align: center;

`
const SearchTitle = styled.div`
    margin-top: 14px;
    font-weight: bold;
    font-size: 24px;
    text-align:center;
    // padding: 20px 20px;
    width: 80%;

   
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
    display: inline-block;
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
    text-align: center;
`
const ArticleSubTitle = styled.div`
    text-align:center;
    .Search{
        display:inline-block;
    }

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
