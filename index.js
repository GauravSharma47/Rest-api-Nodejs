const express=require("express");
const mongoose=require("mongoose");
const app=express();
const Routes=require("./controllers/routes/routes.config");

Routes.routeConfig(app);

app.listen(3000,()=>{
    console.log("Server listening at 3000");
});