import { Button } from "@mui/material"
import styled from "styled-components"
import {auth, provider} from "../firebase"

const Login = () => {
    const signIn = (e) => {
        e.preventDefault();
     auth.signInWithPopup(provider).catch(err => alert(err.message))   
    }
    return (
    <LoginContainer>
        <LoginInnerContainer>
            <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" alt="slack-logo"/>
            <h1>Sign in to the Slack</h1>
            <p>trigiacbmt.slack.com</p>

            <Button  onClick={signIn}>Sign in with Google</Button>
        </LoginInnerContainer>

    </LoginContainer>)
}

export default Login


const LoginContainer = styled.div`
display: grid;
background-color: #f8f8f8;
height: 100vh;
place-items: center;
`

const LoginInnerContainer = styled.div`
padding: 100px;
text-align: center;
background-color: white;
border-radius: 10px;
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
> img {
    object-fit: contain;
    height: 100px;
    margin-bottom : 40px;
}

> button {
    margin-top: 50px;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: white;
}
`