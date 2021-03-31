const Patient = require('mongoose').model('Patient')

exports.getPatient = async(req, res) => {
  try {
    const patient = await Patient.findOne(req.user.id).select("-password")
    return res.status(200).json(patient)
  } catch (err) {
    return res.status(500).json({ msg: err.message })
  }
}