const express= require("express");
const { ResultModel } = require("../models/result.model");

const resultRouter= express.Router();

resultRouter.get("/", async(req, res)=>{
    try {
        const data= await ResultModel.find().sort({score: -1});
        res.send(data);
    } catch (error) {
        console.log({"error":error})
        res.send("Unable to fetch result")
    }
})

resultRouter.post("/", async(req, res)=>{
    const data= req.body;
    try {
        const newData= new ResultModel(data);
        await newData.save();
        res.send("Added New User");
    } catch (error) {
        console.log({"error":error})
        res.send("Unable to fetch result")
    }
})




module.exports= {
    resultRouter
}