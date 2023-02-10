// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    isTrue: true,
    firstNameErr: '',
    lastNameErr: '',
    firstName: '',
    lastName: '',
  }

  submitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName.length === 0 && lastName.length === 0) {
      this.setState({firstNameErr: 'Required', lastNameErr: 'required'})
    } else if (firstName.length === 0) {
      this.setState({firstNameErr: 'Required'})
    } else if (lastName.length === 0) {
      this.setState({lastNameErr: 'Required'})
    } else {
      this.setState({isTrue: false})
    }
  }

  goToFormPage = () => {
    this.setState({
      isTrue: true,
      firstName: '',
      lastName: '',
      firstNameErr: '',
      lastNameErr: '',
    })
  }

  changeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  changeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  blurFirstName = () => {
    const {firstName} = this.state
    console.log('hello')
    if (firstName.length === 0) {
      this.setState({firstNameErr: 'Required'})
    } else {
      this.setState({firstNameErr: ''})
    }
  }

  blurLastName = () => {
    const {lastName} = this.state
    if (lastName.length === 0) {
      this.setState({lastNameErr: 'Required'})
    } else {
      this.setState({lastNameErr: ''})
    }
  }

  render() {
    const {isTrue, firstNameErr, lastNameErr, firstName, lastName} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Registration</h1>
        <div className="container">
          {isTrue ? (
            <form className="form" onSubmit={this.submitForm}>
              <label className="label" htmlFor="firstname">
                FIRST NAME
              </label>
              <br />
              <input
                type="text"
                id="firstname"
                className="input"
                onChange={this.changeFirstName}
                onBlur={this.blurFirstName}
                value={firstName}
                placeholder="First name"
              />
              <p className="err-msg">{firstNameErr}</p>
              <label className="label" htmlFor="lastname">
                LAST NAME
              </label>
              <br />
              <input
                type="text"
                className="input"
                id="lastname"
                onChange={this.changeLastName}
                onBlur={this.blurLastName}
                value={lastName}
                placeholder="Last name"
              />
              <p className="err-msg">{lastNameErr}</p>
              <div className="button-container">
                <button type="submit" className="button-submit">
                  Submit
                </button>
              </div>
            </form>
          ) : (
            <>
              <img
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                className="success-img"
                alt="success"
              />
              <p className="success-text">Submitted Successfully</p>
              <button className="submitted-button" onClick={this.goToFormPage}>
                Submit Another Response
              </button>
            </>
          )}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
