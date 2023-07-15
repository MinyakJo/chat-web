import React, { useEffect, useState } from "react"
import Div from "components/common/Div"
import styled from "styled-components"
import ChatInput from "components/component/chat_page/ChatInput"
import { useRecoilState, useResetRecoilState, useSetRecoilState } from "recoil"
import { chatInputState, chatMessagesState, chatMessageStreamSelector } from "recoil/chatRecoil"
import { debounce } from "lodash"
import ChatScreen from "components/container/chat_page/ChatScreen"
import hasData from "module/hasData"
import { topCurrentSelectState } from "recoil/topRecoil"


//chat용 container
const ChatContainer = styled(Div)`
    max-width: 1440px;
    aspect-ratio: 2.01 / 1;
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

    const setMessageStrem = useSetRecoilState( chatMessageStreamSelector )

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

    const chatFetch = async ( message ) => {

        //api 형식에 맞게 변환
        const messageList = []
    
        if( message.length > 3 ){
            for( let i = message.length - 3; i < message.length; i++ ){
                if( !message[ i ].err ){
                    messageList.push({
                        role: message[ i ].role,
                        content: message[ i ].message
                    })
                }
            }
        }else{
            for(let i of message){
                if( !i.err ){
                    messageList.push({
                        role: i.role,
                        content: i.message
                    })
                }
            }    
        }
    
        let res = null
        let streamText = ""
    
        try{
            res = await fetch("https://api.openai.com/v1/chat/completions", {
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${ process.env.REACT_APP_OPENAI_API_KEY }`
                    },
                    body: JSON.stringify({
                        model: "gpt-3.5-turbo",
                        max_tokens: 2048,
                        temperature: 1,
                        top_p: 0.5,
                        frequency_penalty: 0,
                        presence_penalty: 0,
                        messages: [ 
                            ...messageList,
                            { role: "system", content: "이름은 NOORI" },
                            { role: "system", content: "환경강사" }, 
                            { role: "system", content: "대답은 짧게" }, 
                            { role: "system", content: "사용자의 나이는 8 ~ 13세" },  
                        ],
                        stream: true
                    })
            })

            const reader = res.body.getReader()
            const decoder = new TextDecoder("utf-8")

            while( true ){
                const { done, value } = await reader.read()

                if( done ) break

                const chunk = decoder.decode( value )
                const lines = chunk.split("\n")

                const jsonList = lines
                .map( e => e.replace(/^data: /, "").trim()) //"data: "삭제, 공백삭제
                .filter( e => e !== "" && e !== "[DONE]" )
                .map( e => JSON.parse( e ) )

                for( const i of jsonList ){
                    streamText += i.choices[ 0 ].delta?.content ? i.choices[ 0 ].delta.content : ""
                    setMessageStrem( streamText )
                }
            }
        }catch( err ){
            console.log(err)
            return {
                data: err.response.data.error.message,
                status: err.response.status
            }
        }
        return {
            data: { content: streamText },
            status: 200
        }
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

export default React.memo( ChatPage )