const User = require('mongoose').model('User')
const Patient = require('mongoose').model('Patient')
const Nurse = require('mongoose').model('Nurse')

const bcrypt = require('bcrypt')

exports.register = async (req, res) => {
  try {
    const { email, password, role } = req.body
    const user = await User.findOne({ email })
    if (user) return res.status(400).json({ msg: "The email already exists." })

    // Password Encryption
    const passwordHash = await bcrypt.hash(password, 10)

    var newUser = null
    if(role === 1){
      newUser = new Nurse({...req.body, password: passwordHash})
    } else{
      newUser = new Patient({...req.body, password: passwordHash})
    }
    newUser.save()
    return res.status(200).json(newUser)
    
  } catch (err) {
    return res.status(500).json({ msg: err.message })
  }


}