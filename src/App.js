// ===== Library =====

import React from "react"

// ===== Components =====

import LoginBox from "components/component/LoginBox"

// ===== Module =====

import GlobalFonts from "font/font"

// ===== Code =====

const App = () => {

    return(
        <React.Fragment>
            <GlobalFonts />
            <LoginBox />
        </React.Fragment>
    )
}

export default App