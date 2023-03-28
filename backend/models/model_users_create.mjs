import mongodb from "mongodb"
import config_user from "../config/config_user.mjs"

const model_users_create = async function (
    param_username,
    param_pasword)
{

    // prep document

    const document =
    {
        username: param_username,
        password: param_pasword
    }

    // send query

    const mongodb_client = new mongodb.MongoClient(config_user.uri)

    var result_of_insertOne

    try
    {
        result_of_insertOne = await mongodb_client
            .db(config_user.datebase_name)
            .collection(config_user.collection_name)
            .insertOne(document)

    }
    catch (err)
    {
        // error: datebase query error

        mongodb_client.close()

        return { status: "error", message: "error: datebase query error" }
    }

    mongodb_client.close()

    // success

    return { status: "success" }
}

export default model_users_create