const mongoose = require('mongoose')

const ObjectId = mongoose.Schema.Types.ObjectId

const emailValidation = function(email){
    let regexForEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/
    return regexForEmail.test(email)
}
const mobileValidation = function(mobile){
    let regexForMobile = /^[6-9]\d{9}$/ 
    return regexForMobile.test(mobile)
}

const internSchema = new mongoose.Schema({

    name: {type : String ,required : [true, "name is mandatory"],trim : true },

    email: {type : String,required :true, unique: true, validate: emailValidation, trim : true },

    mobile: {type : Number,required : true, unique:true, validate:mobileValidation, trim :true},

    collegeId: {type: ObjectId,ref : "College" },

    isDeleted: {type: Boolean, default: false}
   
    },
        {timestamps : true})

module.exports = mongoose.model('R-Intern', internSchema)