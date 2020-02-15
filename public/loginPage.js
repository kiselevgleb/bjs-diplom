'use strict';
const userForm1 = new UserForm();

userForm1.loginFormCallback = data=>ApiConnector.login(data,(err, data1)=>{
    if (err!==null) {
        location.reload();
            console.log(`OK`);
            
    } else {
        console.error('Error login');}
    });



userForm1.registerFormCallback = data=>ApiConnector.register(data,(err, data1)=>{
    if (err!==null) {
            console.error('Error reg');
    } else {
            location.reload();
            console.log(`OK`);}
    });
