# LotSpotter
A parking lot occupancy solution for the University of South Carolina, Columbia.

## Team
 * [Daniel Jones](https://github.com/Dojones98)
 * [Luis Baez](https://github.com/AnadamaBread)
 * [Abigail Delnoce](https://github.com/adelnoce)
 * [Cassidy Bradley](https://github.com/cassidybradley99)
 * [Austin Staton](https://github.com/aj-staton)
 
 ***
 
 # Vidal's template for us to fill out
 
 # LotSpotter

LotSpotter is a parking lot occupancy traker built to help students, faculty, and
staff make informed decisions on their morning commute to campus. This application 
is built using [Ionic](https://ionicframework.com/)/[Angular](https://angular.io/) with a [FireBase BaaS](https://firebase.google.com/) and [Cordova](https://cordova.apache.org/plugins/) plugins.


## External Requirements

List all the stuff the reader will need to install in order to get you app to 
run in their laptop. For example:

In order to build this project you first have to install:

* [NPM](https://www.npmjs.com/)
* [Node.js](https://nodejs.org/en/)
* [Ionic CLI](https://ionicframework.com/docs/cli)
* [Cordova](https://cordova.apache.org/plugins/)

To install all of the dependencies you will need for building and launching this application on Ubuntu, execute the following commands:

> sudo apt install nodejs

> npm install -g @ionic/cli

> git clone https://github.com/SCCapstone/LotSpotter.git

> cd LotSpotter

> ionic cordova plugin add cordova-plugin-nativegeocoder

> npm install @ionic-native/native-geocoder

> ionic cordova plugin add cordova-plugin-geolocation

> npm install @ionic-native/geolocation

## Setup

There are no setup requirements that the developer must take care of for the first launch of the application on their local.

## Running

To run the app from the cloned repo, in terminal navigate to the /src/ folder, then execute

> ionic serve

# Deployment

Webapps need a deployment section that explains how to get it deployed on the 
Internet. These should be detailed enough so anyone can re-deploy if needed
. Note that you **do not put passwords in git**. 

Mobile apps will also sometimes need some instructions on how to build a
"release" version, maybe how to sign it, and how to run that binary in an
emulator or in a physical phone.

# Testing

In 492 you will write automated tests. When you do you will need to add a 
section that explains how to run them.

The unit tests are in `/test/unit`.

The behavioral tests are in `/test/casper/`.

## Testing Technology

In some cases you need to install test runners, etc. Explain how.

## Running Tests

Explain how to run the automated tests.

# Authors

Your names and emails
