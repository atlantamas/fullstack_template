const model_send_message = async function (param_message)
{
    const request_body =
    {
        message: param_message
    }

    const result_of_strigify = JSON.stringify(request_body)

    // send request

    const result_of_feth = await fetch(
        "/api/send_message",
        {
            "method": "POST",
            "headers":
            {
                "Content-type": "application/json"
            },
            body: result_of_strigify
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

    return { status: "success" }
}

export default model_send_message