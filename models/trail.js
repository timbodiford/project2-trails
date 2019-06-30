
const mongoose = require('./connection.js')



const TrailSchema = new mongoose.Schema({
 trailName: {
   type: String,
   required: true,
 },
  distance: {
    type: Number,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
  },
  descrption: {
    type: String,
  },
  imgLink: {
    type: String
  }
})


const TrailCollection = mongoose.model('Trail', TrailSchema)



function getTrails() {
  return TrailCollection.find()
}


module.exports = {
  getTrails
}
