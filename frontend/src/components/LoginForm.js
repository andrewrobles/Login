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
          <h1 class="h3 mb-3 fw-normal d-flex justify-content-center">Please sign in</h1>
          
          <label htmlFor="username">Username</label>

          <input
            type="text"
            name="username"
            class="form-control"
            value={this.state.username}
            onChange={this.handle_change}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            class="form-control"
            value={this.state.password}
            onChange={this.handle_change}
          />
          <input class="w-100 btn btn-lg btn-primary mt-3" type="submit" />
        </form>
        <div class="mt-3">
          <label class="d-flex justify-content-center">
            <span type="checkbox" value="remember-me">Create account</span>
          </label>
        </div>
      </main>
    );
  }
}

export default LoginForm;

LoginForm.propTypes = {
  handle_login: PropTypes.func.isRequired
};
