import model_messages_insert from "../models/model_messages_insert.mjs"
import model_users_resolve_username_by_identification_token from "../models/model_users_resolve_username_by_identification_token.mjs"

const conttroller_handle_send_message = async function (req, res)
{

    //

    const identification_token = req.cookies.identification_token

    const message = req.body.message

    var author = null

    //

    const result_of_model_users_resolve_username_by_identification_token = await model_users_resolve_username_by_identification_token(identification_token)

    // error:

    if (result_of_model_users_resolve_username_by_identification_token.status === "error")
    {
        res.statusCode = 400
        res.json({ status: "error", message: result_of_model_users_resolve_username_by_identification_token.message })
        return
    }

    // model_messages_insert

    author = result_of_model_users_resolve_username_by_identification_token.data

    const result_of_model_messages_insert = await model_messages_insert(author, message)

    // error:

    if (result_of_model_users_resolve_username_by_identification_token.status === "error")
    {
        res.statusCode = 400
        res.json({ status: "error", message: result_of_model_messages_insert.message })
        return
    }

    // success

    res.statusCode = 200
    res.end()

}

export default conttroller_handle_send_message