import mongodb from "mongodb"
import config_user from "../config/config_user.mjs"

const model_users_resolve_username_by_identification_token = async function (param_identification_token)
{
    // prep query

    const query =
    {
        identification_token: param_identification_token
    }

    // prep projection

    const projection =
    {

        _id: 0,
        username: 0,
        password: 0,
        identification_token: 0
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

    // error: identification_token not found

    if (result_of_findOne === null)
    {
        return { status: "error", message: "error: identification_token not found" }
    }

    // success

    return { status: "success", data: result_of_findOne.username }

}

export default model_users_resolve_username_by_identification_token
