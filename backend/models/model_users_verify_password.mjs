import mongodb from "mongodb"
import config_user from "../config/config_user.mjs"

const model_users_verify_password = async function (param_username, param_password)
{
    // prep query

    const query =
    {
        username: param_username
    }

    // prep projection

    const projection =
    {

        _id: 0,
        username: 0,
        password: 0
    }

    // send query

    const mongodb_client = new mongodb.MongoClient(config_user.uri)

    var result_of_findOne

    try
    {
        result_of_findOne = await mongodb_client
            .db(config_user.datebase_name)
            .collection(config_user.collection_name)
            .findOne(query, projection)
    }
    catch (err)
    {
        // error: datebase query error

        mongodb_client.close()

        return { status: "error", message: "error: datebase query error" }
    }

    mongodb_client.close()

    // error: username not found

    if (result_of_findOne === null)
    {
        return { status: "error", message: "error: username not found" }
    }

    // error: password incorect

    if (param_password !== result_of_findOne.password)
    {
        return { status: "error", message: "error: password incorect" }
    }

    // success

    return { status: "success" }
}

export default model_users_verify_password