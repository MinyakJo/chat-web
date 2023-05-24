//import
import { atom } from "recoil"

//atom
const chatInputState = atom({
    key: "chatInput",
    default: ""
})

const chatMessagesState = atom({
    key: "chatMesaages",
    default: []
})

//export
export { chatInputState, chatMessagesState }