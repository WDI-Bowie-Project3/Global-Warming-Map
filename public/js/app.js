'use strict';
const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const browserHistory = ReactRouter.browserHistory;
const Route = ReactRouter.Route;
const Link = ReactRouter.Link;
const auth = require('./auth_helpers');
const $ = require('jquery');

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
          <li><Link to="/dashboard">Dashboard</Link> (authenticated)</li>
        </ul>
        {this.props.children || <p>You are {!this.state.loggedIn && 'not'} logged in.</p>}
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

const Login = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      error: false
    }
  },

  handleSubmit: function(event) {
    event.preventDefault()

    const email = this.refs.email.value
    const pass = this.refs.pass.value

    auth.login(email, pass, (loggedIn) => {
      if (!loggedIn)
        return this.setState({ error: true })

      const { location } = this.props

      if (location.state && location.state.nextPathname) {
        this.context.router.replace(location.state.nextPathname)
      } else {
        this.context.router.replace('/')
      }
    })
  },

  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label><input ref="email" placeholder="email" defaultValue="test2" /></label>
        <label><input ref="pass" placeholder="password" /></label> (hint: password1)<br />
        <button type="submit">login</button>
        {this.state.error && (
          <p>Bad login information</p>
        )}
      </form>
    )
  }
})


const Logout = React.createClass({
  componentDidMount: function() {
    auth.logout()
  },

  render: function() {
    return <p>You are now logged out</p>
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

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="login" component={Login} />
      <Route path="logout" component={Logout} />
      <Route path="dashboard" component={Dashboard} onEnter={requireAuth} />
    </Route>
  </Router>
), document.querySelector('#container'))
