const inputs =  process.argv.slice(2)
const alarmTimes = [];

for (let i = 0; i < inputs.length; i++) {
  if (inputs[i] >= 0) {
    alarmTimes.push(inputs[i]);
  }
}

for(let i = 0; i< alarmTimes.length; i++) {
setTimeout(() => {
  process.stdout.write('\x07');
}, alarmTimes[i]*1000)
}