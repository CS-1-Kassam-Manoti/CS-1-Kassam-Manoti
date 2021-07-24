import styled from 'styled-components'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import UpdateProfile from './components/UpdateProfile'
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './components/ForgotPassword';
import CreatePost from './components/CreatePost';
import CurrentBlog from './components/CurrentBlog';
import { AuthProvider } from './contexts/AuthContext'
import MContext from './components/Article'

function App() {
  return (
    
      <Container>
        <Router>
          <AuthProvider>
           
              <Switch>
                
                {/* <Route exact path="/" component={Home}/> */}
                <Route path="/signup" component={Signup}/>
                <Route path="/login" component={Login}/>
                <PrivateRoute path="/update-profile" component={UpdateProfile}/>
                <Route path="/forgot-password" component={ForgotPassword}/>
                <Route path="/create-post" component={CreatePost}/>
                
                <PrivateRoute exact path="/" component={Home}/>
                <Route path="/blog:currentBlog" component={CurrentBlog}/>
                
              </Switch>
              
            </AuthProvider>
        </Router>
      </Container>
    
  );
}

export default App;

const Container = styled.div`
  
`