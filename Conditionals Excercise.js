let engineIndicatorLight = "green";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;

if (engineIndicatorLight === "green") {
    console.log("Engines have started.");
}else if (engineIndicatorLight === "green blinking") {
    console.log("Engines are preparing to start.");
} else {
    console.log("Engines are off. Big sad.");
}

if (crewStatus) {
    console.log("Crew Ready!");
} else {
    console.log("Crew is NOT ready.");
}

if (computerStatusCode === 200) {
    console.log("PLease stand by. Computer is rebooting.");
} else if (computerStatusCode === 400) {
    console.log("Sucess! Computer is online.");
} else {
    console.log("ALERT: Computer is offline!!");
}

if (shuttleSpeed > 17500) {
    console.log("ALERT: Escape velocity reached!");
} else if (shuttleSpeed < 8000) {
    console.log("ALERT: Cannot maintain orbit!");
} else {
    console.log('Stable Speed.');
}

if (crewStatus && computerStatusCode === 200 && spaceSuitsOn) {
    console.log("all systems go");
 } else {
    console.log("WARNING. Not ready");
 }

 if (!crewStatus || computerStatusCode !== 200 || !spaceSuitsOn) {
    console.log("WARNING. Not ready");
 } else {
    console.log("all systems go");
 }

 let fuelLevel = 18000
 let engineTemperature = 2500

 if ((fuelLevel < 1000) || (engineTemperature > 3500) || engineIndicatorLight === "red blinking") {
    console.log("ENGINE FAILURE IMMINENT!!! AAAAHHHH");
 } else if ((fuelLevel <= 5000) || (engineTemperature > 2500)) {
    console.log("Check fuel level. Engines are running hot.");
 } else if ((fuelLevel > 20000) && (engineTemperature <= 2500)){
    console.log('Full tank. Engines are gewd.');
 } else if ((fuelLevel > 10000) && (engineTemperature <= 2500)){
    console.log('Fuel level is above 50%. Engines are gewd.');
 } else if ((fuelLevel > 5000) && (engineTemperature <= 2500)){
    console.log('Fuel level is above 25%. Engine is gewd.');
 } else {
    console.log('Fuel and engine status pending. Hold please.');
 }

 let commandOverride = true;

 if (((fuelLevel > 20000) && (engineIndicatorLight !== "red blinking")) || commandOverride === true){
    console.log('Cleared to launch!');
 } else {
    console.log('Launch scrubbed!')
 }