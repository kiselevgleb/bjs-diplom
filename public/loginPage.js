'use strict';
const userForm1 = new UserForm();

userForm1.loginFormCallback = data=>ApiConnector.login(data);
userForm1.registerFormCallback = data=>ApiConnector.register(data);
