const model_sign_up = async function (param_username, param_password)
{
    // prep request body

    const request_body = {
        username: param_username,
        password: param_password
    }

    const result_of_strigify = JSON.stringify(request_body)

    // send request

    const result_of_feth = await fetch(
        "/api/sign_up",
        {
            "method": "POST",
            "headers":
            {
                "Content-type": "application/json"
            },
            "body": result_of_strigify
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

export default model_sign_up