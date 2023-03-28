import model_users_resolve_username_by_identification_token from "../models/model_users_resolve_username_by_identification_token.mjs"
import model_users_update_identification_token from "../models/model_users_update_identification_token.mjs"

const controller_handle_sign_out = async function (req, res)
{
    //

    const identification_token = req.cookies.identification_token

    var username = null

    //

    // error: cookies named identification_token not found

    if (identification_token === undefined)
    {
        res.statusCode = 400
        res.json({ status: "error", message: "cookies named identification_token not found" })
        return
    }

    // model_users_resolve_username_by_identification_token

    const result_of_model_of_model_users_resolve_username_by_identification_token = await model_users_resolve_username_by_identification_token(identification_token)

    // error:

    if (result_of_model_of_model_users_resolve_username_by_identification_token.status === "error")
    {
        res.statusCode = 400
        res.json({ status: "error", message: result_of_model_of_model_users_resolve_username_by_identification_token.status })
        return

    }

    username = result_of_model_of_model_users_resolve_username_by_identification_token.data

    
    //

    const result_of_model_users_update_identification_token = await model_users_update_identification_token(username, "")

    //

    if (result_of_model_users_update_identification_token.status === "error")
    {
        res.statusCode = 400
        res.json({ status: "error", message: result_of_model_users_update_identification_token.message })
        return
    }

    // success

    res.cookie("identification_token", "", { maxAge: 0 })

    res.statusCode = 200
    res.end()

}

export default controller_handle_sign_out