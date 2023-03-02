const express= require("express");

const randomRouter= express.Router();

randomRouter.get("/", (req, res)=>{
    const length= Math.ceil(Math.random()*6);
    const arr= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", 'l', 'm', 'n', 'o', 'p', 'q', 'r',
     "s", 't', 'u', "v", "w", 'x', 'y', 'z'];
    let random="";
    for(let i=0;i<length;i++){
        const no= Math.ceil(Math.random()*26);
        random+=arr[no];
    }
    res.send(random);
})



module.exports= {
    randomRouter
}