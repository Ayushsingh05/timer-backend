const mongoose= require('mongoose');

const connect=()=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(`mongodb+srv://ayush:ayush@cluster0.5mjhdwq.mongodb.net/?retryWrites=true&w=majority`,(e)=>{
                reject();
        })
        resolve();
    })
}
module.exports= connect;