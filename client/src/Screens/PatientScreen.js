import './PatientScreen.css'
import { useState, useEffect } from 'react'

function PatientScreen() {

  const [isOpen, setIsOpen] = useState(false)

  const onDoubleClickHandler = () => e => {
    e.preventDefault()
    setIsOpen(true)
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
            <tr className="cursor-pointer" onDoubleClick={onDoubleClickHandler()}>
              <td>firstName</td>
              <td>lastName</td>
              <td>birth</td>
              <td>gender</td>
              <td>email</td>
              <td>phone</td>
            </tr>
          </tbody>
        </table>
      </div>


      {isOpen ? (
        <div className="modal-backdrop">
          <div className="modal-content-wrapper">
            <div className="modal-content">
              <div className="modal-header">
                <span>fullName</span>
                <button onClick={() => setIsOpen(false)}>
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <div className="modal-body">
                Vital histories
            </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default PatientScreen
