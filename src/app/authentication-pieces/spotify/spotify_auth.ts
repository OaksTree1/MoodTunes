const domain = `http://localhost:4200`;

export var spotify_auth = {
    clientID : 'bb334333021d47ad99e8d7fa9c3465c0',
    scopes : [`user-library-read`, `user-read-recently-played`, `user-top-read`, `user-read-currently-playing`, ],
    testing_redirect_uri : `${domain}/getCode`,
    access_token_redirect_url : `${domain}/myAccount`,
}