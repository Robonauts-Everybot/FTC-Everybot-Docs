---
sidebar_label: 'Spark Max Setup'
sidebar_position: 3
description: ""
---

import Image from '@theme/IdealImage';

# Configuring Spark MAX Motor Controllers

To configure the Spark MAX motor controllers, please download the [REV Hardware Client](https://docs.revrobotics.com/software/sparkmax/rev-hardware-client/getting-started-with-the-rev-hardware-client). This webpage has all the information needed to use the Spark MAX but we will go over the relevant information below.

<p><br /> </p>

<div style={{ textAlign: 'center'}}><div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '624.00px', height: '102.67px'}}><Image autoLoad={"true"} img={require("/static/media/software/spark/image_0.png")} style={{ width: '624.00px', height: '102.67px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div></div>

<p><br /> </p>

Run the installer and click through the install process. RUn the program and check the &ldquo;About&rdquo; tab to see if there are any updates available.

<p><br /> </p>

The Spark Max includes a USB C port which is the easiest way to interface with individual Spark Maxes. Spark Maxes can be connected to when unpowered or completely disconnected from the robot or battery when connected over USB. The USB port is located next to the PWM/CAN connection on the power input side of the controller.

<p><br /> </p>

<div style={{ textAlign: 'center'}}><div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '225.00px', height: '109.40px'}}><Image autoLoad={"true"} img={require("/static/media/software/spark/image_1.png")} style={{ width: '225.00px', height: '125.56px', marginLeft: '0.00px', marginTop: '-16.16px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div></div>

<p><br /> </p>

With the Hardware Client open, plug in one of the Spark Maxes. It should appear over to the left side of the window.

<p><br /> </p>

<div style={{ textAlign: 'center'}}><div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '256.44px', height: '133.90px'}}><Image autoLoad={"true"} img={require("/static/media/software/spark/image_2.png")} style={{ width: '256.44px', height: '133.90px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div></div>

<p><br /> </p>

If you see a red triangle, the Spark Max firmware is out of date. Click into the controller and download and update the firmware in the &ldquo;Update&rdquo; tab.

<p><br /> </p>

<div style={{ textAlign: 'center'}}><div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '606.71px', height: '235.26px'}}><Image autoLoad={"true"} img={require("/static/media/software/spark/image_3.png")} style={{ width: '606.71px', height: '235.26px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div></div>

<p><br /> </p>

Click back to the &ldquo;Basic&rdquo; tab. The two most important settings here are the CAN ID &nbsp;and the Motor Type. The CAN ID is how each controller in the chain knows to respond to commands sent by the code and must be unique for each controller on the bus.

<p><br /> </p>

<div style={{ textAlign: 'center'}}><div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '556.27px', height: '533.50px'}}><Image autoLoad={"true"} img={require("/static/media/software/spark/image_4.png")} style={{ width: '556.27px', height: '533.50px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div></div>

<p><br /> </p>

:::note

The CAN IDs expected by the provided Everybot starter code are as follows:

1 - Left rear drive motor

2 - Left front drive motor

3 - Right rear drive motor

4 - Right front drive motor

5 - Feed motor

6 - Launch moto

7 - Climber motor

8 - Roller claw motor

:::

<p><br /> </p>

The motor type should be set to &ldquo;REV NEO Brushless&rdquo; if using a NEO motor or set to brushed if using any other type of motor (CIM, 775pro, etc). Leave the sensor type to none unless you have specifically added a sensor compatible with the Spark Max to your robot and plugged it into the current Spark Max (ff the motor type is set to NEO, the sensor type should automatically change to read the NEO&rsquo;s hall effect sensor). When you have set the CAN ID and motor type correctly, click &ldquo;Burn Flash&rdquo; at the bottom of the window. Do not worry about the &ldquo;Save Configuration&rdquo; button, this saves a copy of the current settings to the local computer, not to the motor controller itself.
