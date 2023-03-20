const operatingSystem = require("os");

// info about current user
const user = operatingSystem.userInfo();
console.log(user);

// method return the system uptime
console.log(`The system uptime is ${operatingSystem.uptime() / 3600} sec`);

const currentOs = {
  name: operatingSystem.type(),
  release: operatingSystem.release(),
  totalMemo: operatingSystem.totalmem(),
  freeMemo: operatingSystem.freemem(),
};

console.log(currentOs);
