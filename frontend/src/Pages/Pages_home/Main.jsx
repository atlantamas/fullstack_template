import React from "react"
import global_state from "../../global_state.mjs"
import model_get_messages from "../../models/model_get_messages.mjs"
import model_send_message from "../../models/model_send_message.mjs"

const Main = function ()
{
    // refs

    const ref_input_message = React.useRef()

    // states

    const [state_messages, set_state_messages] = React.useState("")

    //

    return <main
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
                placeContent: "center center",
                placeItems: "center center"
            }
        } >
        <h1>Home</h1>

        <span>{JSON.stringify(state_messages)}</span>

        <input
            ref={ref_input_message}>
        </input>

        <button
            onClick=
            {
                async function ()
                {
                    //

                    global_state.set_state_overlay_message("working...")

                    const result_of_model_get_messages = await model_get_messages()

                    global_state.set_state_overlay_message("")

                    // error:

                    if(result_of_model_get_messages.status === "error")
                    {
                        return
                    }

                    // success

                    set_state_messages(result_of_model_get_messages.data)

                    //
                }
            }
        >Get message</button>

        <button
            onClick=
            {
                async function ()
                {
                    //

                    const message = ref_input_message.current.value

                    //

                    global_state.set_state_overlay_message("working...")

                    const result_of_model_send_message = await model_send_message(message)

                    global_state.set_state_overlay_message("")

                    //
                }
            }
        >send</button>

        
    </main>
}

export default Main