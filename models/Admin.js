const Schema = require('mongoose').Schema;
const AdminSchema = new Schema({
    name:{type: String, required: true, unique: true},
    admin:Boolean,
    password:{ type: String, required: true}
}); 

const AdminModel = mongoose.model('admin',AdminSchema);
module.exports = AdminModel; 