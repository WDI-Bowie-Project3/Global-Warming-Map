'use strict';
const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const browserHistory = ReactRouter.browserHistory;
const Route = ReactRouter.Route;
const Link = ReactRouter.Link;
const auth = require('./authComponents/auth_helpers');
const $ = require('jquery');
const Login = require('./authComponents/login.js');
const Logout = require('./authComponents/logout.js');
const SignUp = require('./authComponents/signup.js');

const EventSearchBar = require('./eventComponents/eventSearchBar');

const App = React.createClass({
  getInitialState: function() {
    return {
      loggedIn: auth.loggedIn()
    }
  },

  updateAuth: function(loggedIn) {
    this.setState({
      loggedIn: loggedIn
    })
  },

  componentWillMount: function() {
    auth.onChange = this.updateAuth
    auth.login()
  },

  render: function() {
    return (
      <div>
        <ul>
          <li>
            {this.state.loggedIn ? (
              <Link to="/logout">Log out</Link>
            ) : (
              <Link to="/login">Sign in</Link>
            )}
          </li>
          <li><Link to="/new">Sign Up</Link></li>
          <li><Link to="/dashboard">Dashboard</Link> (authenticated)</li>

        </ul>
        {this.props.children || <p>You are {!this.state.loggedIn && 'not'} logged in.</p>}
        <TestingSlot/>
      </div>
    )
  }
})


const Dashboard = React.createClass({
  getInitialState: function() {
    return {
      user: ''
    }
  },

  getUserInfo: function(event) {
    event.preventDefault();

    $.ajax({
      url: 'users/:uID',
      beforeSend: function( xhr ) {
        xhr.setRequestHeader("Authorization", auth.getToken());
      }
    }).complete((data) => {
      console.log(data);
      // this.setState({ user: data.agent.email });
    })
  },

  render: function() {
    const token = auth.getToken()

    return (
      <div>
        <h1>Dashboard</h1>
        <p>Successfully Logged In!</p>
        <p>{this.state.me}</p>
        <button onClick={this.getUserInfo}>Show My Info</button>
      </div>
    )
  }
})


function requireAuth(nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}


const ErrorPage = React.createClass({
  render: function() {
    return(
      <h1>404: Not Found</h1>
    )
  }
})

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="login" component={Login} />
      <Route path="logout" component={Logout} />
      <Route path="new" component={SignUp} />
      <Route path="dashboard" component={Dashboard} onEnter={requireAuth} />

    </Route>

    <Route path="*" component={ErrorPage} />
  </Router>
), document.querySelector('#container'))
