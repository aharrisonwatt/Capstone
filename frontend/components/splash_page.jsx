var React = require('react');
var ReactRouter = require('react-router'),
    hashHistory = ReactRouter.hashHistory,
    CurrentUserState = require("../mixins/current_user_state");


var SplashPage = React.createClass({
  handleClick: function(){
    hashHistory.push('happenings');
  },

  render: function() {
    return (
      <div className='splash-page'>
        <div className='splash-page-container'>
          <h2 className='splash-page-welcome-logo'>Session Finder</h2>
          <h2 className='splash-page-welcome-tag'>Find People Playing Games Near You</h2>
        </div>
        <div className='splash-page-buttons'>
          <button className='pure-button click-me' onClick={this.handleClick}>Get Your Game On</button>
        </div>
      </div>
    );
  }
});

module.exports = SplashPage;
