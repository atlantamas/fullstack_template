const model_get_messages = async function ()
{
    // send request

    const result_of_feth = await fetch(
        "/api/get_message",
        {
            method: "GET"
        })

    // error: server send invalid status code

    if (result_of_feth.status !== 200 && result_of_feth.status !== 400)
    {
        return { status: "error", message: "error: server send invalid status code" }
    }

    // error: 

    if (result_of_feth.status === 400)
    {
        const response_body = await result_of_feth.json()

        return { status: "error", message: response_body.message }
    }

    // success

    const response_body = await result_of_feth.json()

    return { status: "success", data: response_body.data }
}

export default model_get_messages