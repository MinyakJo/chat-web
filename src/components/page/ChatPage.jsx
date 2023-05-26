import React, { useEffect, useState } from "react"
import Div from "components/common/Div"
import styled from "styled-components"
import ChatInput from "components/component/chat_page/ChatInput"
import { useRecoilState, useResetRecoilState, useSetRecoilState } from "recoil"
import { chatInputState, chatMessagesState } from "recoil/chatRecoil"
import { debounce } from "lodash"
import ChatScreen from "components/container/chat_page/ChatScreen"
import chatFetch from "module/chatFetch"
import hasData from "module/hasData"
import { topCurrentSelectState } from "recoil/topRecoil"


//chat용 container
const ChatContainer = styled(Div)`
    max-width: 1440px;
    aspect-ratio: 1.684 / 1;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0px -1px 10px 2px rgba(0, 0, 0, 0.25);
`

const ChatPage = () => {

    //state
    const [ loading, setLoading ] = useState( false )

    //recoil
    const [ input, setInput ] = useRecoilState( chatInputState )

    const [ messages, setMessages ] = useRecoilState( chatMessagesState )

    const setTopSelect = useSetRecoilState( topCurrentSelectState )
    const resetTop = useResetRecoilState( topCurrentSelectState )

    //useEffect
    useEffect(() => {
        setTopSelect( "noori" )

        return () => {
            resetTop()
        }
    }, [ setTopSelect, resetTop ])

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
        <Div flex="row_center" padding="40px 0px">
            <ChatContainer flex="column_between" radius="10px" onClick={ onClickEvent }>
                <ChatScreen/>
                <ChatInput 
                    onChange={ onChageEvent } 
                    onKeyUp={ onKeyUpEvent } 
                    height="80px" 
                    padding="8px 48px" 
                    backgroundColor="light_purple"
                    value={ input }
                    disabled={ loading }
                    placeholder="누리에게 궁금한 것은 무엇인가요?"
                />
            </ChatContainer>
        </Div>
    )
}

export default ChatPage