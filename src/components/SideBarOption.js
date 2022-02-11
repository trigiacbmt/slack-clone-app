import { useDispatch } from "react-redux";
import styled from "styled-components"
import { enterRoomId } from "../features/counterSlice";
import { db } from "../firebase";

const SideBarOption = ({Icon, title, addChanelOption, id}) => {
    const dispatch = useDispatch();
    const addChanel = () => {
        const chanelName = prompt("Please enter the chanel name?");
        if(chanelName){
            db.collection('room').add({
                name: chanelName
            })
        }
    }

    const selectChanel = () => {
        if(id){
            dispatch(enterRoomId({
                roomId: id,
            }))
        }
    }
    return (
        <SideBarOptionContainer onClick={addChanelOption ? addChanel : selectChanel}>
            {Icon && <Icon fontSize="small" style = {{padding: 10}}/>}
            {Icon ? (<h3>{title}</h3>) : (<SideBarOptionChannel><span>#</span> {title}</SideBarOptionChannel>)}
        </SideBarOptionContainer>
    )
}

export default SideBarOption;

const SideBarOptionContainer = styled.div`
display: flex;
align-items: center;
font-size: 12px;
padding-left: 2px;
cursor: pointer;

:hover{
    opacity: 0.9;
    background-color: #340e36;
}

> h3 {
    font-weight: 500
}

>h3 >span {
    padding: 15px
}
`

const SideBarOptionChannel = styled.h3`
padding : 10px 0;
font-weight: 300;

`