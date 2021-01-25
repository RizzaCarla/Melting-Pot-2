import React from 'react'
import { withRouter } from 'react-router-dom';
import { uploadPhoto } from '../../util/photo_api_util';
import { Link } from 'react-router-dom'
import './css_reset.css'
import './session_forms.css'


class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      handle: "",
      password: "",
      password2: "",
      bio: "",
      photoId: "",
      photoUrl: "",
      photoFile: null,
      dietaryRestrictions: [],
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
    this.handlePhotoFile = this.handlePhotoFile.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors()
  }


  // componentWillReceiveProps will be deprecated so refactored to getDerivedStateFromProps
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.signedIn === true) {
      this.props.history.push("/");
    }

    return({ errors: nextProps.errors });
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleCheckboxChange(e) {
    const options = this.state.dietaryRestrictions;
    let index;
    if (e.target.checked) {
      options.push(e.target.value);
    } else {
      index = options.indexOf(e.target.value);
      options.splice(index, 1);
    }

    this.setState({ dietaryRestrictions: options });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.photoFile) {
      const data = new FormData(e.target);
      data.append("file", this.state.photoFile);
      uploadPhoto(data).then(res => {
       
        let user = {
          email: this.state.email,
          handle: this.state.handle,
          bio: this.state.bio,
          photoId: res.data.newData.photoId,
          photoUrl: res.data.newData.Location,
          dietaryRestrictions: this.state.dietaryRestrictions,
          password: this.state.password,
          password2: this.state.password2,
        };
        this.props.signup(user, this.props.history);
      })

    } else {

      let user = {
        email: this.state.email,
        handle: this.state.handle,
        bio: this.state.bio,
        photoId: this.state.photoId,
        photoUrl: this.state.photoUrl,
        dietaryRestrictions: this.state.dietaryRestrictions,
        password: this.state.password,
        password2: this.state.password2,
      };
      this.props.signup(user, this.props.history); // WHY Pass in history?
    }
    
  }

  handlePhotoFile(e) {
    e.preventDefault();
    this.setState({
      photoFile: e.target.files[0]
    })
  }


  handleDemoLogin(e) {
    e.preventDefault();
    let user = {
      email: 'DemoUser@gmail.com',
      password: 'DemoUser'
    }
    this.props.login(user)
      .then(() => this.props.history.push(this.props.redirectLink))
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="form-container-session-sign">
        <h1>Melting Pot</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form">
            <h2>Sign Up</h2>

            <div className="signup-inputs">
              <label>
                Email:&nbsp;
                <input
                  type="text"
                  className="input-field"
                  value={this.state.email}
                  onChange={this.update("email")}
                  placeholder="Email"
                />
              </label>

              <label>
                Handle:&nbsp;
                <input
                  type="text"
                  className="input-field"
                  value={this.state.handle}
                  onChange={this.update("handle")}
                  placeholder="Handle"
                />
              </label>

              <label>
                Password:&nbsp;
                <input
                  type="password"
                  className="input-field"
                  value={this.state.password}
                  onChange={this.update("password")}
                  placeholder="Password"
                />
              </label>

              <label>
                Confirm Password:&nbsp;
                <input
                  type="password"
                  className="input-field"
                  value={this.state.password2}
                  onChange={this.update("password2")}
                  placeholder="Confirm Password"
                />
              </label>

              <label>
                Bio:&nbsp;
                <input
                  type="textbox"
                  className="input-field"
                  value={this.state.bio}
                  onChange={this.update("bio")}
                  placeholder="Bio"
                />
              </label>

              <label>
                Upload Profile Picture:&nbsp;
                <input
                  type="file"
                  className="input-field upload-pic"
                  name=""
                  id=""
                  onChange={this.handlePhotoFile}
                />
              </label>
            </div>

            <label className="checkbox-main-container">
              <div classname="dietary-title">Dietary Restrictions:</div>

              <div>
                <div className="checkbox-container">
                  <div className="checkbox-col-1">
                    <label>
                      <input
                        type="checkbox"
                        value="Vegan"
                        onChange={this.handleCheckboxChange.bind(this)}
                      />
                      &nbsp;Vegan
                    </label>

                    <label>
                      <input
                        type="checkbox"
                        value="Vegetarian"
                        onChange={this.handleCheckboxChange.bind(this)}
                      />
                      &nbsp;Vegetarian
                    </label>

                    <label>
                      <input
                        type="checkbox"
                        value="Meat Lovers"
                        onChange={this.handleCheckboxChange.bind(this)}
                      />
                      &nbsp;Meat Lover
                    </label>

                    <label>
                      <input
                        type="checkbox"
                        value="Keto"
                        onChange={this.handleCheckboxChange.bind(this)}
                      />
                      &nbsp;Keto
                    </label>
                  </div>
                  <div className="checkbox-col-2">
                    <label>
                      <input
                        type="checkbox"
                        value="Whole 30"
                        onChange={this.handleCheckboxChange.bind(this)}
                      />
                      &nbsp;Whole 30
                    </label>

                    <label>
                      <input
                        type="checkbox"
                        value="Low Carb"
                        onChange={this.handleCheckboxChange.bind(this)}
                      />
                      &nbsp;Low Carb
                    </label>

                    <label>
                      <input
                        type="checkbox"
                        value="Diabetic"
                        onChange={this.handleCheckboxChange.bind(this)}
                      />
                      &nbsp;Diabetic
                    </label>

                    <label>
                      <input
                        type="checkbox"
                        value="None"
                        onChange={this.handleCheckboxChange.bind(this)}
                      />
                      &nbsp;None
                    </label>
                  </div>
                </div>
              </div>
            </label>

            <input className="submit-button" type="submit" value="Submit" />
            <button
              className="login-demo-button"
              onClick={this.handleDemoLogin}
            >
              Demo Login
            </button>
            <div className="session-errors">{this.renderErrors()}</div>
          </div>
        </form>

        <br></br>
        <div className="signup-option">
          <label>Already a User?</label>
          <br></br>
          <Link to="/login">
            {" "}
            <input
              className="login-button input-field"
              type="submit"
              value="Login"
            />
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);