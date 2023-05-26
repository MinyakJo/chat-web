import React from "react"
import Div from "components/common/Div"
import Input from "components/common/Input"
import Icon from "components/common/Icon"
import styled from "styled-components"
import Img from "components/common/Img"
import send_icon from "../../../svg/send_icon.svg"

const ChatInputContainer = styled(Div)`
    background: rgba(252, 255, 215, 0.7);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
`

const InputContainer = styled(Div)`
    flex-basis: calc( 100% - 54px );
`

const ChatInput = ({ onChange, height, padding, onKeyUp, value, disabled, placeholder }) => {
    return (
        <ChatInputContainer 
            flex="row"
            height={ height ? height : null }
            padding={ padding ? padding : null }
            radius="30px 30px 0px 0px"
        >
            <InputContainer padding="0px 20px" radius="50px">
                <Input
                    weight="400"
                    size="medium"
                    height="100%"
                    autoComplete="off"
                    onChange={ onChange ? onChange : null }
                    onKeyUp={ onKeyUp ? onKeyUp : null }
                    value={ value }
                    disabled={ disabled }
                    placeholder={ placeholder }
                />
            </InputContainer>
            <Icon flex="row_center" basis="46px" marginLeft="8px">
                {/* icon 이미지 없어서 대체 */}
                <Img src={ send_icon } id="send"/>
            </Icon>
        </ChatInputContainer>
    )
}

export default ChatInput