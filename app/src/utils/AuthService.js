import Auth0Lock from 'auth0-lock';

export default class AuthService {
  constructor(clientId, domain) {
    const options = {
      closable: false,
      theme: {
        primaryColor: 'rgb(0, 112, 211)',
      }
    };
    this.lock = new Auth0Lock(clientId, domain, options);
    // Add callback for lock `authenticated` event
    this.lock.on('authenticated', this._doAuthentication.bind(this));
    // binds login functions to keep this context
    this.login = this.login.bind(this);
  }

  _doAuthentication(authResult){
    // Saves the user token
    this.setToken(authResult.idToken);
  }

  getProfile(){
    const token = this.getToken();
    return new Promise((resolve,reject) => {
      this.lock.getProfile(token, function(err,profile){
        if(err){
          reject(err);
        }
        return resolve(profile);
      });
    });
  }

  login() {
    // Call the show method to display the widget.
    this.lock.show();
  }

  loggedIn(){
    // Checks if there is a saved token and it's still valid
    return !!this.getToken();
  }

  setToken(idToken){
    // Saves user token to localStorage
    localStorage.setItem('id_token', idToken);
  }

  getToken(){
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token');
  }

  logout(){
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token');
  }
}