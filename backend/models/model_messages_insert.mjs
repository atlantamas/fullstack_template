import mongodb from "mongodb"
import config_message from "../config/config_message.mjs"

const model_messages_insert = async function(param_author, param_message)
{
    // prep document

    const document =
    {
        author: param_author,
        text: param_message
    }

    // send query

    const mongodb_client = new mongodb.MongoClient(config_message.uri)

    var result_of_insertOne

    try
    {
        result_of_insertOne = await mongodb_client
            .db(config_message.datebase_name)
            .collection(config_message.collection_name)
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

export default model_messages_insert