import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <header className="d-flex flex-md-row justify-content-between align-items-center p-3 px-md-4 mb-3 bg-body border-bottom shadow-sm">
        <Link className="h5 my-0 me-md-auto text-dark" to="/">Hospital</Link>
        <div className="d-flex justify-content-between align-items-center">
          <nav className="my-2 my-md-0 me-md-3">
            <Link className="p-2 text-dark" to="/patients">Patients</Link>
            <Link className="p-2 text-dark" to="/motivationaltips">Motivational Tips</Link>
            <Link className="p-2 text-dark" to="/emergencyalerts">
              Emergency Alerts
              <span class="badge rounded-pill bg-danger text-white">3</span>
            </Link>
          </nav>
          <Link className="btn btn-outline-primary ml-2" to="/login">Log in</Link>
        </div>
      </header>
    </>
  )
}

export default Navbar
