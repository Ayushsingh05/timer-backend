const mongoose= require('mongoose');


const userSchema = mongoose.Schema({
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true,
        },
        name:{
            type:String,
            required:true,
        },
        toggle:{
            type:Boolean,
            default:false
        },
        reminder:{
            type:String,
            default:"8:00"
        }
        ,
        tasks:[{

            time:String,
            status:String
        }

        ]
})

const userModel= mongoose.model('users',userSchema);

module.exports=userModel;