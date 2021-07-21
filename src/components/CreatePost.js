import React, { useState } from 'react'
import styled from 'styled-components'
import Header from './Header'
// npm install draft-js
import { Editor , EditorState } from 'draft-js'

// import RichTextEditor from 'react-rte'

export default function CreatePost() {


    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty()
    )

    

    return (
        <Container>
            <Header/> 

            <WritePostContainer>
                
                    <TitleInput>
                        <input type="text" placeholder="Blog Title"></input>
                    </TitleInput>

                    <SubTitleInput>
                        <input type="text" placeholder="Blog SubTitle"></input>
                    </SubTitleInput>

                    <BlogLevel>
                        <input type="text" placeholder="Primary/Highchool"></input>
                    </BlogLevel>

                    <BlogClass>
                        <input type="text" placeholder="Class"></input>
                    </BlogClass>

                    <BlogSubject>
                        <input type="text" placeholder="Subject"></input>
                    </BlogSubject>

                    <BlogSubjectTopic>
                        <input type="text" placeholder="Topic"></input>
                    </BlogSubjectTopic>

                    <BlogContent>
                        <Editor className="editor" editorState={editorState} onChange={setEditorState} placeholder="hello"/>
                        {/* <RichTextEditor/> */}
                    </BlogContent>

            </WritePostContainer>
        </Container>
    )
}

const Container = styled.div`

`
const WritePostContainer = styled.div`
    border: 1px solid grey;
    margin: 30px;
    padding: 30px;
`
const TitleInput = styled.div`
    /* width: 100%; */
    /* border: 1px solid grey; */
    display: flex;
    justify-content: center;

    input{
        width: 60%;
        font-size: 24px;
        padding: 5px;
        font-weight: bold;

        :focus{
        outline: none;
        }
    }
    
`
const SubTitleInput = styled.div`
    input{
        width: 100%;
        font-size: 18px;

        :focus{
            outline: none;
        }
    } 
`
const BlogLevel = styled.div`

`
const BlogClass = styled.div`

`
const BlogSubject = styled.div`

`
const BlogSubjectTopic = styled.div`

`
const BlogContent = styled.div`
    /* height: 400px; */
    border: 1px solid grey;
    overflow-y: scroll;
    
    border: 1px solid grey;
        padding: 30px;


    ::-webkit-scrollbar{
        display: none;
    }

    .editor{
        /* height: 100%; */
        width: 100%;
        bottom: 0;
        border: 1px solid grey;
        padding: 30px;

        :focus{
            outline: none;
        }
    }
`