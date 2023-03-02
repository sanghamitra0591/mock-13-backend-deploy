const express= require("express");
const { connection } = require("./configs/db");
const { randomRouter } = require("./routes/random.route");
const { resultRouter } = require("./routes/result.route");

const app= express();

const cors= require("cors");

app.use(cors({
    origin: "*"
}))
app.use(express.json())
require("dotenv").config();

app.get("/", (req, res)=>{
    res.send("Welcome to homepage")
})
app.use("/result", resultRouter);
app.use("/randomword", randomRouter)


app.listen(process.env.port, async()=>{
    try {
        await connection;
        console.log("Connected to DB");
    } catch (error) {
        console.log("Unable to connect DB");
    }
    console.log(`Runnning at port ${process.env.port}`);
})