const fs = require('fs');

function logLogin(){
    const loginTime = new Date().toLocaleString();
    fs.appendFileSync('loginLogout.log', `User ${username}  logged in at: ${loginTime}\n`);
}

function logLogout(){
    const logoutTime = new Date().toLocaleString();
    fs.appendFileSync('loginLogout.log', `User ${username} logged out at: ${logoutTime}\n`);
}

const username = process.argv[2];

if(!username) {
    console.error('Please provide a username.');
    process.exit(1);
}

logLogin(username);
logLogout(username);

module.exports = { logLogin, logLogout };