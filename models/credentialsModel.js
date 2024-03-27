const mongoose = require("mongoose");
const credentialsSchema = new mongoose.Schema(
    {
        Uname: String,
        email: {type: String, unique: true},
        password: String,

    },
{
    collection: "Credential"
}
);
module.exports = mongoose.model("Credential", credentialsSchema);