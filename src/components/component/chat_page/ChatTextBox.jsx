import React from "react"
import Div from "components/common/Div"
import styled from "styled-components"
import P from "components/common/P"

const TextContainer = styled(Div)`
    display: flex;
    flex-direction: ${({ role }) => {
        console.log(role)
        console.log(role === "user")
        return role === "user" ? "row-reverse" : "row"
    }};
`

const Text = styled(P)`
    word-break: break-all;
    white-space: pre-line;
`

const ChatTextBox = ({ children, role }) => {
    return (
        <TextContainer marginTop="8px" role={ role ? role : null }>
            <Div width="fit-content" backgroundColor="white" radius="10px" padding="12px">
                <Text color="black" size="small4">
                    { children }
                </Text>
            </Div>
        </TextContainer>
    )
}

export default ChatTextBox