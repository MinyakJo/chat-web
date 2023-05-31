import React, { useRef } from "react"
import Div from "components/common/Div"
import styled from "styled-components"
import CommonStyle from "components/style"
import { useRecoilValue } from "recoil"
import { chatMessagesState } from "recoil/chatRecoil"
import ChatProfile from "components/component/chat_page/ChatProfile"
import ChatTextBox from "components/container/chat_page/ChatTextBox"
import useScrollToBottom from "hooks/useScrollToBottom"

const ScreenContainer = styled(Div)`
    overflow-x: hidden;
    overflow-y: auto;

    ::-webkit-scrollbar{
        width: 10px;
    }
    ::-webkit-scrollbar-thumb{
        background-color: ${ CommonStyle.setColor( "grey" ) };
        border-radius: 20px;
    }
    ::-webkit-scrollbar-track{
        background-color: ${ CommonStyle.setColor( "light_grey" ) };
        border-radius: 20px;
    }
`

const Screen = styled.section`
    width: 100%;
    height: 100%;
    padding-right: 65px;
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
    max-width: 60%;
    ${ CommonStyle.setFlex( "row" ) };
`

const ChatScreen = () => {

    //ref
    const ref = useRef()

    //recoil
    const messages = useRecoilValue( chatMessagesState )

    //useEffect
    useScrollToBottom({ useRef: ref, element: messages })

    return (
        <Div radius="30px 30px 0px 0px" height="calc( 100% - 60px )" padding="40px 13px 23px 48px">
            <ScreenContainer flex="row" height="100%" ref={ ref }>
                <Screen>
                    <Chat>
                        <ChatProfile/>
                        <ChatTextBox role="assistant">
                            안녕하세요. 환경 교육 강사 NOORI 입니다.
                        </ChatTextBox>
                    </Chat>
                    {
                        messages && messages.map(( e, i ) =>
                            <ChatContainer key={ `messages_${ i }` } role={ e.role }>
                                <Chat>
                                    {
                                        e.role === "assistant" && 
                                        <ChatProfile loading={ e.loading }/>
                                    }
                                    {
                                        e.message &&
                                        <ChatTextBox role={ e.role } loading={ e.loading }>
                                            { e.message }
                                        </ChatTextBox>
                                    }
                                </Chat>
                            </ChatContainer>
                        )
                    }
                </Screen>
            </ScreenContainer>
        </Div>
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