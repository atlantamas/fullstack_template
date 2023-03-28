import React from "react"
import global_state from "../../global_state.mjs"
import model_sign_out from "../../models/model_sign_out.mjs"

const Component_header_signed_in = function (props)
{
    //

    const username = props.username

    //
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
                gridTemplateColumns: "repeat(3, auto)",
                placeContent: "center end",
                placeItems: "center center"
            }
        }>
        <button
            onClick=
            {
                function ()
                {
                }
            }
        >Home</button>

        <span

            style={
                {
                    margin: "0 1em 0 1em"
                }
            }>{username}</span>

        <button
            onClick=
            {
                async function ()
                {
                    // model_sign_out

                    global_state.set_state_overlay_message("working...")

                    const result_of_model_sign_out = await model_sign_out()

                    global_state.set_state_overlay_message("")


                    // error:

                    if (result_of_model_sign_out.status === "error")
                    {
                        return
                    }

                    // success

                    global_state.set_state_page("Page_sign_in")
                }
            }
        >Sign-out</button>
    </header>
}

export default Component_header_signed_in


