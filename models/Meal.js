const Schema = require('mongoose').Schema;
//const ObjectId = Schema.ObjectId;
const MealSchema = new Schema({
    name:{type: String, required: true},
    mealId: {type: String, required: true, unique:true},
  datetime: {type: Date, default:Date.now, required: true},
  foodname:{
    type: String,
    required: true
  },
  
description: String,
calories:{
    type:Number,
    required:true
}
}); 

const MealModel = mongoose.model('MEALS',MealSchema);
module.exports = MealModel; 