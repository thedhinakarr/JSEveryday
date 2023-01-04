import axios from "axios";
import readlineSync from "readline-sync";
import chalk from "chalk";


//URL
//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

let cityName=readlineSync.question("Enter city name: ")
let apikey = "cd27fd3f8834cbca9b7c7f6c0f625b98" //This is the openweather api key. Not the github one.

/*

1.Display city name at top

2.Display current temperature in celcius and farenheit

3.display Min and Max temp in Celcius and Farenheit

4.display Sunset and sunrise time in IST (Depending on their local time zone)(UTC-->IST)

5.Display Humidity.

6.Display local time.

7.Display UTC time.

8.DISPLay city name with 

*/

function getWeatherData(){
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}`)
    .then((res)=>{
        //console.log(res.data)
        function output(res){
            console.log()
            console.log(`--------------------------------------------------------------`)
            console.log(`NAME: ${chalk.greenBright(`${res.data.name}`)} Country Code: ${chalk.greenBright(`${res.data.sys.country}`)} EPOCH_TIME:${chalk.greenBright(res.data.dt)}s` )
            console.log(`--------------------------------------------------------------`)
            console.log(`${chalk.cyanBright("Current temp")}--> ${(ftempConv(res.data.main.temp))}\u00B0F ${ctempConv(res.data.main.temp)}\u00B0C`)
            console.log(`${chalk.cyanBright("Min temp")}--> ${ftempConv(res.data.main.temp_min)}\u00B0F ${ctempConv(res.data.main.temp_min)}\u00B0C`)
            console.log(`${chalk.cyanBright("Max temp")}--> ${ftempConv(res.data.main.temp_max)}\u00B0F ${ctempConv(res.data.main.temp_max)}\u00B0C`)
            console.log(`${chalk.cyanBright("Humidity")}: ${res.data.main.humidity}g.m^3`)
            console.log(chalk.red(`* Sunrise and sunset of ${chalk.yellowBright(res.data.name)} relative to IST. *`));
            console.log(`${chalk.cyanBright("Sunrise")}--> ${displayIST(res.data.sys.sunrise)}\n${chalk.cyanBright("Sunset")}--> ${displayIST(res.data.sys.sunset)}`);
            console.log(chalk.red(`* TIMEZONE: ${res.data.timezone/3600}hrs GMT/UTC *`))
            console.log(`${chalk.cyanBright('Local time and date:')} ${localTime(res.data.dt,res.data.timezone)}`)
            console.log(`${chalk.cyanBright('UTC TIME and date:')} ${UTCTime(res.data.dt)}`)
            
        }

        function ftempConv(temp){
            return ((1.8*(temp-273.15))+32).toFixed(2)
        }

        function ctempConv(temp){
            return  (temp - 273.15).toFixed(2)
        }

        function displayIST(time){
            let sumtime = time;

            let date = new Date(sumtime*1000);
            return `${date.getHours()}H ${date.getMinutes()}M ${date.getSeconds()}S`

            // The timezone difference will give tthe number of seconds to be adde to the given local time.
            //the time given is epoch time.
            //The timezone,gives the timezone seconds shit.
            

            //UTC is 5.5 hours behind IST.//
            //EPOCH-->UTC-->IST.

            // let delay = res.data.timezone;

            // let istInsec= time+(delay); 

            // console.log((istInsec<time))

            // let dat = new Date(istInsec*1000);
            // console.log(typeof delay)

            // return `${dat.getUTCHours()}H ${dat.getUTCMinutes()}M ${dat.getUTCSeconds()}S`

        }

        function localTime(time,timezone){

     
            let timezoneDifference = timezone - 19800;
            let sumtime = time+timezoneDifference;

            let date = new Date(sumtime*1000);
            
            let localTimeString= `${date.getHours()}H ${date.getMinutes()}M ${date.getSeconds()}S || ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
            return localTimeString;

            // let xdate = new Date(time*1000);
            // console.log()
            // console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ====> Local time.`)
            // console.log(`${xdate.getUTCHours()}:${xdate.getUTCMinutes()}:${xdate.getUTCSeconds()} ====> Remains constant.`)
            // console.log();
            // epochtime+delay=local time.
            // Need to Use time of date calculation. "dt"
            // Use timezone.
            
        }

        function UTCTime(time){
            let xdate = new Date(time*1000);
            let UTCTimeString= `${xdate.getUTCHours()}H ${xdate.getUTCMinutes()}M ${xdate.getUTCSeconds()}S || ${xdate.getUTCDate()}/${xdate.getUTCMonth()}/${xdate.getUTCFullYear()}`;
            return UTCTimeString;

        }

        output(res);

       
    })

    .catch((error)=>{
        console.log("SHITT failed.")
    })
}




getWeatherData();