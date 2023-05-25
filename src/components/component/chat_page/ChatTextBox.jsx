import React from "react"
import Div from "components/common/Div"
import styled from "styled-components"
import P from "components/common/P"
import Spinner from "components/common/Spinner"

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

const ChatTextBox = ({ children, role, loading }) => {
    return (
        <TextContainer marginTop="8px" role={ role ? role : null }>
            <Div width="fit-content" backgroundColor="white" radius="10px" padding="12px">
                {
                    loading ?
                    <Spinner width="50px"/> :
                    <Text color="black" size="small4">
                        { children }
                    </Text>
                }
            </Div>
        </TextContainer>
    )
}

export default ChatTextBox