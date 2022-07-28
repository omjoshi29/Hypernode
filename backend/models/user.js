const {Schema,model} = require("mongoose")
let userSchema = new Schema({
    name : String,
    catid : [Schema.Types.ObjectId]
})

let User = model("user",user)