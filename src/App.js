
import React from 'react';
import {BrowserRouter as Router,Route, Switch } from 'react-router-dom'
import  Layout from './hocs/Layout';
import Home from './containers/Home'
import About from './containers/About'
import Login from './containers/Login'
import SignUp from './containers/SignUp'
import NotFound from './components/NotFound'
import {Provider} from 'react-redux';
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => (
  <Provider store={store}>
    <Router>
      <Layout>
        <div className="container-fluid mt-4">
        <Switch>
          <Route exact path='/about' component={About} />
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />
          <Route component={NotFound} />
        </Switch>
        </div>
      </Layout> 
    </Router>
  </Provider>

)

export default App;
