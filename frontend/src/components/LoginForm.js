import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <span>
        <main class="form-signin">
          <form>
            <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

            <div class="form-floating">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
              <label for="floatingInput">Username</label>
            </div>
            <div class="form-floating">
              <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
              <label for="floatingPassword">Password</label>
            </div>

            <button class="w-100 btn btn-lg btn-primary mt-3" type="submit">Sign in</button>
            <div class="mt-3">
              <label>
                <span type="checkbox" value="remember-me">Create account </span>
              </label>
            </div>
          </form>
        </main>
        <form onSubmit={e => this.props.handle_login(e, this.state)}>
          <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
          
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handle_change}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handle_change}
          />
          <input type="submit" />
        </form>
      </span>
    );
  }
}

export default LoginForm;

LoginForm.propTypes = {
  handle_login: PropTypes.func.isRequired
};
