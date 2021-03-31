import Patient from '../components/Patient'

function PatientScreen() {
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
            <Patient />
            <Patient />
            <Patient />
          </tbody>
        </table>
      </div>
    </>
  )
}

export default PatientScreen
