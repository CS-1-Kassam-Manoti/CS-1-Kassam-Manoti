import styled from 'styled-components'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import UpdateProfile from './components/UpdateProfile'
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './components/ForgotPassword';
import CreatePost from './components/CreatePost';
import ViewBlog from './components/ViewBlog';
import { AuthProvider } from './contexts/AuthContext'


function App() {
  return (
    
      <Container>
        <Router>
          <AuthProvider>
              <Switch>
                <PrivateRoute exact path="/" component={Home}/>
                {/* <Route exact path="/" component={Home}/> */}
                <Route path="/signup" component={Signup}/>
                <Route path="/login" component={Login}/>
                <PrivateRoute path="/update-profile" component={UpdateProfile}/>
                <Route path="/forgot-password" component={ForgotPassword}/>
                <Route path="/create-post" component={CreatePost}/>
                <Route path="/blog:blogId" component={ViewBlog}/>
              </Switch>
            </AuthProvider>
        </Router>
      </Container>
    
  );
}

export default App;

const Container = styled.div`
  
`