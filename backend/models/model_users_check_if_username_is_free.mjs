import mongodb from "mongodb"
import config_user from "../config/config_user.mjs"

const model_users_check_if_username_is_free = async function (param_username)
{
    // query

    const query =
    {
        username: param_username
    }

    // projection

    const projection =
    {
        _id: 0,
        username: 0,
        password: 0
    }

    //

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

    // error: username not free

    if (result_of_findOne !== null)
    {
        return { status: "error", message: "error: username not free" }
    }

    // success

    return {status:"success"}
}

export default model_users_check_if_username_is_free