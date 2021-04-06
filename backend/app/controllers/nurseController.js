const Patient = require('mongoose').model('Patient')
const Nurse = require('mongoose').model('Nurse')

exports.getPatients = async(req, res) =>{
  try {
    const patients = await Patient.find().select("-password")
    return res.status(200).json(patients)
  } catch (err) {
    return res.status(500).json({ msg: err.message })
  }
}