/*
 * customFirmata.ino generated by FirmataBuilder
 * Sun May 21 2023 23:58:01 GMT-0400 (EDT)
 */

#include <ConfigurableFirmata.h>

#include <DigitalInputFirmata.h>
DigitalInputFirmata digitalInput;

#include <AnalogInputFirmata.h>
AnalogInputFirmata analogInput;

#include <Wire.h>
#include <I2CFirmata.h>
I2CFirmata i2c;

#include <OneWireFirmata.h>
OneWireFirmata oneWire;

#include <FirmataExt.h>
FirmataExt firmataExt;

#include <FirmataReporting.h>
FirmataReporting reporting;

void systemResetCallback()
{
  for (byte i = 0; i < TOTAL_PINS; i++) {
    if (IS_PIN_ANALOG(i)) {
      Firmata.setPinMode(i, ANALOG);
    } else if (IS_PIN_DIGITAL(i)) {
    }
  }
  firmataExt.reset();
}

void initTransport()
{
  // Uncomment to save a couple of seconds by disabling the startup blink sequence.
  // Firmata.disableBlinkVersion();
  Firmata.begin(57600);
}

void initFirmata()
{
  Firmata.setFirmwareVersion(FIRMATA_FIRMWARE_MAJOR_VERSION, FIRMATA_FIRMWARE_MINOR_VERSION);

  firmataExt.addFeature(digitalInput);
  firmataExt.addFeature(analogInput);
  firmataExt.addFeature(i2c);
  firmataExt.addFeature(oneWire);
  firmataExt.addFeature(reporting);

  Firmata.attach(SYSTEM_RESET, systemResetCallback);
}

void setup()
{
  initFirmata();

  initTransport();

  Firmata.parse(SYSTEM_RESET);
}

void loop()
{
  digitalInput.report();

  while(Firmata.available()) {
    Firmata.processInput();
  }

  if (reporting.elapsed()) {
    analogInput.report();
    i2c.report();
  }
}