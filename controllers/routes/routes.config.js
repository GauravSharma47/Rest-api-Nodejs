const Student=require("../../model/students.model");

exports.routeConfig=function(app){
    app.get("/",[Student.list]);
    app.post("/add",[Student.addStudent]);
}