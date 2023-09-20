// C++ code
//
#include <Servo.h>

int temp = 0;

int unnamed = 0;

Servo servo_9;

void setup()
{
  pinMode(A0, INPUT);
  servo_9.attach(9, 500, 2500);
  pinMode(8, OUTPUT);
  pinMode(0, OUTPUT);

  // define temp variable
  temp = 0;
}

void loop()
{
  // assign the temperature in Celsius to temp
  // variable
  temp = (-40 + 0.488155 * (analogRead(A0) - 20));
  // check the temperature
  if (temp >= 30) {
    servo_9.write(360);
    // If above 50 Celsius will beep and turn on the
    // red led
    if (temp > 50) {
      tone(8, 523, 1000); // play tone 60 (C5 = 523 Hz)
      digitalWrite(0, HIGH);
    }
  }
  delay(10); // Delay a little bit to improve simulation performance
}