import React, { Component } from 'react';
import TwitterLogin from 'react-twitter-auth';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios'
class App extends Component {

    constructor() {
        super();
        this.state = { isAuthenticated: false, user: null, token: '' };
    }

    logout = () => {
        this.setState({ isAuthenticated: false, token: '', user: null })
    };

    onFailure = (error) => {
        console.log(error);
        alert(JSON.stringify(error));
    };

    twitterResponse = (response) => {
        const token = response.headers.get('x-auth-token');
        response.json().then(user => {
            if (token) {
                this.setState({ isAuthenticated: true, user, token });
            }
        });
    };

    facebookResponse = (response) => {
console.log(response);
    };

    googleResponse = (response) => {
        console.log('res cua google:', JSON.stringify(response.tokenId));
        axios({
            method: "POST",
            url: "http://localhost:3006/api/v1/auth/signin",
            data: { login_type: 'google', email: '', password: '', token_id: response.tokenId}
        }).then(response => {
            console.log(response);
        })
    };

    render() {
        let content = !!this.state.isAuthenticated ?
            (
                <div>
                    <p>Authenticated</p>
                    <div>
                        {this.state.user.email}
                    </div>
                    <div>
                        <button onClick={this.logout} className="button">
                            Log out
                        </button>
                    </div>
                </div>
            ) :
            (
                <div>
                    <TwitterLogin loginUrl="http://localhost:4000/api/v1/auth/twitter"
                        onFailure={this.onFailure} onSuccess={this.twitterResponse}
                        requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse" />
                    <FacebookLogin
                        appId='479068386664437'
                        autoLoad={false}
                        fields="name,email,picture"
                        callback={this.facebookResponse} />
                    <GoogleLogin
                        clientId='815350976526-kem3lh8prvspmiv39l3g00op631p236m.apps.googleusercontent.com'
                        buttonText="Login"
                        onSuccess={this.googleResponse}
                        onFailure={this.onFailure}
                    />

                </div>
            );

        return (
            <div className="App">
                {content}
            </div>
        );
    }
}

export default App;
