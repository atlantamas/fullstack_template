import React from "react"
import Overlay from "./Components/Overlay.jsx"
import global_state from "./global_state.mjs"
import Page_home from "./pages/Pages_home/Pages_home.jsx"
import Page_sign_in from "./Pages/Pages_sign_in/Pages_sign_in.jsx"
import Page_sign_up from "./Pages/Page_sign_up/Page_sign_up.jsx"

const App = function ()
{
    // states

    const [state_page, set_state_page] = React.useState("Page_sign_in")
    global_state.state_page = state_page
    global_state.set_state_page = set_state_page

    const [state_overlay_message, set_state_overlay_message] = React.useState("")
    global_state.state_overlay_message = state_overlay_message
    global_state.set_state_overlay_message = set_state_overlay_message

    const [state_username, set_state_username] = React.useState("")
    global_state.state_username = state_username
    global_state.set_state_username = set_state_username

    //

    return <>
        {
            function ()
            {
                if (global_state.state_page === "Page_home") return <Page_home></Page_home>
                if (global_state.state_page === "Page_sign_in") return <Page_sign_in></Page_sign_in>
                if (global_state.state_page === "Page_sign_up") return <Page_sign_up></Page_sign_up>
            }()
        }

        {
            function ()
            {
                if (global_state.state_overlay_message !== "") return <Overlay message={global_state.state_overlay_message}></Overlay>
            }()
        }
    </>
}

export default App