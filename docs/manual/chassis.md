---
sidebar_label: "Custom Everybot Chassis"
sidebar_position: 2
description: ""
---

import Image from '@theme/IdealImage';

# Chassis Overview

Similar to last season, we have our custom clamshell design. This design has been updated to allow for easier expansion and modifications.

<p><br /> </p>

<div style={{ textAlign: 'center'}}><div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '624.00px', height: '346.67px'}}><Image autoLoad={"true"} img={require("/static/media/chassis/image_0.png")} style={{ width: '624.00px', height: '346.67px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div></div>

<p><br /> </p>

Additionally, this year in an effort to expand our accessibility the Everybot has full support for the following vendor chassis:

<ul><li><span style={{ textDecoration: "underline"}}><a class="c7" href="https://www.google.com/url?q=https://www.gobilda.com/strafer-chassis-kit-104mm-gripforce-mecanum-wheels/&amp;sa=D&amp;source=editors&amp;ust=1760292383974836&amp;usg=AOvVaw2xu60dJG-foeJxry3OLNQy">goBILDA Strafer Chassis</a></span></li><li><span style={{ textDecoration: "underline"}}><a class="c7" href="https://www.google.com/url?q=https://www.revrobotics.com/rev-45-2470/?searchid%3D4547947%26search_query%3Dftc%2Bdrive&amp;sa=D&amp;source=editors&amp;ust=1760292383975000&amp;usg=AOvVaw2Sku2KnoHi9KXAUzL5U2uy">REV FTC Mecanum Drivetrain Kit</a></span></li><li><span style={{ textDecoration: "underline"}}><a class="c7" href="https://www.google.com/url?q=https://www.studica.com/studica-robotics-brand/ftc-drive-base-kit-v2&amp;sa=D&amp;source=editors&amp;ust=1760292383975141&amp;usg=AOvVaw2VXLbilXnjzhRZ44X4TULs">Studica Robotics FTC Drive Base Kit</a></span></li></ul>

We also offer partial support for the AM chassis, allowing for everything except the endgame:

<ul><li><span style={{ textDecoration: "underline"}}><a class="c7" href="https://www.google.com/url?q=https://www.andymark.com/products/mecanam-ftc-chassis?Motor%2520Option%3DNeveRest%2520Hex%252014%2520to%25201%26quantity%3D1%26Wheel%2520Type%3DHD%2520Mecanum&amp;sa=D&amp;source=editors&amp;ust=1760292383975412&amp;usg=AOvVaw3psCdfrQ-LwW3q0BJn18dy">AndyMark MecanAM FTC</a></span></li></ul>

<p><br /> </p>

This chassis guide is specifically dedicated to the Everybot custom 3D printed chassis, for construction of other chassis please follow the manufacturer&rsquo;s instructions.

<p><br /> </p>

<div style={{pageBreakAfter: 'always'}}></div>

<p><br /> </p>

# Custom Everybot Chassis Architecture

The Custom Everybot Chassis uses a 3D printed clamshell design for the drivebase. The clamshell parts are meant to clamp around the extrusion, eliminating the need to bolt directly to or through your desired extrusion. The chassis is designed to accommodate common drivetrain motor/gearbox combos. The drivebase also allows for an assortment of different wheel sizes, at the end of the Chassis Section, there is a table of motors, output shafts, and required hardware for different wheels.

<p><br /> </p>

The basic assembly steps are:

<p><br /> </p>

<ol><li>Obtain/create of the following 3D printed parts:</li> <ol><li>Qty(1) x <span style={{ backgroundColor: "#d9d2e9"}}>01_Chassis_Back_Right_Bottom</span></li><li>Qty(1) x <span style={{ backgroundColor: "#d9d2e9"}}>01_Chassis_Front_Right_Bottom</span></li><li>Qty(1) x <span style={{ backgroundColor: "#d9d2e9"}}>01_Chassis_Front_Right_Top</span></li><li>Qty(1) x <span style={{ backgroundColor: "#d9d2e9"}}>01_Chassis_Back_Right_Top</span></li><li>Qty(1) x <span style={{ backgroundColor: "#d9d2e9"}}>01_Chassis_Back_Left_Bottom</span></li><li>Qty(1) x <span style={{ backgroundColor: "#d9d2e9"}}>01_Chassis_Front_Left_Bottom</span></li><li>Qty(1) x <span style={{ backgroundColor: "#d9d2e9"}}>01_Chassis_Front_Left_Top</span></li><li>Qty(1) x <span style={{ backgroundColor: "#d9d2e9"}}>01_Chassis_Back_Left_Top</span></li></ol><li>Cut extrusion to length for the chassis frame</li><li>Secure motors/gearboxes to clamshells with bolts and zipties</li><li>Secure clamshells to the frame</li><li>Equip gearbox output shaft with desired wheel and secure wheel</li></ol>

<p><br /> </p>

<div style={{ textAlign: 'center'}}><div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '589.34px', height: '350.80px'}}><Image autoLoad={"true"} img={require("/static/media/chassis/image_1.png")} style={{ width: '589.34px', height: '350.80px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div></div>

<div style={{pageBreakAfter: 'always'}}></div>

<p><br /> </p>

If at any point you are unsure of what a direction or diagram is telling you to do, please ask for clarification in the Everybot <span style={{ textDecoration: "underline"}}><a class="c7" href="https://www.google.com/url?q=https://discord.gg/XuWfwRJcfA&amp;sa=D&amp;source=editors&amp;ust=1760292383977477&amp;usg=AOvVaw1QA3Ss3lu086EmPZbQQVZa">Discord</a></span>! This is the fastest way to get an answer from the Everybot team, and questions we see there will help us to revise this manual to make steps more clear for other Everybot builds.

<p><br /> </p>

# Chassis Parts

The Everybot supports 4 different bolt/nut standards: 6-32, 8-32, M3 and M4. Please reference the Tools Needed section for specific sizes on the required wrenches and allen keys.

<p><br /> </p>

Required tools:

<ul><li>Allen Keys</li><li>Wrenches</li><li>Hacksaw, bandsaw or chop saw</li></ul>

<p><br /> </p>

Required parts:

<ul><li>3D printed parts:</li><ul><li>Qty(1) x <span style={{ backgroundColor: "#d9d2e9"}}>01_Chassis_Back_Right_Bottom</span></li><li>Qty(1) x <span style={{ backgroundColor: "#d9d2e9"}}>01_Chassis_Front_Right_Bottom</span></li><li>Qty(1) x <span style={{ backgroundColor: "#d9d2e9"}}>01_Chassis_Front_Right_Top</span></li><li>Qty(1) x <span style={{ backgroundColor: "#d9d2e9"}}>01_Chassis_Back_Right_Top</span></li><li>Qty(1) x <span style={{ backgroundColor: "#d9d2e9"}}>01_Chassis_Back_Left_Bottom</span></li><li>Qty(1) x <span style={{ backgroundColor: "#d9d2e9"}}>01_Chassis_Front_Left_Bottom</span></li><li>Qty(1) x <span style={{ backgroundColor: "#d9d2e9"}}>01_Chassis_Front_Left_Top</span></li><li>Qty(1) x <span style={{ backgroundColor: "#d9d2e9"}}>01_Chassis_Back_Left_Top</span></li></ul><li>Extrusion to make the following:</li><ul><li>Qty(2) x <span style={{ backgroundColor: "#c9daf8"}}>01_Chassis_Frame_Side</span>&nbsp;(298mm [11.75&rdquo;] long)</li><li>Qty(2) x <span style={{ backgroundColor: "#c9daf8"}}>01_Chassis_Frame_Front</span>&nbsp;(191mm [7.5&rdquo;] long)</li></ul><li>Fasteners:</li><ul><li>For those using M3s or M4s:</li><ul><li>Qty(12) Socket Head 50mm</li><li>Qty(10) Socket Head 45mm</li><li>Qty(28) Socket Head 35mm</li><li>Qty(8) Socket Head ~10mm for securing gearbox to clamshell - check your motor&rsquo;s mount required thread size</li></ul></ul><br /><ul><li>For those using 6-32s or 8-32s:</li><ul><li>Qty(12) Socket Head 2&rdquo;</li><li>Qty(10) Socket Head 1.75&rdquo;</li><li>Qty(28) Socket Head 1.375&rdquo;</li><li>Qty(8) Socket Head ~0.375&rdquo; for securing gearbox to clamshell - check your motor&rsquo;s mount required thread size</li></ul></ul></ul>

<ul><li>Qty(8) X Zipties</li></ul>

<p><br /> </p>

# Chassis Machining

<p><br /> </p>

The extrusion needs to be cut to length to create the chassis frame. We recommend that you begin printing parts before machining parts.

<p><br /> </p>

<div style={{ textAlign: 'center'}}><div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '624.00px', height: '581.33px'}}><Image autoLoad={"true"} img={require("/static/media/chassis/image_2.png")} style={{ width: '624.00px', height: '581.33px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div></div>

<p><br /> </p>

The 2 extrusion pieces of extrusion will be cut to a length of 191mm or 7.5&rdquo; these will be the <span style={{ backgroundColor: "#c9daf8"}}>01_Chassis_Frame_Front</span>. 

<p><br /> </p>

2 pieces will need to be cut 298mm or 11.75&rdquo;, these are the <span style={{ backgroundColor: "#c9daf8"}}>01_Chassis_Frame_Side</span>. 

By default the 3D printed parts expect the extrusion to be between &#8541;&rdquo;x&#8541;&rdquo; or 15mm x 15mm but we do support 0.5&rdquo; x 0.5&rdquo; and 8mm x 8mm &nbsp;extrusion with 3D printed adapters.

<p><br /> </p>

For additional help and information on measurement and marking check out the <span style={{ textDecoration: "underline"}}><a class="c7" href="https://www.google.com/url?q=https://robonauts-everybot.github.io/Everybot-Docs/fundamentals/tools-and-machinery/marking-parts&amp;sa=D&amp;source=editors&amp;ust=1760292383980655&amp;usg=AOvVaw3vEO24cBL3QoOvYzcAC4Ka">Everybot Evergreens resources here</a></span>!

<div style={{pageBreakAfter: 'always'}}></div>

# Chassis Assembly

<p><br /> </p>

Start by grabbing 8 zip ties, the four <span style={{ backgroundColor: "#d9d2e9"}}>01_Chassis_Front/Back_Left/Right_Bottoms</span>. Thread the zip ties through the holes on the bottom, without tightening them. The zip ties are fed through the marked rectangles in the image below and will help secure the motors later on.

<p><br /> </p>

<div style={{ textAlign: 'center'}}><div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '624.00px', height: '401.33px'}}><Image autoLoad={"true"} img={require("/static/media/chassis/image_3.png")} style={{ width: '624.00px', height: '401.33px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div></div>

<div style={{pageBreakAfter: 'always'}}></div>

<p><br /> </p>

After inserting the Zipties, gather <span style={{ backgroundColor: "#d9d2e9"}}>01_Chassis_Back_Right_Bottom</span>, <span style={{ backgroundColor: "#d9d2e9"}}>01_Chassis_Back_Right_Top, </span><span style={{ backgroundColor: "#c9daf8"}}>01_Chassis_Frame_Side,</span>&nbsp;&amp; both <span style={{ backgroundColor: "#c9daf8"}}>01_Chassis_Frame_Fronts</span>.

<p><br /> </p>

Place the extrusion into the clamshell portions, adding the 3D printed adapters if necessary, and butt the extrusion as far to the end as possible.

<p><br /> </p>


<div style={{ textAlign: 'center'}}><div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '293.50px', height: '309.66px'}}><Image autoLoad={"true"} img={require("/static/media/chassis/image_4.png")} style={{ width: '293.50px', height: '309.66px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div></div>

<p><br /> </p>

Align the top piece and clamp the clamshell down on the extrusion by adding the 35mm (1.375&rdquo;) bolts and nuts. The bolts will have their heads on the bottom with nuts on the top. When clamping down ensure that the frame does not shift. It is best practice to leave all the bolts loosely tightened then finalizing the tightening in a star like pattern, see the final diagram for a loose idea of tightening order. Note that not all bolt holes need to be used.

<p><br /> </p>

<div style={{ textAlign: 'center'}}><div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '249.95px', height: '248.42px'}}><Image autoLoad={"true"} img={require("/static/media/chassis/image_5.png")} style={{ width: '249.95px', height: '248.42px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div><div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '278.23px', height: '270.20px'}}><Image autoLoad={"true"} img={require("/static/media/chassis/image_6.png")} style={{ width: '278.23px', height: '270.20px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div>&nbsp;</div>

<p><br /> </p>

Next add the <span style={{ backgroundColor: "#d9d2e9"}}>01_Chassis_Back_Left_Bottom</span>&nbsp;and <span style={{ backgroundColor: "#d9d2e9"}}>01_Chassis_Front_Left_Bottom</span>&nbsp;on the other side of the robot. Take <span style={{ backgroundColor: "#c9daf8"}}>01_Chassis_Frame_Side</span>&nbsp;and butt it up against the 3D printed part as was done previously. Then butt the two frame pieces from the previous clamshell against the extrusion. Add the 35mm (1.375&rdquo;) bolts, again tightening in a vaguely star pattern, making sure that the extrusion does not shift.

<p><br /> </p>

<div style={{ textAlign: 'center'}}><div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '509.11px', height: '278.80px'}}><Image autoLoad={"true"} img={require("/static/media/chassis/image_7.png")} style={{ width: '509.11px', height: '278.80px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div></div>

<p><br /> </p>

Next up are the front clamshells, which will go together the same with 3 key differences:

<ul><li>There will not be a horizontal extrusion</li><li>The innermost bolt holes surrounding the extrusion will be left empty</li><li>The front should be a certain width and will be loose until Catapult/Intake assembly</li></ul>

<p><br /> </p>

<div style={{ textAlign: 'center'}}><div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '500.00px', height: '308.35px'}}><Image autoLoad={"true"} img={require("/static/media/chassis/image_8.png")} style={{ width: '500.00px', height: '308.35px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div></div>

<p><br /> </p>

Now it is important to check the shape of the chassis. Because there is no front horizontal extrusion, the chassis can very easily bow inwards. Check, and readjust if necessary, that the outside edges of the front of the chassis measure to 14&rdquo; (~356mm) before final tightening of all 35mm (1.375&rdquo;) bolts. If the gap between the chassis pods are not large enough, the robot will struggle to intake Artifacts.

<p><br /> </p>

<div style={{ textAlign: 'center'}}>Checking the front width:</div>

<div style={{ textAlign: 'center'}}><div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '624.00px', height: '252.00px'}}><Image autoLoad={"true"} img={require("/static/media/chassis/image_9.png")} style={{ width: '624.00px', height: '252.00px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div></div>

<p><br /> <br /> </p>

<div style={{ textAlign: 'center'}}>When finished your chassis should look like this: </div>

<div style={{ textAlign: 'center'}}><div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '624.00px', height: '356.00px'}}><Image autoLoad={"true"} img={require("/static/media/chassis/image_10.png")} style={{ width: '624.00px', height: '356.00px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div></div>

<div style={{ textAlign: 'center'}}><div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '311.44px', height: '342.80px'}}><Image autoLoad={"true"} img={require("/static/media/chassis/image_11.png")} style={{ width: '311.44px', height: '342.80px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div>

<div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '324.08px', height: '358.80px'}}><Image autoLoad={"true"} img={require("/static/media/chassis/image_12.png")} style={{ width: '324.08px', height: '358.80px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div></div>

<div style={{pageBreakAfter: 'always'}}></div>

<h2 style={{ textAlign: 'center'}}><span style={{ fontWeight: "700", fontSize: "14pt", textDecoration: "underline"}}>Attaching the Chassis Motor/Gearboxes</span></h2>

<p><br /> </p>

The Everybot chassis explicitly supports the following motor/gearboxes, which require the following bolts at our recommended lengths and add ratios:

<p><br /> </p>

<ul><li>HD Hex Motor 20:1 Planetary Gearbox -&gt; Qty(2) x M3 at 10mm</li><li>Yellow Jacket Planetary Gear Motors 19.2:1 -&gt; Qty(2) x &nbsp;M4 at 10mm</li><li>NeveRest Orbital 20 Gearmotor -&gt; Qty(2) x M3 at 10mm</li></ul>

<p><br /> </p>

Note that socket heads may make wheel mounting harder depending on the setup. Button head bolts may fix this issue.

<p><br /> </p>

The HD Hex Motor and NeveRest Orbital 20 will be mounted with two exposed holes in the image below with the bolts listed above. The bolts will be 10mm long M3s for the HD Hex and the NeveRest.

<div style={{ textAlign: 'center'}}><div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '270.41px', height: '255.87px'}}><Image autoLoad={"true"} img={require("/static/media/chassis/image_13.png")} style={{ width: '270.41px', height: '255.87px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div>&nbsp;</div>

<p style={{ textAlign: 'center'}}>The Yellow Jacket Planetary requires a slightly different mount, using Two M4 bolts at 10mm. </p>

<div style={{ textAlign: 'center'}}><div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '294.00px', height: '239.82px'}}><Image autoLoad={"true"} img={require("/static/media/chassis/image_14.png")} style={{ width: '294.00px', height: '253.00px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div></div>

<p><br /> <br /> </p>

<div style={{ textAlign: 'center'}}>Now you can finally tighten the zip ties around the motor.</div>

<p><br /> </p>

<div style={{ textAlign: 'center'}}><div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '624.00px', height: '401.33px'}}><Image autoLoad={"true"} img={require("/static/media/chassis/image_15.png")} style={{ width: '624.00px', height: '401.33px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div></div>

<div style={{pageBreakAfter: 'always'}}></div>

<h2 style={{ textAlign: 'center'}}><span style={{ fontWeight: "700", fontSize: "14pt", textDecoration: "underline"}}>Adding Wheels</span></h2>

When adding your mecanum wheels you must keep in mind the skew of the wheels. You have wheels with left skew and wheels with a right skew.

<div style={{ textAlign: 'center'}}><div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '238.48px', height: '251.45px'}}><Image autoLoad={"true"} img={require("/static/media/chassis/image_16.png")} style={{ width: '238.48px', height: '251.45px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div><div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '206.50px', height: '251.00px'}}><Image autoLoad={"true"} img={require("/static/media/chassis/image_17.png")} style={{ width: '226.00px', height: '251.00px', marginLeft: '-19.50px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div></div>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Left Skew&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; Right Skew

<p><br /> </p>

Please use the following skews for your mecanums, front left -&gt; left, front right -&gt; right, rear left -&gt; right, rear right -&gt; left.

<p><br /> </p>

<div style={{ textAlign: 'center'}}><div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '418.00px', height: '389.21px'}}><Image autoLoad={"true"} img={require("/static/media/chassis/image_18.png")} style={{ width: '418.00px', height: '389.21px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></Image></span></div></div>

<div style={{pageBreakAfter: 'always'}}></div>

<p><br /> </p>

Below is a matrix that maps a possible setup for a motor wheel combo. We have only tests cells where the vendors for wheel/motor match but we believe that a solution is possible if marked yes. We recommend CADing out different configs and not blindly following this chart.

<p><br /> <br /> </p>

<table><tr><td></td><td><span style={{ fontSize: "10pt"}}>HD Hex Motor 20:1 Planetary Gearbox</span></td><td><span style={{ fontSize: "10pt"}}>Yellow Jacket Planetary Gear Motors</span></td><td><span style={{ fontSize: "10pt"}}>NeveRest Orbital 20 Gearmotor</span></td></tr><tr><td><span style={{ fontSize: "10pt"}}>75mm Mecanum Wheel Set</span></td><td>Yes, comes with the hubs</td><td>Yes, with a <span style={{ textDecoration: "underline"}}><a class="c7" href="https://www.google.com/url?q=https://www.gobilda.com/1311-series-thru-hole-sonic-hub-8mm-rex-bore/&amp;sa=D&amp;source=editors&amp;ust=1760292383986615&amp;usg=AOvVaw1Ajzkyt-Uaf6mKIJp1W64-">thru-sonic hub</a></span>, let the boss face away from the wheel</td><td>Yes with a <span style={{ textDecoration: "underline"}}><a class="c7" href="https://www.google.com/url?q=https://www.andymark.com/products/heavy-duty-hd-high-strength-threaded-nubs?via%3DZ2lkOi8vYW5keW1hcmsvV29ya2FyZWE6OkNhdGFsb2c6OkNhdGVnb3J5LzVhZjhhYjY0YmM2ZjZkNWUzNmYyMzM1ZA%26Bore%3D6%2520mm%2520D%26quantity%3D1&amp;sa=D&amp;source=editors&amp;ust=1760292383986942&amp;usg=AOvVaw2FSZ-zsd80bGMz9LQfQo7M">6mm D nub</a></span></td></tr><tr><td><span style={{ fontSize: "10pt"}}>104 mm GripForce Mecanum Wheel Set</span></td><td>Yes, with a <span style={{ textDecoration: "underline"}}><a class="c7" href="https://www.google.com/url?q=https://www.gobilda.com/1310-series-hyper-hub-5mm-hex-bore/&amp;sa=D&amp;source=editors&amp;ust=1760292383987336&amp;usg=AOvVaw3o292auoq1cFOTspKPSQDh">hyper hub</a></span></td><td>Yes, with a <span style={{ textDecoration: "underline"}}><a class="c7" href="https://www.google.com/url?q=https://www.gobilda.com/1310-series-hyper-hub-8mm-rex-bore/&amp;sa=D&amp;source=editors&amp;ust=1760292383987558&amp;usg=AOvVaw3ViaEwHHAfFtwPKuHwjeRu">Hyper Hub</a></span></td><td>Yes, with a <span style={{ textDecoration: "underline"}}><a class="c7" href="https://www.google.com/url?q=https://www.gobilda.com/1310-series-hyper-hub-6mm-d-bore/&amp;sa=D&amp;source=editors&amp;ust=1760292383987727&amp;usg=AOvVaw1mQ213_CyG_45KSBONtsGc">hyper hub</a></span></td></tr><tr><td><span style={{ fontSize: "10pt"}}>BB Mecanum Wheels</span></td><td>Yes, use <span style={{ textDecoration: "underline"}}><a class="c7" href="https://www.google.com/url?q=https://www.revrobotics.com/rev-41-1719/&amp;sa=D&amp;source=editors&amp;ust=1760292383988056&amp;usg=AOvVaw1Iljn_rCITiRY3xtTcG0Y_">locking motion hub</a></span>&nbsp;with nub config</td><td>Yes, with a <span style={{ textDecoration: "underline"}}><a class="c7" href="https://www.google.com/url?q=https://www.gobilda.com/1311-series-thru-hole-sonic-hub-8mm-rex-bore/&amp;sa=D&amp;source=editors&amp;ust=1760292383988252&amp;usg=AOvVaw0Q2bFFeVA2HLdTij57zTCQ">thru-sonic hub</a></span>, use the nub config and face the boss away</td><td>Yes with a <span style={{ textDecoration: "underline"}}><a class="c7" href="https://www.google.com/url?q=https://www.andymark.com/products/heavy-duty-hd-high-strength-threaded-nubs?via%3DZ2lkOi8vYW5keW1hcmsvV29ya2FyZWE6OkNhdGFsb2c6OkNhdGVnb3J5LzVhZjhhYjY0YmM2ZjZkNWUzNmYyMzM1ZA%26Bore%3D6%2520mm%2520D%26quantity%3D1&amp;sa=D&amp;source=editors&amp;ust=1760292383988606&amp;usg=AOvVaw1PpaZVnuCXuTQJArh9Wqov">6mm D nub</a></span>&nbsp;on the output and with the wheel&rsquo;s nub config</td></tr><tr><td><span style={{ fontSize: "10pt"}}>HD Mecanum Wheels</span></td><td>Too wide</td><td>Too wide</td><td>Too Wide</td></tr></table>

