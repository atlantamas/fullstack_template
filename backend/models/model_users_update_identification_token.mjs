import mongodb from "mongodb"
import config_user from "../config/config_user.mjs"

const model_users_update_identification_token = async function (param_username, param_identification_token)
{
    // query

    const query =
    {
        username: param_username
    }

    //

    const update = {
        "$set": { identification_token: param_identification_token }
    }

    //

    const mongodb_client = new mongodb.MongoClient(config_user.uri)

    var result_of_updateOne

    try
    {
        result_of_updateOne = await mongodb_client
            .db(config_user.datebase_name)
            .collection(config_user.collection_name)
            .updateOne(query, update)
    }
    catch (err)
    {
        // error: datebase query error

        mongodb_client.close()

        return { status: "error", message: "error: datebase query error" }
    }

    mongodb_client.close()

    // error: username not found

    if (result_of_updateOne.matchedCount === 0)
    {
        return { status: "error", message: "error: username not found" }
    }

    // success

    return { status: "success" }
}

export default model_users_update_identification_token