import { Button } from "@mui/material";
import { useState } from "react";
import styled from "styled-components"
import { db } from "../firebase";
import firebase from "@firebase/app-compat";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from "../firebase"

const ChatInput = ({chanelName, chanelId, chatRef}) => {
    const [inputValue, setInputValue] = useState("");
    const [user] = useAuthState(auth);
    const sendMessage = (e) => {
        
        e.preventDefault();

        if(!chanelId){
            return false;
        }

        db.collection('room').doc(chanelId).collection("messages").add({
            message: inputValue,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user.displayName,
            userImage: user.photoURL
        })

        chatRef?.current?.scrollIntoView({
            behavior: "smooth"
        })

        setInputValue("");
    }
    return (
        <ChatInputContainer>
            <form>
                <input value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={`Message #${chanelName}`}/>
                <Button hidden type="submit" onClick={sendMessage}>Send</Button>
            </form>
        </ChatInputContainer>
    )
}

export default ChatInput;

const ChatInputContainer = styled.div`
border-radius: 20px;

> form {
    position: relative;
    display: flex;
    justify-content: center;
}

> form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
}

>form >button {
    display: none !important;
}
`