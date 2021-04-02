import './PatientScreen.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

function PatientScreen() {

  const [isOpen, setIsOpen] = useState(false)
  const [selectedPatient, setSelectedPatient] = useState({})
  const [allPatients, setAllPatients] = useState([])

  useEffect(() => {

    axios.get('/api/nurse/patients')
      .then(res => setAllPatients([...res.data]))
      .catch(err => alert(err.response.data.msg))

  }, [])

  const onDoubleClickHandler = (patient) => e => {
    e.preventDefault()
    setIsOpen(true)
    setSelectedPatient(patient)
  }

  return (
    <>
      <div className="container">
        <h2>Patients</h2>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Birth</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {allPatients.map(patient => (
              <tr key={patient._id} className="cursor-pointer" onDoubleClick={onDoubleClickHandler(patient)}>
                <td>{patient.firstName}</td>
                <td>{patient.lastName}</td>
                <td>{patient.birth}</td>
                <td>{patient.gender}</td>
                <td>{patient.email}</td>
                <td>{patient.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      {isOpen ? (
        <div className="modal-backdrop">
          <div className="modal-content-wrapper">
            <div className="modal-content">
              <div className="modal-header">
                <span>Vital Histories - {selectedPatient.firstName} {selectedPatient.lastName}</span>
                <button onClick={() => setIsOpen(false)}>
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <div className="modal-body">
                {selectedPatient.vitalHistories.length > 0 ? (
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th className="align-middle" rowspan="2">Body Temperature</th>
                        <th className="align-middle" rowspan="2">Heart Rate</th>
                        <th className="align-middle" colspan="2">Blood Pressure</th>
                        <th className="align-middle" rowspan="2">Respiratory Rate</th>
                        <th className="align-middle" rowspan="2">Update At</th>
                      </tr>
                      <tr>
                        <th>High</th>
                        <th>Low</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedPatient.vitalHistories.map((record, index) => {
                        return (
                          <tr key={index}>
                            <td>{record.bodyTemperature}</td>
                            <td>{record.heartRate}</td>
                            <td>{record.bloodPressure.high}</td>
                            <td>{record.bloodPressure.low}</td>
                            <td>{record.respiratoryRate}</td>
                            <td>{record.updatedAt}</td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                ) : (
                  <p>No record</p>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default PatientScreen
