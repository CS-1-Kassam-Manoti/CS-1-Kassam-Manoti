import styled from 'styled-components'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import UpdateProfile from './components/UpdateProfile'
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './components/ForgotPassword';
import { AuthProvider } from './contexts/AuthContext'


function App() {
  return (
    
      <Container>
        <Router>
          <AuthProvider>
              <Switch>
                <PrivateRoute exact path="/" component={Home}/>
                {/* <Route exact path="/" component={Home}/> */}
                <Route exact path="/signup" component={Signup}/>
                <Route exact path="/login" component={Login}/>
                <PrivateRoute exact path="/update-profile" component={UpdateProfile}/>
                <Route exact path="/forgot-password" component={ForgotPassword}/>
              </Switch>
            </AuthProvider>
        </Router>
      </Container>
    
  );
}

export default App;

const Container = styled.div`
  
`