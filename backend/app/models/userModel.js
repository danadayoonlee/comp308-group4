const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    // Validate the email format
    match: [/.+\@.+\..+/, "Please fill a valid email address"],
    required: true
  },
  password: {
    type: String,
    // Validate the 'password' value length
    validate: [
      (password) => password && password.length >= 6,
      'Password should be longer'
    ],
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  birth: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  role: {
    type: Number,
    default: 0
  },
}, {
  timestamps: true
})

const User = mongoose.model('User', UserSchema)

const vitalHistory = {
  vitalHistories: [{
    _id: false,
    bodyTemperature: {
      type: Number,
      required: true
    },
    heartRate: {
      type: Number,
      required: true
    },
    bloodPressure: {
      type: Number,
      required: true
    },
    respiratoryRate: {
      type: Number,
      required: true
    },
    updatedAt: {
      type: Date,
      required: true
    },
    updatedBy: {
      type: Schema.Types.ObjectId,
      ref: 'Nurse'
    }
  }]
}

const Nurse = User.discriminator('Nurse', new mongoose.Schema())
const Patient = User.discriminator('Patient', new mongoose.Schema(vitalHistory))