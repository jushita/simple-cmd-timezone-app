const yargs = require('yargs');
const axios = require('axios').default;

let argv = yargs.argv;
let timeZone = argv.timeZone;

if(timeZone) {
    let url = `https://www.timeapi.io/api/Time/current/zone?timeZone=${timeZone}`
    axios.get(url, {}).then((response) => {
        let result = response.data;
        console.log('Time:', result);
    })
    .catch(err => {
        console.log(err)
    })
} else {
    console.log('Please enter a Time Zone')
}


// Enter node app.ts --country="Europe/Amsterdam"


