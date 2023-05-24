# MooptOS

## What I built

An open Internet-of-Things (IoT) platform, consists of modular software and hardware, for decentralized urban farming. 

### Category Submission

1. Interesting IoT: Manage and monitor IoT devices, including tasks like managing configurations, updating firmware, and collecting and analyzing data.
2. DIY Deployments: An automation workflows for application deployment, i.e. setup environment, testing and running at localhost:3000 (nodejs, meteorjs, blazejs, PWA ready, ... etc), using Github Codespaces.
3. Phone Friendly: The deployment is automatically and immediatelly ready for Progressive Web App (PWA), that are also available as mobile applications that work on both iOS and Android devices.

### App Link

https://os.moopt.com

### Screenshots

![Step-by-step to Click & Launch a Real-time Water Temperature Monitoring system based on Arduino & MeteorJS at Github Codespaces](https://res.cloudinary.com/practicaldev/image/fetch/s--wFbUi95d--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ttrrlvv63331tpsnmy06.png)

### Description

1. Go to [moopt-codespace-action repo](https://github.com/Mooptcom/moopt-codespace-action)
2. Click to launch a Codespace
3. Wait for codespace setting up
4. Ready for fun!

### Link to Source Code

[moopt-codespace-action repo](https://github.com/Mooptcom/moopt-codespace-action)

### Permissive License

MooptOS is distributed under the MIT License — you can find the license [here](https://github.com/Mooptcom/moopt-codespace-action/blob/main/LICENSE).

## Background

Once upon a time, basil and fish came from faraway lands. It would spend many days in the back of a truck before we could find it on the shelf at our local grocery store. By the time could find it, all produce on the grocery shelf is missing lots of its nutrients, half or more of its nutrients.

Food is a basic need of every person. However, in today’s world, the space for agricultural production is decreasing due to narrower lands. Traditional farming has its drawbacks of being overly dependent on climate conditions, soil quality, chemical fertilizers, and pesticides – factors that are highly volatile and susceptible to constant fluctuations. Without adopting more sustainable practices, there could be almost a 10 percent drop in food production by 2070.

That story has all too common, so we thought a better story could be written. A story where basil and fish could come from a farm in our neighborhood, grown without pesticides and all year long, as well as receive the same day harvest delivered fresh to our doorstep.

The answer to consistent food production and food security is decentralized indoor aquaponics. Growing crops and fishes indoors can produce more food per acre that is not dependent on weather.

So, we need 1000x of 100 sq ft decentralized aquaponics farms, not a 100000 sq ft (2.3 acres) farm.

Manual labor and monitoring on environment quality affected the mortality of the herbs and fishes in a urban farm.

Fixed location sensors are installed to multiple urban farm for environment quality monitoring and optimal predictive maintenance scheduling.

The potential outcomes: A smart IoT open platform (both software & hardware) for decentralized urban farming, as a monitoring system to produce good quality fish and herbs.

As it is built within a very short time period from scratch, our PoC was built purely based on temperature sensor only. Our prototype can currently helping the users to deploy a real-time Water Temperature monitoring system based on open hardware like Arduino with DS18B20 sensor, as well as open software like MeteorJS and JohnnyFiveJS.

Temperature is an important water quality parameter. It can affect fish and shrimp metabolism, feeding rates and the degree of ammonia toxicity. Temperature also has a direct impact on biota respiration (O2 consumption) rates and influences the solubility of O2 (warmer water holds less O2 than cooler water).

Later we can add more environment tracking sensors, like electrical conductivity (EC), dissolved oxygen (DO), pH, salinity, carbon dioxide (CO2), ammonia (NH4), nitrite (NH2), hardness, turbidity and biochemical oxygen demand (BOD) of water.

Eventually we need a fully automated aquaponics system producing at full capacity without any human interaction, that requires a very small space and care in every house, decentralized. The system will be solar-powered, with sensors to monitor environmental status (in water or around the plants), optimize the decisions and automate the actions, like feeding, adding water, oxygen, ... etc. E-mail or SMS or native smartphone apps notifications if the environment goes out of its limit. Then, we bring these households with aquaponics into the country's food market. Broad public participation should help the food operators stabilize the state's food grid.

### How I built it

**MeteorJS (Backend)**

[MeteorJS](https://blaze-tutorial.meteor.com/) is an open-source full-stack JavaScript platform that is useful for developing modern web and mobile applications. Meteor helps the developer to develop in one language. Meteor has several features that help for creating a responsive and reactive web or mobile application using JavaScript or different packages available in the framework.

![What is Meteor & its Benefits](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rbxfzqlwcaubbjst6gxe.png)

For starts working with any technology, first of all, we need to create a suitable environment. Meteor currently supports OS X, Windows, and Linux. Only 64-bit is supported. The main prerequisite is Node.js. 

We will use [BlazeJS](https://github.com/meteor/blaze), a powerful library for creating user interfaces by writing reactive HTML templates. Compared to using a combination of traditional templates and jQuery, Blaze eliminates the need for all the "update logic" in your app that listens for data changes and manipulates the DOM. Blaze is a Meteor-only package for now.

Instead of setting MeteorJS environment manually (especially as the application will be getting more complex from time to time), for example adding Progressive Web App (PWA), we leverage [Meteor.js devcontainer](https://github.com/meteorengineer/meteor-dev-container) by Meteor Engineer. Now, you can simply go to [moopt-codespace-action repo](https://github.com/Mooptcom/moopt-codespace-action) and create a codespace based on this repo in seconds!

Used Github Desktop to add existing local repository.

![Github Desktop](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/m0y3sb1xbg4f4jy41r6k.png)

**Progressive Web App, PWA (Mobile)** 

A progressive web application is a type of application software delivered through the web, built using common web technologies including HTML, CSS, JavaScript, and WebAssembly. It is intended to work on any platform with a standards-compliant browser, including desktop and mobile devices.

While Meteor does not bring all PWA features out-of-the-box, our dev container had included service worker and manifest file that make this app a PWA. 

Before

![Before PWA](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/830vgtwkmc0maxroiwdp.png)

After

![After PWA](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/egiijxnx03l5k49am8js.png)

**Arduino Uno & Related Kit (Hardware)**

![Arduino with DFRobot IO Expansion Shield and Sensors](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/53rrl4kbhwqwcqafl098.jpeg)

[Arduino Uno](https://www.dfrobot.com/product-838.html?tracking=fLzRmYY6IsvIGLbjiAL9RF68v7fM3dlzM8uLa30l5DxS4weK8mO3QsVjmvTQOox6): Also known as King of IoT devices, the Arduino is a credit card sized microcontroller board that with almost limitless potential.  You can connect it to a wide range of sensors (i.e. sound and temperature) and actuators (i.e. leds and motors).  The Arduino Uno is relatively cheap, simple to use, proven and has a thriving community with open source documentation.

[DFRobot I/O Expansion Shield](https://www.dfrobot.com/product-1009.html?tracking=fLzRmYY6IsvIGLbjiAL9RF68v7fM3dlzM8uLa30l5DxS4weK8mO3QsVjmvTQOox6): The DFRobot Expansion shield introduced to the market the famous color code for sensors and actuators' input and output. The 3 pin format for Signal, Voltage, and Ground is extremely useful, especially if used altogether with our increasingly large range of modules, sensors, and devices that just fit. 

[DS18B20 Temperature Sensor (Waterproof)](https://www.dfrobot.com/product-1354.html?tracking=fLzRmYY6IsvIGLbjiAL9RF68v7fM3dlzM8uLa30l5DxS4weK8mO3QsVjmvTQOox6): This waterproof temperature sensor kit use DS18B20 probe AS. It contains a probe with a resistor module. So it is easy to connect on the Arduino board.

![DS18B20 Temperature Sensor](https://i.imgur.com/9ml8Co1.jpeg) 

Arduino IDE 

![Testing with Arduino IDE](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8qroivvope7smapcyfrn.png)

**JohnyFive (IoT)**

Johnny-Five is an Open Source, Firmata Protocol based, IoT and Robotics programming framework, developed by the Nodebots Community. Johnny-Five programs can be written for Arduino (all models), Electric Imp, Beagle Bone, Intel Galileo & Edison, Linino One, Pinoccio, pcDuino3, Raspberry Pi, Particle/Spark Core & Photon, Tessel 2, TI Launchpad and more!
 
![JohnyFive](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5gxdpvbqdhdnr904a7p7.png)

**MongoDB (Database)**

MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. 

![mongo method](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8ivujopq5qcy0dcksdkh.png)

**Webix Javascript UI Library (Frontend)**

Webix is a JavaScript/HTML5/CSS3 UI toolkit for developing complex and dynamic cross-platform web applications.

![Webix UI](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dbdypb0s5q60lw0v3aea.png)

### Additional Resources/Info

We help smaller Critical Industries to build a custom industrial automation system 200x faster, with 1000+ pre-built templates based on our 10 years experience in supply chain management.

* [LinkedIn - Kai Chew](https://www.linkedin.com/in/kafechew/)
* [Descriptive, Predictive & Prescriptive Analytics: Port Operations Case Study](https://www.linkedin.com/pulse/descriptive-predictive-prescriptive-analytics-port-operations-case-/)
* [Get your hardware here with RM 10 coupon](https://my.cytron.io/referral?referral_id=81802146507541) 
* [MooptOS: Open IoT Platform for Decentralized Urban Farming](https://dev.to/kafechew/mooptos-open-iot-platform-for-decentralized-urban-farming-533m)

