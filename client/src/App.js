import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from '../src/components/Navbar'
import HomeScreen from '../src/Screens/HomeScreen'
import PatientScreen from '../src/Screens/PatientScreen'
import MotivationalTipsScreen from '../src/Screens/MotivationalTipsScreen'
import EmergencyAlertsScreen from '../src/Screens/EmergencyAlertsScreen'
import LoginScreen from '../src/Screens/LoginScreen'
import SignupScreen from '../src/Screens/SignupScreen'

function App() {
  return (
    <Router>
    <Navbar />
    <main>
      <Switch>
        <Route path='/' exact component={HomeScreen} />
        <Route path='/patients' exact component={PatientScreen} />
        <Route path='/motivationaltips' exact component={MotivationalTipsScreen} />
        <Route path='/emergencyalerts' exact component={EmergencyAlertsScreen} />
        <Route path='/login' exact component={LoginScreen} />
        <Route path='/signup' exact component={SignupScreen} />
      </Switch>
    </main>
  </Router>
  );
}

export default App;
