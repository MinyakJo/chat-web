import ChatPage from "components/page/ChatPage"
import React from "react"
import { Routes, Route } from "react-router-dom"

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={ <ChatPage/> } />
        </Routes>
    )
}

export default Router