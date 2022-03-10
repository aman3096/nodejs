//built in modules- os, fs, http, path
//os modules  contains all function that provides information about os
//.There are other functions as well but for nderstanding purpose these re the ones for now
const os = require('os')
const user = os.userInfo();
console.log(os.homedir());

console.log(`the system uptime is ${os.uptime}`);

const osInfo = {
    type: os.type(),
    release: os.type(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(osInfo);


//os 