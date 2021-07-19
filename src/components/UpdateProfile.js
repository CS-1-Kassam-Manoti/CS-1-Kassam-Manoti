import React, { useRef, useState } from 'react';
import styled from 'styled-components' //installed via "npm install styled-components"
import { Link, useHistory } from 'react-router-dom' //installed via "npm install react-router-dom"
import { useAuth } from '../contexts/AuthContext'
import ErrorIcon from '@material-ui/icons/Error';
import { storage } from '../firebase'
import Header from './Header'

export default function UpdateProfile() {

    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    const pictureRef = useRef()
    const { currentUser, updateName, updateEmail, updatePassword, updateProfilePicture } = useAuth()
    const[error, setError] = useState('')
    const[loading, setLoading] = useState(false)
    const history = useHistory()

    const [file, setFile] = useState("")
    const [url, setURL] = useState("")




    function handleSubmit (e){
        e.preventDefault()
        if(passwordRef.current.value !== confirmPasswordRef.current.value){
            return  setError('The Passswords Do Not Match')
        }

        const promises = []
        setLoading(false)
        setError('')
        if ((nameRef.current.value)){
            promises.push(updateName(nameRef.current.value))
        }
        if (emailRef.current.value !== currentUser.email){
            promises.push(updateEmail(emailRef.current.value))
        }
        if (passwordRef.current.value){
            promises.push(updatePassword(passwordRef.current.value))
        }
        if (pictureRef.current.value){
            
        storage.ref(`/images/${file.name}`).put(file)
        .on("state_changed", console.log("success"), alert, () => {
          // Getting Download Link
          storage.ref("images").child(file.name).getDownloadURL()
            .then((url) => {
              setURL(url);
              console.log('url is ' + url)
              promises.push(updateProfilePicture(url))
            }).then(() =>{
                history.push('/')
                

            })
        });

            
        // promises.push(updateProfilePicture(url))
        }

        // Promise.all(promises).then(() => {
        //     storage.ref(`/images/${file.name}`).put(file)
        // .on("state_changed", console.log("success"), alert, () => {
        //   // Getting Download Link
        //   storage.ref("images").child(file.name).getDownloadURL()
        //     .then((url) => { 
        //       setURL(url);
        //       console.log('url is ' + url)
              
        //     console.log(JSON.stringify(currentUser))
        //     })
        // });

            
        // }).then(() => {
        //     history.push('/')
        // }).
        // catch(() => {
        //     setError('Failed to update account')
        // }).finally(() => {
        //     setLoading(false)
        // })
        // setLoading(false)
        
                console.log('url first is ' + url)
                history.push('/')
                // window.location.reload()
        
        
    }

    return (        
            <Container>
                {/* <Header urlvar={url}/> */}
                <RegisterContainer>
                    <h3>Update Profile</h3>
                    <hr/>

                     {/* // this code checks if theres error - it displays an error component */}
                    { 
                    error && 
                        <ErrorComponent>
                            <ErrorIcon className="error_icon"/>
                            {error}
                        </ErrorComponent>
                    }

                    <form onSubmit={handleSubmit} >
                        <Name>
                            <label htmlFor="name">Name</label>
                            <input id="name" type="text"  ref={nameRef} defaultValue ={(currentUser.displayName ? currentUser.displayName : currentUser.email)} /> 
                        </Name>
                        <Email>
                            <label htmlFor="email">Email Address</label>
                            <input id="email" type="email" ref={emailRef} defaultValue={currentUser.email} />
                        </Email>
                        <Password>
                            <label htmlFor="password">Password</label>
                            <input id="password" type="password" ref={passwordRef} placeholder="Leave blank to keep the same" />
                        </Password>
                        <ConfirmPassword>
                            <label htmlFor="confirm_password">Confirm Password</label>
                            <input id="confirm_password" type="password" ref={confirmPasswordRef} placeholder="Leave blank to keep the same" />
                        </ConfirmPassword>
                        <UploadImage>
                        <label>Profile Picture</label>
                        <input type="file" className="upload-image" onChange={(e) => { setFile(e.target.files[0]) }} ref={pictureRef}/>
                        </UploadImage>
                        <Submit>
                            <button disabled={loading} type="submit" >Update Profile</button>
                        </Submit>

                    </form>
                    <CancelText>
                        <h6> <Link to="/">Cancel</Link></h6>
                    </CancelText>
                </RegisterContainer>

                    
            </Container>
        
        
    )
}


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
const ErrorComponent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: red;
    font-weight: bold;
    background-color: #ffc1c1;
    margin: 0 11%;

    .error_icon{
        transform: scale(0.8);
    }
`

const RegisterContainer = styled.div`
    width: 450px;
    margin: auto;
    padding: 50px 0;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;    

    h3{
        text-align: center;
        margin-bottom: 10px;
        font-size: 24px;
    }

    hr{
        margin: 0 11%;
    }
    
    form{
        margin:  15px;

        input{
            width: 250px;
            margin-right: 10px;
            font-size: 15px;
            cursor: text;
            border: none;
            border-bottom: 1px solid grey;
            :focus{
                outline: none;
            }
        }
        label{
            display: flex;
            align-items: center;
            margin-left: 10px;
        }
    }
`
const Name = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    height: 30px;
`
const Email = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    height: 30px;
`
const Password = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    height: 30px;
`
const ConfirmPassword = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    height: 30px;
`
const Submit = styled.div`
    text-align: center;
    margin: 20px 10px 0 10px;
    padding: 20px 0 5px 0;
    height: 30px;
    button{
        height: 30px;
        padding: 0;
        margin-bottom: 5px;
        background: transparent;
        border: 1px solid blue;
        border-radius: 4px;
        width: 100%;
        cursor: pointer;
    }
`
const CancelText = styled.div`
    text-align: center;
    font-size: 17px;
    margin-top: 5px;
    h6{
        a{
            text-decoration: underline;
            cursor: pointer;
        }
    }
`
const UploadImage = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    height: 30px;
    
    label{
        display: flex;
        align-items: center;
        margin-left: 10px;

    }
    
    input[type="file"]{
        
    }
        
    
`