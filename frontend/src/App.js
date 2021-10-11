import React, { Component } from 'react';
import Nav from './components/Nav';
import SubmitForm from './components/SubmitForm';
import './App.css';

const base_url = 'http://localhost:8000'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed_form: '',
      logged_in: localStorage.getItem('token') ? true : false,
      username: ''
    };
  }

  componentDidMount() {
    if (this.state.logged_in) {
      fetch(base_url + '/core/current_user/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(json => {
          this.setState({ username: json.username });
        });
    }
  }

  handle_login = (e, data) => {
    e.preventDefault();
    fetch(base_url + '/token-auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'http://localhost:3000'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: json.user.username
        });
      });
  };

  handle_logout = () => {
    localStorage.removeItem('token');
    this.setState({ logged_in: false, username: '' });
  };

  handle_signup = (e, data) => {
    e.preventDefault();
    fetch(base_url + '/core/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: json.username
        });
      });
  };

  display_form = form => {
    this.setState({
      displayed_form: form
    });
  };

  render() {
    let form;
    switch (this.state.displayed_form) {
      case 'login':
        form = <SubmitForm 
                  label_text={"Please sign in"}
                  submit_button_text = {"Sign in"}
                  handle_submit = {this.handle_login}
                  secondary_button_text = {"Create account"}
                  secondary_button_action = {() => this.display_form('signup')}
                />;
        break;
      case 'signup':
        form = <SubmitForm
                  label_text={"Please sign up"}
                  submit_button_text = {"Create account"}
                  handle_submit = {this.handle_signup}
                  secondary_button_text = {"Sign in"}
                  secondary_button_action = {() => this.display_form('signin')}
               />;
        break;
      default:
        form = <SubmitForm 
                label_text={"Please sign in"}
                submit_button_text = {"Sign in"}
                handle_submit = {this.handle_login}
                secondary_button_text = {"Create account"}
                secondary_button_action = {() => this.display_form('signup')}
              />;
    }

    return (
      <div className="App">
        <Nav
          logged_in={this.state.logged_in}
          display_form={this.display_form}
          handle_logout={this.handle_logout}
        />
        <span>
          {this.state.logged_in
            ? <h3>Hello, {this.state.username}</h3>
            : form
          }
        </span>
      </div>
    );
  }
}

export default App;
