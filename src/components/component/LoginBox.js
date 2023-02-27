import React from "react"
import styled from "styled-components"

import Div from "components/common/Div"

// Styled Components 상속
const Container = styled(Div)`
    cursor: pointer;
`

const LoginBox = () => {

    return (
        <Container width="100px" backgroundColor="major">hello</Container>
    )
}

export default LoginBox