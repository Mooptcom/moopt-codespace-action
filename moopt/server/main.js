import { Meteor } from 'meteor/meteor';
import JohnnyFive from 'johnny-five';

var five = require("johnny-five");
const { Board, Thermometer } = require("johnny-five");
const board = new Board({ port : '/dev/cu.wchusbserial1410' });


Meteor.startup(() => {
  // code to run on server at startup
  board.on('error', function (error) {
      console.error('Johnny Five Error', error);
  });

  board.on("ready", Meteor.bindEnvironment(function() {
      /*// The Arduino UNO is equipped with some special pins, like pin 13 (top right), is connected with the builtin LED. 
      // The builtin LED is marked L on the PCB.
      var led = new five.Led(13);
      // blink: 1 second = 1000
      led.blink(100);*/

      // This requires OneWire support using ConfigurableFirmata
      // https://github.com/firmata/ConfigurableFirmata & http://firmatabuilder.com/ 
      const thermometer = new Thermometer({
        controller: "DS18B20",
        pin: 5
      });

      thermometer.on("change", () => {
        const {address, celsius, fahrenheit, kelvin} = thermometer;
        console.log(`Thermometer at address: 0x${address.toString(16)}`);
        console.log("  celsius      : ", celsius);
        console.log("  fahrenheit   : ", fahrenheit);
        console.log("  kelvin       : ", kelvin);
        console.log("--------------------------------------");
      });
  }));
});
