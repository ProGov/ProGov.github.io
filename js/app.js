function query(URL, access_token) {
    var req = new XMLHttpRequest();
    req.open("GET", url, false);
    req.setRequestHeader("Authorization", "Bearer" + access_token);
    req.send(null);
    return req.responseText;
}