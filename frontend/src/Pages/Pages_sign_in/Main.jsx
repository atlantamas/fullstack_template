import React from "react"
import global_state from "../../global_state.mjs"
import model_sign_in from "../../models/model_sign_in.mjs"

const Main = function ()
{
    //ref

    const ref_input_username = React.useRef()
    const ref_input_password = React.useRef()

    // states

    const [state_message, set_state_message] = React.useState("")

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
        }>

        <h1>Sign-in</h1>

        <span
            style={
                {
                    margin: "1em 0 1em 0",
                    fontWeight: "bold"
                }
            }>{state_message}</span>

        <span>User_name</span>

        <input type="text" ref={ref_input_username}></input>

        <span>password</span>

        <input type="password" ref={ref_input_password}></input>

        <button

            style=
            {
                {
                    margin: "1em 0 1em 0",
                    fontWeight: "bold"
                }
            }

            onClick=
            {
                async function ()
                {
                    //

                    const username = ref_input_username.current.value

                    const password = ref_input_password.current.value

                    // error: username field is empty

                    if (username === "")
                    {
                        set_state_message("error: username field is empty")
                        return
                    }

                    // error: passwords field is empty

                    if (password === "")
                    {
                        set_state_message("error: passwords field is empty")
                        return
                    }

                    // model_sign_in

                    global_state.set_state_overlay_message("working...")

                    const result_of_model_sign_in = await model_sign_in(username, password)

                    global_state.set_state_overlay_message("")

                    // error:

                    if (result_of_model_sign_in.status === "error")
                    {
                        set_state_message(result_of_model_sign_in.message)
                        return
                    }

                    // success

                    set_state_message("success")

                    global_state.set_state_username(username)
                    global_state.set_state_page("Page_home")

                }
            }

        >Sign-in</button>

    </main>
}
export default Main