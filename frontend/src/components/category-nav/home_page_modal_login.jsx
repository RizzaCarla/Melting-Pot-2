import React from 'react'
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'
import '../session/css_reset.css'
import '../session/session_forms.css'
import { RiCloseLine } from 'react-icons/ri'

class HomePageModalLogin extends React.Component {
    constructor(props) {
        super(props)

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

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.login(user)
            .then(this.props.closeModal);
    }

    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
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
            <div id="close-x-modal"  onClick={this.props.closeModal}><RiCloseLine /></div>
                <h1>Melting Pot</h1>

                <form onSubmit={this.handleSubmit}>

            <div className="form" id="form-signin">
                        <h2>Login</h2>

                        <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email:&nbsp;&nbsp;
              <input type="text"
                                className="input-field"
                                value={this.state.email}
                                onChange={this.update('email')}
                                placeholder="Email"
                            />
                        </label>

                        <label>Password:&nbsp;&nbsp;
              <input type="password"
                                className="input-field"
                                value={this.state.password}
                                onChange={this.update('password')}
                                placeholder="Password"
                            />
                        </label>


                        <input className="submit-button input-field" type="submit" value="Login" />
                        <div className="errors">{this.renderErrors()}</div>
                    </div>
                </form>

                <br></br>
            </div>

        );
    }
}

export default HomePageModalLogin;