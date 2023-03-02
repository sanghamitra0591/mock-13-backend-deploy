const express= require("express");

const randomRouter= express.Router();

randomRouter.get("/", (req, res)=>{
    const length= Math.random();
    console.log(length);
    res.send("apple");
})



module.exports= {
    randomRouter
}