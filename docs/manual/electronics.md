---
sidebar_label: "Electrical Preview"
sidebar_position: 9
description: ""
---

import Image from '@theme/IdealImage';

# Electrical Diagrams

In an effort to get content out more quickly, we are releasing our preliminary electrical diagrams without full documentation. Expect this to be improved in the coming days. We have taken some images from WPILIB&rsquo;s wiring guides, for more information we highly recommend looking at their [basics](https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-1/basic-robot-wiring.html#introduction-to-frc-robot-wiring) and [KitBot](https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-1/intro-to-frc-robot-wiring.html#layout-the-core-control-system-components) wiring guides.

<p><br /> </p>

Please note that we use 221 inline Wagos for our Spark Max connections, to power (when required) and motors.

<p><br /> </p>

We used two separate bellypans made from wood, either thickness of wood will work. Dimensions for these can be found in the CAD and will be out soon.

<p><br /> </p>

<div style={{ textAlign: 'center'}}><div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '534.00px', height: '638.00px'}}><Image autoLoad={"true"} img={require("/static/media/electrical/image_0.png")} style={{ width: '534.00px', height: '638.00px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div></div>

<p><br /> </p>

<div style={{pageBreakAfter: 'always'}}></div>

<p><br /> </p>

Here is the power wiring diagram for the motor controllers. We ran out of room for 6, 5, 3 and 1 in the diagram, so we represented both wires with a single one. Assume they are wired like the upper motors in the diagram. Realistically, it does not matter what slot in the PDH the motor is plugged into, as long as it is done so correctly.

<p><br /> </p>

<div style={{ textAlign: 'center'}}><div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '624.00px', height: '350.67px'}}><Image autoLoad={"true"} img={require("/static/media/electrical/image_1.png")} style={{ width: '624.00px', height: '350.67px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div></div>

<div style={{pageBreakAfter: 'always'}}></div>

<p><br /> </p>

Here is how the CAN Bus is wired, the CAN chain starts in the roborio and terminates in the PDH.

&nbsp;

<div style={{ textAlign: 'center'}}><div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '622.50px', height: '409.94px'}}><Image autoLoad={"true"} img={require("/static/media/electrical/image_2.png")} style={{ width: '728.78px', height: '409.94px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div><div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{overflow: 'hidden', display: 'inline-block', margin: '-95.24px 95.24px', border: '0.00px solid #000000', transform: 'rotate(1.57rad) translateZ(0px)',  width: '196.02px', height: '386.50px'}}><Image autoLoad={"true"} img={require("/static/media/electrical/image_3.png")} style={{ width: '542.76px', height: '386.50px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div></div>

Please note that the above image is from the KitBot electrical, it just serves to demonstrate roughly how the connections will work. The leftmost SparkMax should be in the CAN chain if you would want it to work.

<p><br /> </p>


<div style={{pageBreakAfter: 'always'}}></div>

Here is the motor controller to motor diagram. Please note that the NEO motor will require 3 wires, (red, black and white) plus the encoder cable.

<p><br /> </p>

<div style={{ textAlign: 'center'}}><div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '610.50px', height: '515.11px'}}><Image autoLoad={"true"} img={require("/static/media/electrical/image_4.png")} style={{ width: '915.75px', height: '515.11px', marginLeft: '-136.48px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div></div>

<div style={{pageBreakAfter: 'always'}}></div>

<p><br /> </p>

Here are what the different motors do.

<p><br /> </p>

<div style={{ textAlign: 'center'}}><div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '609.06px', height: '413.50px'}}><Image autoLoad={"true"} img={require("/static/media/electrical/image_5.png")} style={{ width: '735.11px', height: '413.50px', marginLeft: '-48.30px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div></div>

<p><br /> </p>

<div style={{pageBreakAfter: 'always'}}></div>

Here is a roughly how to do your PDH to battery.

<p><br /> </p>

<div style={{ textAlign: 'center'}}><div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '608.50px', height: '589.08px'}}><Image autoLoad={"true"} img={require("/static/media/electrical/image_6.png")} style={{ width: '807.88px', height: '589.08px', marginLeft: '-77.68px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div></div>

<p><br /> </p>

<div style={{pageBreakAfter: 'always'}}></div>

Here is a connection from the PDH to the roborio, you will need a 10A fuse in the slot.

<p><br /> </p>

<div style={{ textAlign: 'center'}}><div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '624.00px', height: '338.67px'}}><Image autoLoad={"true"} img={require("/static/media/electrical/image_7.png")} style={{ width: '624.00px', height: '338.67px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div></div>

<div style={{pageBreakAfter: 'always'}}></div>

<p><br /> </p>

Here is how you wire the new radio. Again, it will require a fuse.

<p><br /> </p>


<div style={{ textAlign: 'center'}}><div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '624.00px', height: '504.00px'}}><Image autoLoad={"true"} img={require("/static/media/electrical/image_8.png")} style={{ width: '624.00px', height: '504.00px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div></div>

<div style={{pageBreakAfter: 'always'}}></div>

<p><br /> </p>


Finally here is a rough outline of how to wire the RSL.

<p><br /> </p>

<div style={{ textAlign: 'center'}}><div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '202.00px', height: '352.00px'}}><Image autoLoad={"true"} img={require("/static/media/electrical/image_9.png")} style={{ width: '202.00px', height: '352.00px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div><div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '270.50px', height: '360.11px'}}><Image autoLoad={"true"} img={require("/static/media/electrical/image_10.png")} style={{ width: '270.50px', height: '360.11px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div></div>