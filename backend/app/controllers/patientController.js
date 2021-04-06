const Patient = require('mongoose').model('Patient')
const Alert = require('mongoose').model('Alert')

exports.newAlert = async (req, res) => {
  try {
    const { patientId, message } = req.body

    const patient = await Patient.findById(patientId)

    const newAlert = new Alert({ patient, message })
    newAlert.save()

    return res.status(200).json({msg: 'Emergency Alert sent successfully!'})

  } catch (err) {
    return res.status(500).json({ msg: err.message })
  }
}

