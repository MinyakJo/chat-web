import React, { useState } from "react"
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

    //state
    const [ loading, setLoading ] = useState( false )

    //recoil
    const [ input, setInput ] = useRecoilState( chatInputState )
    const [ messages, setMessages ] = useRecoilState( chatMessagesState )

    //useEffect

    //event
    const onClickEvent = e => {
        const basic = e.target.id
        const type = basic.split("_")[ 0 ]

        switch(type){
            case "send":
                sendAfterFetch()
                return
            default:
                return
        }
    }

    const onChageEvent = e => {
        setInput( e.target.value )
    }

    const onKeyUpEvent = debounce( e => {
        if(e.keyCode === 13){
            sendAfterFetch()
        }
    }, 100)

    //fuction
    const sendAfterFetch = async () => {
        console.log("send")
        setInput("")

        if( input === "" ){
            console.log("empty")
            setLoading( false )
            return
        }

        const list = [ ...messages ]
        const fetchList = [ ...list ]

        list.push( { role: "user", message: input, loading: false } )
        list.push( { role: "assistant", message: "", loading: true } )
        setLoading( true )
        setMessages( list )

        fetchList.push( { role: "user", message: input, loading: false } )
        const fetchData = await chatFetch( fetchList )
        hasData( fetchData, [ list, setMessages ], setLoading )
    }

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
                    disabled={ loading }
                />
            </ChatContainer>
        </Div>
    )
}

export default ChatPage