const fs = require('fs');
const { logLogin, logLogout } = require('./loginLogout');
const { describe, afterEach, it, beforeEach } = require('node:test');

describe('logLogin', () => {
    beforeEach(() => {
        fs.writeFileSync('loginLogout.log','');
    })
})

afterEach(() => {
    fs.unlinkSync('loginLogout.log');
});

it('should log login time with username', () => {
    const username = 'testUser';
    logLogin(username);
    const logContent = fs.readFileSync('loginLogout.log', 'utf8');
    expect(logContent),toContain(`User ${username} logged in`);
})

it('should log login time without username', () => {
    logLogin();
    const logContent = fs.readFileSync('loginLogout.log', 'utf8');
    expect(logContent),toContain(`User logged in`);
})

it('should log logout time with username', () => {
    const username = 'testUser';
    logLogout(username);
    const logContent = fs.readFileSync('loginLogout.log', 'utf8');
    expect(logContent),toContain(`User ${username} logged out`);
})

it('should log logout time without username', () => {
    logLogout();
    const logContent = fs.readFileSync('loginLogout.log', 'utf8');
    expect(logContent),toContain(`User logged out`);
})