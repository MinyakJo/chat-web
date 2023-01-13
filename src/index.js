// ===== Library =====

import ReactDom from "react-dom/client"
import { RecoilRoot } from "recoil"

// ===== Components =====

import App from "./App"

// ===== Code =====

const root = document.getElementById("root")
ReactDom.createRoot(root).render(
    <RecoilRoot>
        <App/>
    </RecoilRoot>
)