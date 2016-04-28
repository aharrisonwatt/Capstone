var React = require('react'),
    LoginForm = require('./login_form'),
    CurrentUserState = require('../mixins/current_user_state'),
    HappeningIndex = require('./happening_index');


var App = React.createClass({
  mixins: [CurrentUserState],

  render: function() {
    return (
      <div>
        <header><h1>Session Finder</h1></header>
        <LoginForm />
        <HappeningIndex />
        {this.props.children}
      </div>
    );
  }

});

module.exports = App;
