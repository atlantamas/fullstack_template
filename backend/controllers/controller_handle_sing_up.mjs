import model_users_check_if_username_is_free from "../models/model_users_check_if_username_is_free.mjs"
import model_users_create from "../models/model_users_create.mjs"

const regexp_username = /^[a-zA-Ząčęėįšųūž]{3,30}$/
const regexp_password = /^[a-zA-Ząčęėįšųūž0-9]{8,20}$/

const controller_handle_sing_up = async function (req, res)
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
        res.statusCode = 400
        res.json({ status: "error", message: "error: password not valid" })
        return
    }

    // result_of_model_users_check_if_username_is_free

    const result_of_model_users_check_if_username_is_free = await model_users_check_if_username_is_free()

    // error:

    if (result_of_model_users_check_if_username_is_free.status === "error")
    {
        res.statusCode = 400
        res.json({status:"error", message: result_of_model_users_check_if_username_is_free.message})
        return
    }

    // model_users_create

    const result_of_model_users_create = 
    await model_users_create(username, password)

    if(result_of_model_users_create.status === "error")
    {
        res.statusCode = 400
        res.json({status:"error", message: result_of_model_users_create.message})
        return
    }

    // success

    res.statusCode = 200
    res.end()
}

export default controller_handle_sing_up