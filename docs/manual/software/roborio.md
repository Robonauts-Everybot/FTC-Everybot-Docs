---
sidebar_label: 'Imaging RoboRio2.0'
sidebar_position: 5
description: ""
---

import Image from '@theme/IdealImage';

# Imaging RoboRIO 2.0

The official instructions for imaging the roboRIO 2.0 can be found [here](https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-3/roborio2-imaging.html). This section is intended as additional information.

<p><br /> </p>

The National Instruments roboRIO 2.0 included with the rookie Kit of Parts has to be &ldquo;imaged&rdquo; with a known set of files before it can be used to run your robot. You must have completed the TODO: FRC Game Tools installation&nbsp;and have your roboRIO connected to power from the Power Distribution Hub. For veteran teams with the original roboRIO, see the [WPILib documentation](https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-3/imaging-your-roborio.html)&nbsp;for instructions on imaging the original roboRIO.

<p><br /> </p>

To image the roboRIO 2.0, the included 4 GB microSD card has to be inserted into a SD card reader in a computer. The Lenovo laptop included in the rookie Kit of Parts includes a built-in SD card slot, but an adapter is required to fit a microSD card.
<br/>
<div>
    <input type="checkbox"/>
    <label> Take the microSD card and insert it into the computer you previously installed FRC Game Tools on.</label>
</div>
<div>
    <br/>
    <input type="checkbox"/>
    <label> Download and install [Balena Etcher](https://etcher.balena.io/).</label>
    <br/><br/>
    <input type="checkbox"/><label> After installation is complete, launch Balena Etcher and select &ldquo;Flash from File.&rdquo; <br/><br/> <div style={{ textAlign: 'center'}}><div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '469.59px', height: '297.01px'}}><Image autoLoad={"true"} img={require("/static/media/software/roborio/image_0.png")} style={{ width: '469.59px', height: '297.01px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div></div> </label>
    <br/>
    <input type="checkbox"/> <label> Locate the FRC_roboRIO2_2024_v2.1.img.zip file. If FRC Game Tools is correctly installed, it should be located in C:\Program Files (x86)\National Instruments\LabVIEW 2023\project\roboRIO Tool\FRC Images\SD Images <br/><br/> <div style={{ textAlign: 'center'}}><div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '624.00px', height: '93.33px'}}><Image autoLoad={"true"} img={require("/static/media/software/roborio/image_1.png")} style={{ width: '624.00px', height: '93.33px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div></div></label>
    <br/>
    <input type="checkbox"/>
    <label> Balena Etcher may have automatically selected the microSD card as the target drive. If it did not, click &ldquo;Select target&rdquo; and pick the microSD card from the list of drives.</label>
    <br/><br/>
    <input type="checkbox"/>
    <label> If you have a USB flash drive or other storage device plugged into the same computer, change the target to the microSD card. If the microSD card does not appear in the list of devices, click &ldquo;Show [x] hidden&rdquo; and see if it appears there, try removing and reinserting it, or try a different SD card reader.<br/><br/> <div style={{ textAlign: 'center'}}><div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '492.79px', height: '311.95px'}}><Image autoLoad={"true"} img={require("/static/media/software/roborio/image_2.png")} style={{ width: '492.79px', height: '311.95px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div></div></label>
    <br/><br/>
    <input type="checkbox"/>
    <label> Click &ldquo;Flash!&rdquo; to copy the roboRIO 2.0 image to the microSD card.</label>
    <br/><br/>
    <input type="checkbox"/>
    <label> Imaging a device will erase whatever data is currently on it and replace it with the roboRIO 2.0 image files, so make sure the target device is your microSD card or you may accidentally erase important data on a different drive.</label>
    <br/><br/>
    <input type="checkbox"/>
    <label> When Balena Etcher has finished writing the image to the microSD card, remove it from the computer and insert it into the microSD card slot on the roboRIO 2.0.</label>
    <br/><br/>
    <input type="checkbox"/>
    <label> After Balena Etcher is done, WIndows may tell you that a new device needs to be formatted before it can be used. Click cancel on this window. The microSD card is now formatted in a way that the roboRIO 2.0 can understand but Windows can not. <br/><br/><div style={{ textAlign: 'center'}}><div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '355.50px', height: '174.53px'}}><Image autoLoad={"true"} img={require("/static/media/software/roborio/image_3.png")} style={{ width: '355.50px', height: '174.53px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div></div></label>
    <br/><br/>
    <input type="checkbox"/>
    <label> Connect the roboRIO 2.0 to the computer using a USB cable plugged into the computer&rsquo;s USB port and the roboRIO 2.0&rsquo;s USB B port (the square-ish &ldquo;printer&rdquo; style port). Turn on power to the robot so the roboRIO 2.0 is on and booting up.</label>
    <br/><br/>
    <input type="checkbox"/>
    <label> Launch the roboRIO imaging tool included with FRC Game Tools. After a little while, the imaging tool should identify the roboRIO as a valid target. If it does not, try a different USB port or cable.</label>
    <br/><br/>
    <input type="checkbox"/>
    <label> Select the roboRIO in the target list. Fill out the &ldquo;Team Number&rdquo; box with your team&rsquo;s number and click &ldquo;Apply.&rdquo; You should now be able to connect to your roboRIO correctly either wired directly to a computer or wirelessly through a correctly configured radio to upload code and drive your robot.</label>
</div>