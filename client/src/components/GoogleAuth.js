import React from 'react'

/*Eventually .env file would be omitted from committing data to a repository,
make sure you create .env in the directory, insert REACT_APP_OAUTH2_CLIENT_ID 
variable in it and place your Google OAuth2 client id. Mind the environment
variable must begin with REACT_APP_ since it's react app.*/
class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      const clientId = process.env.REACT_APP_OAUTH2_CLIENT_ID;
      window.gapi.client.init({
        clientId,
        scope: "email",
      });
    })  
  }
  render() {
    return (
        <div>Google Auth</div>
    )  
  }
}
export default GoogleAuth;