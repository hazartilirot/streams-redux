import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

/*Eventually .env file would be omitted from committing data to a repository,
make sure you create .env in the directory, insert REACT_APP_OAUTH2_CLIENT_ID 
variable in it and place your Google OAuth2 client id. Mind the environment
variable must begin with REACT_APP_ since it's react app.*/
class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("auth2", () => {
      const clientId = process.env.REACT_APP_OAUTH2_CLIENT_ID;
      window.gapi.auth2
        .init({
          clientId,
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  onAuthChange = (isSignedIn) => {
    if (isSignedIn) this.props.signIn(this.auth.currentUser.get().getId());
    else this.props.signOut();
  };
  renderAuthButton() {
    if (this.props.isSignedIn) {
      return (
        <button
          onClick={() => this.auth.signOut()}
          className="ui red google button"
        >
          <i className="google icon" />
          Sign out
        </button>
      );
    } else if (!this.props.isSignedIn) {
      return (
        <button
          onClick={() => this.auth.signIn()}
          className="ui red google button"
        >
          <i className="google icon" />
          Sign In
        </button>
      );
    }
  }
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}
const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};
export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
