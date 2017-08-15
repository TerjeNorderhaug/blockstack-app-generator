import React, { Component } from 'react';

export default class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleSignOut } = this.props;
    
    return (
      <div className="panel-welcome hide" id="section-2">
        <div className="avatar-section">
          <img src={ person.avatarUrl() } className="img-rounded avatar" id="avatar-image" />
        </div>
        <h1>Hello, <span id="heading-name">{ person.name }</span>!</h1>
        <p className="lead">
          <button
            className="btn btn-primary btn-lg"
            id="signout-button"
            onClick={ handleSignOut.bind(this) }
          >
            Logout
          </button>
        </p>
      </div>
    );
  }
}