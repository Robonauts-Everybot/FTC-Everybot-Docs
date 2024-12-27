---
sidebar_label: 'Imaging the Radio'
sidebar_position: 6
description: ""
---

import Image from '@theme/IdealImage';
import Admonition from '@theme/Admonition';

# Imaging Radio

The wireless radio must be properly configured to communicate with the roboRIO and the driver station laptop. When you go to competitions, field staff will reprogram the radio again so that only the field hardware can communicate with it, and the robot will have to be connected directly with a USB or Ethernet cable to connect to the robot at competitions, and the radio will have to be reprogrammed after competition if you want to communicate with it wirelessly again.

<p><br /> </p>

The Rookie Kit of Parts includes a USB dongle with additional USB ports and an Ethernet port that can be used with the laptop also included in the rookie kit.

<p><br /> </p>

The official instructions for imaging the robot radio can be found [here](https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-3/radio-programming.html). This section is intended as additional information.

<p><br /> </p>

<div>
    <input type="checkbox"/>
    <label>Download the FRC Radio Configuration utility at the link above. Click through the install process.</label>
    <br/><br/>
    <input type="checkbox"/>
    <label> Connect the radio to power and the laptop. If your radio is wired using Power Over Ethernet in the left jack, turn on the robot so the radio receives power and plug an Ethernet cable between the right port on the radio and the laptop&rsquo;s Ethernet port (or the port on a USB dongle). Wait until the power LED has been on for 10 seconds before trying to configure the radio.</label>
    <br/><br/>
    <input type="checkbox"/>
    <label> Open the Radio Configuration Utility. Select the interface for the Ethernet port on your laptop (probably called &ldquo;Local Area Connection&rdquo; or &ldquo;Ethernet&rdquo;) <br/> <br/> <div style={{ textAlign: 'center'}}><div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '559.95px', height: '441.50px'}}><Image autoLoad={"true"} img={require("/static/media/software/radio/image_0.png")} style={{ width: '559.95px', height: '441.50px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div></div>
    <br/><br/><Admonition type="note">Other interfaces may mess with the utility&rsquo;s ability to image the radio. If there are connection problems, try disabling the wireless or other network interfaces in Device Manager and try again. Additional information about disabling other network adaptors can be found [here](https://docs.wpilib.org/en/stable/docs/networking/networking-introduction/roborio-network-troubleshooting.html#disabling-network-adapters)</Admonition></label>
    <br/><br/>
    <input type="checkbox"/>
    <label> The first time you set up a fresh radio, you will first need to flash it with a custom firmware. Make sure &ldquo;OpenMesh&rdquo; is selected in the &ldquo;Radio&rdquo; dropdown and select &ldquo;Load Firmware&rdquo;.<br/><br/> <div style={{ textAlign: 'center'}}><div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '562.49px', height: '443.50px'}}><Image autoLoad={"true"} img={require("/static/media/software/radio/image_1.png")} style={{ width: '562.49px', height: '443.50px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div></div> <br/><br/> After the radio has the custom firmware, you should not need to reload the firmware unless it becomes corrupted or a new version is released (the last time there was new firmware was in 2019).</label>
    <br/><br/>
    <input type="checkbox"/>
    <label> Now you will need to set the team number. Type the team number into the team number box and click &ldquo;configure&rdquo;. The rest of the default settings are probably what your team will want, but there is more information on the page linked above if you are interested or want to change any of the settings. </label>
</div>

When the radio is configured and turned on, it should broadcast a wireless network with the name set to your team number. Connecting to this network will allow your laptop to wirelessly connect to the robot to deploy code and drive the robot. Note that your laptop will be disconnected from the regular internet when connected to the robot, so you will need to disconnect from it and reconnect to your normal wifi network if you need to download or look something up in the middle of testing the robot. At competition, the driver station consoles on the field will have an ethernet cable that you plug into your laptop, and the field electronics will handle connecting to your robot wirelessly.

<p><br /> </p>

:::note
Remember - you will not be able to connect wirelessly to your robot in the pits or on the practice field at competition, so you will want to bring a USB B and/or Ethernet cable to tether to the robot to update code and test systems. A long Ethernet cable is also useful if you want to test autonomous or practice driving if your event has a practice field, as the robot will need to remain tethered while moving.
:::

<p><br /> </p>

If you run into problems connecting to the radio, check that other network devices have been turned off and that nothing else is plugged into the radio or laptop. You may find it necessary to remove the radio from the robot and plug it into the wall using a 12 volt center positive power supply through the barrel jack with the ethernet cable plugged into the left port closer to the barrel jack. Check the troubleshooting steps at the link above or try the configuration utility on a different computer if problems persist.