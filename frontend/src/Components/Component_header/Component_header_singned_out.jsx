import React from "react"
import global_state from "../../global_state.mjs"

const Component_header_singned_out = function ()
{
    return <header
        style=
        {
            {
                width: "100%",
                height: "4em",
                padding: "0",
                border: "0",
                borderBottom: "1px solid black",
                margin: "0",
                display: "grid",
                gridTemplateColumns: "repeat(2, auto)",
                placeContent: "center end",
                placeItems: "center center"
            }
        }>

        <button
            onClick=
            {
                function ()
                {
                    global_state.set_state_page("Page_sign_in")
                }
            }
        >Sign-in</button>

        <button
            onClick=
            {
                function ()
                {
                    global_state.set_state_page("Page_sign_up")
                }
            }
        >Sign-up</button>

    </header>
}

export default Component_header_singned_out