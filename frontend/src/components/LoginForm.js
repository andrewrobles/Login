import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginForm.css';

class LoginForm extends React.Component {
  state = {
    username: '',
    password: ''
  };

  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  render() {
    return (
      <main class="form-signin">
        <form onSubmit={e => this.props.handle_login(e, this.state)}>
          <h1 class="h3 mb-3 fw-normal d-flex justify-content-center">{this.props.label_text}</h1>
        
          <div className="form-floating"> 
            <input
              type="text"
              name="username"
              className="form-control"
              value={this.state.username}
              onChange={this.handle_change}
              id="floatingInput"
              placeholder="Username"
            />
            <label for="floatingInput">Username</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              name="password"
              className="form-control"
              value={this.state.password}
              onChange={this.handle_change}
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>
          <input class="w-100 btn btn-lg btn-primary mt-3" type="submit" value={this.props.primary_button_text} />
          <button type="button" class="w-100 btn btn-light mt-3" onClick={this.props.secondary_button_action}>
            {this.props.secondary_button_text}
          </button>
        </form>
        <div class="mt-1">
          <label class="d-flex justify-content-center">
          </label>
        </div>
      </main>
    );
  }
}

export default LoginForm;

LoginForm.propTypes = {
  handle_login: PropTypes.func.isRequired,
};
