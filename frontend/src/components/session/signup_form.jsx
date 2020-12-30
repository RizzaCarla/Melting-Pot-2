import React from 'react'
import { withRouter } from 'react-router-dom';
import { uploadPhoto } from '../../util/upload_api_util';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      handle: "",
      password: "",
      password2: "",
      bio: "",
      photoUrl: "",
      photoFile: null,
      dietaryRestrictions: [],
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
    this.handlePhotoFile = this.handlePhotoFile.bind(this);
  }

  // Will have to refactor this as componentWillReceiveProps will be deprecated
  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push("/");
    }

    this.setState({ errors: nextProps.errors });
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
          photoUrl: res.data.data.Location,
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
      <div className="signup-form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="signup-form">
            <br />

            <input
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="Email"
            />
            <br />

            <input
              type="text"
              value={this.state.handle}
              onChange={this.update("handle")}
              placeholder="Handle"
            />
            <br />

            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
            />
            <br />

            <input
              type="password"
              value={this.state.password2}
              onChange={this.update("password2")}
              placeholder="Confirm Password"
            />
            <br />

            <input
              type="textbox"
              value={this.state.bio}
              onChange={this.update("bio")}
              placeholder="Bio"
            />
            <br />
              {/* FOR FILE UPLOAD: type="file" name="" id="" */}
            <label>
              Upload Profile Picture:
              <input
                type="file"
                name=""
                id=""
                onChange={this.handlePhotoFile}
              />
            </label>
            <br />

            <span className="checkbox-container">
              <label>
                Vegan
                <input
                  type="checkbox"
                  value="Vegan"
                  onChange={this.handleCheckboxChange.bind(this)}
                />
              </label>

              <label>
                Vegetarian
                <input
                  type="checkbox"
                  value="Vegetarian"
                  onChange={this.handleCheckboxChange.bind(this)}
                />
              </label>

              <label>
                Meat Lover
                <input
                  type="checkbox"
                  value="Meat Lovers"
                  onChange={this.handleCheckboxChange.bind(this)}
                />
              </label>

              <label>
                Keto
                <input
                  type="checkbox"
                  value="Keto"
                  onChange={this.handleCheckboxChange.bind(this)}
                />
              </label>

              <label>
                Whole 30
                <input
                  type="checkbox"
                  value="Whole 30"
                  onChange={this.handleCheckboxChange.bind(this)}
                />
              </label>

              <label>
                Low Carb
                <input
                  type="checkbox"
                  value="Low Carb"
                  onChange={this.handleCheckboxChange.bind(this)}
                />
              </label>

              <label>
                Diabetic
                <input
                  type="checkbox"
                  value="Diabetic"
                  onChange={this.handleCheckboxChange.bind(this)}
                />
              </label>

              <label>
                None
                <input
                  type="checkbox"
                  value="None"
                  onChange={this.handleCheckboxChange.bind(this)}
                />
              </label>
            </span>
            <br />

            <input type="submit" value="Submit" />
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);