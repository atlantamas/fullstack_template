import model_users_check_if_username_is_free from "../models/model_users_check_if_username_is_free.mjs"
import model_users_update_identification_token from "../models/model_users_update_identification_token.mjs"
import model_users_verify_password from "../models/model_users_verify_password.mjs"
import model_check_password_match from "../models/model_users_verify_password.mjs"
import generate_random_string from "../utils/generate_random_string.mjs"

const regexp_username = /^[a-zA-Ząčęėįšųūž]{3,30}$/
const regexp_password = /^[a-zA-Ząčęėįšųūž0-9]{8,20}$/

const controller_handle_sign_in = async function (req, res)
{
    // username

    const username = req.body.username

    const result_of_test = regexp_username.test(username)

    // error: username not valid

    if (result_of_test === false)
    {
        res.statusCode = 400
        res.json({ status: "error", message: "error: username not valid" })
        return
    }

    // password

    const password = req.body.password

    const result_of_test_password = regexp_password.test(password)

    // error: username not valid

    if (result_of_test_password === false)
    {
        model_users_verify_password
    }

    // result_of_model_check_if_username_exists

    const result_of_model_check_if_username_exists = await model_users_check_if_username_is_free(username)

    if (result_of_model_check_if_username_exists === false)
    {
        res.statusCode = 400
        res.end()
        return
    }

    // model_check_password_match

    const result_of_model_check_password_match = await model_check_password_match(username, password)

    if (result_of_model_check_password_match === false)
    {
        res.statusCode = 400
        res.end()
        return
    }

    // model_users_verify_password

    const result_of_model_users_verify_password = await model_users_verify_password(username, password)

    // error:

    if (result_of_model_users_verify_password.status === "error")
    {
        res.statusCode = 400
        res.json({ status: "error", message: result_of_model_users_verify_password.message })
        return
    }

    // indetification_token

    const indetification_token = generate_random_string(256)

    //

    const result_of_model_users_update_identification_token = await model_users_update_identification_token(username, indetification_token)

    // error:

    if (result_of_model_users_update_identification_token.status === "error")
    {
        res.statusCode = 400
        res.json({ status: "error", message: result_of_model_users_update_identification_token.message })
        return
    }

    // success

    res.cookie("identification_token", indetification_token, { httpOnly: true })

    res.statusCode = 200
    res.end()
}

export default controller_handle_sign_in