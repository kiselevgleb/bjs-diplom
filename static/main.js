class Profile{
    constructor({username, name:{firstName, lastName}, password}){
        this.username = username;
        this.name = {firstName, lastName };
        this.password = password;
    }

addUser(callback){
    console.log(`Start addUser`);
    return ApiConnector.createUser({ username:this.username, name:this.name, password:this.password}, (err, data) => {
        console.log(`Finish addUser`);
        callback(err, data);
    });
}
// const Ivan = new Profile({username: 'ivan',
// name: { firstName: 'Ivan', lastName: 'Chernyshev' },password: 'ivanspass',
// });
auto(callback){
    console.log(`Start auto`);
    return ApiConnector.performLogin({ username:this.username, password: this.password}, (err, data) => {
        console.log(`Finish auto`);
        callback(err, data);
    });
}

addMoney({ currency, amount }, callback) {
    console.log(`Adding ${amount} of ${currency} to ${this.username}`);
    return ApiConnector.addMoney({ currency, amount }, (err, data) => {
        console.log(`Added ${amount} of ${currency} to ${this.username}`);
        callback(err, data);
    });
}
convertMoney({ fromCurrency, targetCurrency, targetAmount }, callback){
    console.log(`Start convertMoney`);
    return ApiConnector.convertMoney({ fromCurrency, targetCurrency, targetAmount }, (err, data) => {
        console.log(`Finish convertMoney`);
        callback(err, data);
    });

}
transferMoney({ nameTo,sum }, callback){
    console.log(`Start transferMoney`);
    return ApiConnector.convertMoney({ nameTo,sum }, (err, data) => {
        console.log(`Finish transferMoney`);
        callback(err, data);
    });

}
getStocks(){
    console.log(`Start getStocks`);
    return ApiConnector.getStocks((err, data) => {
        console.log(`Finish getStocks`);
        callback(err, data);
    });

}
findNum(fromCurrency, targetCurrency, date){
    let n=0;
    for (var d in date) {
        if(d === fromCurrency+"_"+targetCurrency){
            n= date[d];
        }
      }
    return n;
}
}
function main(){
    const Ivan = new Profile({
                    username: 'ivan',
                    name: { firstName: 'Ivan', lastName: 'Chernyshev' },
                    password: 'ivanspass',
                });
    const Max = new Profile({
                    username: 'max',
                    name: { firstName: 'Max', lastName: 'Cher' },
                    password: 'pass',
                }); 
    Max.addUser((err, data) => {
                    if (err) {
                            console.error('Error added Max');
                    } else {
                            console.log(`Added Max`);}
                        });                       
    Ivan.addUser((err, data) => {
        if (err) {
                console.error('Error added Ivan');
        } else {
                console.log(`Added Ivan`);}
            });

    Ivan.auto((err, data) => {
        if (err) {
                console.error('Error login Ivan');
        } else {
                console.log(`Ivan was login`);}
            });


    Ivan.addMoney({ currency: 'RUB', amount: 100 }, (err, data) => {
        if (err) {
                console.error('Error during adding money to Ivan');
        } else {
                console.log(`Added 100 rubles to Ivan`);}
            });
    Ivan.convertMoney({ fromCurrency: 'RUB', targetCurrency: 'NETCOIN',  targetAmount: 100*findNum(fromCurrency, targetCurrency, getStocks(err, data))}, (err, data) => {
        if (err) {
                console.error('Error during adding money to Ivan');
        } else {
                console.log(`Added 100 rubles to Ivan`);}
            });

    Ivan.transferMoney({ to: 'max', amount: 1}, (err, data) => {
        if (err) {
                console.error('Error transferMoney to max');
        } else {
                console.log(`TransferMoney ok`);}
        }); 
}

main();
