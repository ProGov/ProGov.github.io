/*Application ID: 33177856-90b2-4115-858a-6aeaace22739*/

/*GET https://login.microsoftonline.com/{tenant}/oauth2/authorize?
client_id=6731de76-14a6-49ae-97bc-6eba6914391e
&response_type=id_token
&redirect_uri=http%3A%2F%2Flocalhost%3a12345
&response_mode=form_post
&scope=openid
&state=12345
&nonce=7362CAEA-9CA5-4B43-9BA3-34D7C303EBA7
*/


var request = new XMLHttpRequest();

request.open('GET', 'https://graph.microsoft.com/v1.0/me', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      console.log(movie.displayName);
    });
  } else {
    console.log('error');
  }
}

request.send();