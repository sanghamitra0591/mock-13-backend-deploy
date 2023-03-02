const mongoose= require("mongoose");

const resultSchema= mongoose.Schema({
    name: String,
    level: String,
    score: Number
})

const ResultModel= mongoose.model("result", resultSchema);

module.exports= {
    ResultModel
}