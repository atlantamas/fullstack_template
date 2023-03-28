import React from "react"
import Component_header_singned_out from "../../Components/Component_header/Component_header_singned_out.jsx"
import Main from "./Main.jsx"

const Page_sign_up = function ()
{

    //

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

        <Component_header_singned_out></Component_header_singned_out>

        <Main></Main>
        
    </div>
}

export default Page_sign_up