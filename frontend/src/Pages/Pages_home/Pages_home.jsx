import React from "react"
import Component_header_signed_in from "../../Components/Component_header/Component_header_signed_in.jsx"
import global_state from "../../global_state.mjs"
import Main from "./Main.jsx"

const Page_home = function ()
{
    return <div
        style=
        {
            {
                width: "100%",
                height: "auto",
                padding: "0",
                border: "0",
                margin: "0",
                display: "grid",
                gridTemplateColumns: "auto",
                placeContent: "center stretch",
                placeItems: "center center"
            }
        }>

        <Component_header_signed_in username={global_state.state_username}></Component_header_signed_in>

       <Main></Main>
    </div>
}

export default Page_home