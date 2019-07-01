
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
  description: {
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

function addTrail(trailObject) {
  return TrailCollection.create(trailObject)
}

function getTrail(trailId) {
  return TrailCollection.findById(trailId)
}

function deleteTrail(trailId) {
  return TrailCollection.findByIdAndDelete(trailId)
}

function editTrail(trailId, trailObject) {
  return TrailCollection.findByIdAndUpdate(trailId, trailObject)
}





module.exports = {
  getTrails,
  getTrail,
  addTrail,
  deleteTrail,
  editTrail
}
