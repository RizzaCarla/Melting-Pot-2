import React from 'react'
import {withRouter} from 'react-router-dom';
import { Link } from 'react-router-dom'
import './css_reset.css'
import './session_forms.css'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors()
  }

 // componentWillReceiveProps will be deprecated so refactored to getDerivedStateFromProps
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/profile')
    }
    return {errors: nextProps.errors}
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.login(user);
  }

  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error,i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }
  
  render() {
    return (
      <div className="form-container-session">
        <h1>Melting Pot</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form">
            <h2>Login</h2>

            <label>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email:&nbsp;&nbsp;
              <input
                type="text"
                className="input-field"
                value={this.state.email}
                onChange={this.update("email")}
                placeholder="Email"
              />
            </label>

            <label>
              Password:&nbsp;&nbsp;
              <input
                type="password"
                className="input-field"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Password"
              />
            </label>

            <input
              className="submit-button input-field"
              type="submit"
              value="Login"
            />
            <div className="errors">{this.renderErrors()}</div>
          </div>
        </form>

        <br></br>
        <div className="signup-option">
          <label>Not a User?</label>
          <br></br>
          <Link to="/signup">
            {" "}
            <input
              className="signup-button input-field"
              type="submit"
              value="Sign Up"
            />
          </Link>
        </div>
        
      </div>
    );
  }
}

export default withRouter(LoginForm);