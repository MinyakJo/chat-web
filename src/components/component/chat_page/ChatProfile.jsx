import React from "react"
import Icon from "components/common/Icon"
import H1 from "components/common/H1"
import Div from "components/common/Div"

const ChatProfile = ({ img, role }) => {
    return (
        <>
            {
                role === "user" ?
                <Div flex="row_end">
                    {/* 프로필 이름 */}
                    <Div width="fit-content" marginRight="8px">
                        <H1 color="light_purple">
                            { role ? role : null }
                        </H1>
                    </Div>
                    {/* 프로필 사진 */}
                    <Icon width="50px" backgroundColor="white" radius="50%">
                        {/* img */}
                    </Icon>
                </Div>:
                role === "assistant" ?
                <Div flex="row">
                    {/* 프로필 사진 */}
                    <Icon width="50px" backgroundColor="white" radius="50%">
                        {/* img */}
                    </Icon>
                    {/* 프로필 이름 */}
                    <Div width="fit-content" marginLeft="8px">
                        <H1 color="light_purple">
                            { role ? role : null }
                        </H1>
                    </Div>
                </Div>:
                <></>
            }
        </>
    )
}

export default ChatProfile