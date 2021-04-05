const mongoose=require("../services/mongoose.service").mongoose;
const Schema=mongoose.Schema;
const studentSchema=new Schema({
        "_id" : Number,
        "name" : String,
        "scores" : [{
                "score" : Number,
                type: { type: String }
            }]

}, {collection:"students"});

mongoose.model('Students', studentSchema);

const studentModel=mongoose.model("Students");

exports.addStudent=(data)=>{
        const student=new studentModel(data);
        return student.save();
};

exports.list=(req,res)=>{
    console.log("running find");
    studentModel.find((err,docs)=>{
        if(!err){
            res.send(docs);
        }
        else{
            res.send("Error getting data");
        }
    }).limit(2)
}