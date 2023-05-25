import React from "react"
import Div from "components/common/Div"
import styled from "styled-components"
import ChatInput from "components/component/chat_page/ChatInput"
import { useRecoilState } from "recoil"
import { chatInputState, chatMessagesState } from "recoil/ChatRecoil"
import { debounce } from "lodash"
import ChatScreen from "components/container/chat_page/ChatScreen"
import chatFetch from "module/chatFetch"
import hasData from "module/hasData"


//chat용 container
const ChatContainer = styled(Div)`
    max-width: 500px;
    aspect-ratio: 5 / 8;
    overflow: hidden;
`

const ChatPage = () => {

    //recoil
    const [ input, setInput ] = useRecoilState( chatInputState )
    const [ messages, setMessages ] = useRecoilState( chatMessagesState )

    //useEffect

    //event
    const onClickEvent = async e => {
        const basic = e.target.id
        const type = basic.split("_")[ 0 ]

        switch(type){
            case "send":
                console.log("send")
                setInput("")

                if( input === "" ){
                    console.log("empty")
                    return
                }
                setMessages( state => [ ...state, { role: "user", message: input } ] )

                const fetchData = await chatFetch( input )
                hasData( fetchData, [ messages, setMessages ] )

                return
            default:
                return
        }
    }

    const onChageEvent = e => {
        setInput( e.target.value )
    }

    const onKeyUpEvent = debounce( async e => {
        if(e.keyCode === 13){
            console.log("send")
            setInput("")

            if( input === "" ){
                console.log("empty")
                return
            }

            const list = [ ...messages ]

            list.push( { role: "user", message: input, loading: false } )
            list.push( { role: "assistant", message: "", loading: true } )
            setMessages( list )

            const fetchData = await chatFetch( input )
            hasData( fetchData, [ list, setMessages ] )
        }
    }, 100)

    return (
        <Div height="100%" flex="row_center" backgroundColor="grey">
            <ChatContainer flex="column_between" backgroundColor="purple" radius="10px" onClick={ onClickEvent }>
                <ChatScreen/>
                <ChatInput 
                    onChange={ onChageEvent } 
                    onKeyUp={ onKeyUpEvent } 
                    height="60px" 
                    padding="10px 20px" 
                    backgroundColor="light_purple"
                    value={ input }
                />
            </ChatContainer>
        </Div>
    )
}

export default ChatPage