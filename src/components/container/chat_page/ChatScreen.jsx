import React, { useRef } from "react"
import Div from "components/common/Div"
import styled from "styled-components"
import CommonStyle from "components/style"
import { useRecoilValue } from "recoil"
import { chatMessagesState } from "recoil/ChatRecoil"
import ChatProfile from "components/component/chat_page/ChatProfile"
import ChatTextBox from "components/component/chat_page/ChatTextBox"
import useScrollToBottom from "hooks/useScrollToBottom"

const ScreenContainer = styled(Div)`
    overflow-x: hidden;
    overflow-y: auto;

    ::-webkit-scrollbar{
        width: 10px;
    }
    ::-webkit-scrollbar-thumb{
        background-color: ${ CommonStyle.setColor( "light_purple" ) };
        border-radius: 10px;
    }
`

const Screen = styled.section`
    width: 100%;
    height: 100%;
    padding: 40px;
    padding-right: 30px;
    padding-bottom: 0px;
    box-sizing: border-box;
`

const ChatContainer = styled.article`
    display: flex;
    width: 100%;
    height: fit-content;
    padding-bottom: 20px;
    box-sizing: border-box;
    flex-direction: ${({ role }) => {
        return role === "user" ? "row-reverse" : "row"
    }};
`

const ChatComponent = styled(Div)`
    max-width: 80%;
    ${ CommonStyle.setFlex( "column_top" ) };
`

const ChatScreen = () => {

    //ref
    const ref = useRef()

    //recoil
    const messages = useRecoilValue( chatMessagesState )

    //useEffect
    useScrollToBottom({ useRef: ref, element: messages })

    return (
        <ScreenContainer flex="row" height="calc( 100% - 60px )" ref={ ref }>
            <Screen>
                {
                    messages && messages.map(( e, i ) =>
                        <ChatContainer key={ `messages_${ i }` } role={ e?.role ? e.role : null }>
                            <Chat>
                                <ChatProfile role={ e?.role ? e.role : null }/>
                                <ChatTextBox role={ e?.role ? e.role : null } loading={ e.loading }>
                                    { e.message }
                                </ChatTextBox>
                            </Chat>
                        </ChatContainer>
                    )
                }
            </Screen>
        </ScreenContainer>
    )
}

export default React.memo( ChatScreen )

const Chat = ({ children }) => {
    return (
        <ChatComponent>
            { children }
        </ChatComponent>
    )
}