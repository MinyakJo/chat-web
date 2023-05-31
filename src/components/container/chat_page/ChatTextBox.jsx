import React from "react"
import Div from "components/common/Div"
import styled from "styled-components"
import P from "components/common/P"
import Spinner from "components/common/Spinner"
import CommonStyle from "components/style"

const TextContainer = styled(Div)`
    position: relative;
    display: flex;
    flex-direction: ${({ role }) => {
        return role === "user" ? "row-reverse" : "row"
    }};
`

const TextBox = styled(Div)`
    box-shadow: 4px 4px 4px rgba(128, 128, 128, 0.25);
`

const Text = styled(P)`
    word-break: break-all;
    white-space: pre-line;
    letter-spacing: -0.01em;
`

const ChatTextBox = ({ children, role }) => {
    return (
        <TextContainer marginTop="8px" role={ role ? role : null }>
            <TextBox 
                width="fit-content" 
                backgroundColor={ role === "user" ? "light_yellow" : "light_washed_green" } 
                radius="40px" 
                padding="20px 50px"
            >
                <Text color="black" size="medium" lineHeight="29px">
                    { children }
                </Text>
            </TextBox>
        </TextContainer>
    )
}

export default React.memo( ChatTextBox )