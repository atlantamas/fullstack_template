import mongodb from "mongodb"
import config_message from "../config/config_message.mjs"

const model_message_get_all = async function()
{
    // prep query

    const query =
    {
    }

    // send query

    const mongodb_client = new mongodb.MongoClient(config_message.uri)

    var result_of_find

    try
    {
        result_of_find = await mongodb_client
            .db(config_message.datebase_name)
            .collection(config_message.collection_name)
            .find(query)
            .toArray()

    }
    catch (err)
    {
        // error: datebase query error

        mongodb_client.close()

        return { status: "error", message: "error: datebase query error" }
    }

    mongodb_client.close()

    // success

    return { status: "success", data: result_of_find }
}

export default model_message_get_all