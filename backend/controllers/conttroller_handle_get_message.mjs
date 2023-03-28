import model_message_get_all from "../models/model_message_get_all.mjs"
import model_users_resolve_username_by_identification_token from "../models/model_users_resolve_username_by_identification_token.mjs"

const conttroller_handle_get_message = async function (req, res)
{

    //

    const indetification_token = req.cookies.indetification_token

    // error: cookie identification not found

    if (result_of_model_message_get_all.status === "error")
    {
        res.statusCode = 400
        res.json({ status: "error", message: "error: cookie identification not found" })
        return
    }

    // model_users_resolve_username_by_identification_token

    const result_of_model_users_resolve_username_by_identification_token = await model_users_resolve_username_by_identification_token(indetification_token)

    // error:

    if (result_of_model_users_resolve_username_by_identification_token.status === "error")
    {
        res.statusCode = 400
        res.json({ status: "error", message: result_of_model_users_resolve_username_by_identification_token.message })
        return
    }

    // model_message_get_all

    const result_of_model_message_get_all = await model_message_get_all()


    // error:

    if (result_of_model_message_get_all.status === "error")
    {
        res.statusCode = 400
        res.json({ status: "error", message: result_of_model_message_get_all.message })
        return
    }

    // success

    res.statusCode = 200
    res.json({ data: result_of_model_message_get_all.data })

}

export default conttroller_handle_get_message