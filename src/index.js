// ===== Library =====

import ReactDom from "react-dom/client"
import { RecoilRoot } from "recoil"
import { BrowserRouter } from "react-router-dom"

// ===== Components =====

import App from "./App"

// ===== Code =====

const root = document.getElementById("root")
ReactDom.createRoot(root).render(
    <BrowserRouter>
        <RecoilRoot>
            <App/>
        </RecoilRoot>
    </BrowserRouter>
)