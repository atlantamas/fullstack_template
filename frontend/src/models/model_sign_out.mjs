const model_sign_out = async function ()
{
    // send request

    const result_of_feth = await fetch(
        "/api/sign_out",
        {
            method: "GET"
        })

    // error: server send invalid status code

    if (result_of_feth.status !== 200 && result_of_feth.status !== 400)
    {
        return { status: "error", message: "error: server send invalid status code" }
    }

        // error: server send invalid status code

        if ( result_of_feth.status === 400)
        {
            const response_body = await result_of_feth.json()
            return { status: "error", message: response_body.message }
        }    

    // success

    return { status: "success" }
}

export default model_sign_out