# LotSpotter

LotSpotter is a parking lot occupancy traker built to help students, faculty, and
staff make informed decisions on their morning commute to campus. This application 
is built using [Ionic](https://ionicframework.com/)/[Angular](https://angular.io/) with a [FireBase BaaS](https://firebase.google.com/) and [Cordova](https://cordova.apache.org/plugins/) plugins.

This application was developed for [CSCE 490](https://capstone.cse.sc.edu/) at the [University of South Carolina](https://sc.edu/).

For more detailed documentation on this project including a description, architecture, and design, check out our [Wiki](https://github.com/SCCapstone/LotSpotter/wiki).

Links to our important Wiki pages:

* [Description](https://github.com/SCCapstone/LotSpotter/wiki/Project-Description)
* [Design](https://github.com/SCCapstone/LotSpotter/wiki/Design)
* [Requirements](https://github.com/SCCapstone/LotSpotter/wiki/Requirements)
* [Architecture](https://github.com/SCCapstone/LotSpotter/wiki/Architecture)


## External Requirements

In order to build this project you first have to install:

* [NPM](https://www.npmjs.com/)
* [Node.js](https://nodejs.org/en/)
* [Ionic CLI](https://ionicframework.com/docs/cli)
* [Cordova](https://cordova.apache.org/plugins/)

To install all of the dependencies you will need for building and launching this application on Ubuntu, execute the following commands:
```bash
sudo apt install nodejs
npm install -g @ionic/cli
git clone https://github.com/SCCapstone/LotSpotter.git
cd LotSpotter/
ionic cordova plugin add cordova-plugin-nativegeocoder
npm install @ionic-native/native-geocoder
ionic cordova plugin add cordova-plugin-geolocation
npm install @ionic-native/geolocation
```
## Setup

There are no setup requirements that the developer must take care of for the first launch of the application on their local.

## Running

To run the app from the cloned repo, in terminal navigate to the /src/ folder, then execute

> ionic cordova run browser

# Deployment

To build a "release" version of our application, execute the following command with the /src/ folder of the project as your active directory:
> ionic cordova build --release android

This will place an unsigned .apk of the application at platforms/android/build/outputs/apk

More detailed instructions on generating a release version of an ionic applicaton can be found [here](https://ionicframework.com/docs/v1/guide/publishing.html).

To run this application on an emulator, execute the following command:
> ionic cordova emulate android

# Style Guide
Our group will be following [this](https://basarat.gitbook.io/typescript/styleguide)
formatting.

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

 * [Daniel Jones](https://github.com/Dojones98) | dojones@cec.sc.edu
 * [Luis Baez](https://github.com/AnadamaBread) | lbaez@email.sc.edu
 * [Abigail Delnoce](https://github.com/adelnoce) | adelnoce@email.sc.edu
 * [Cassidy Bradley](https://github.com/cassidybradley99) | Cmb11@email.sc.edu
 * [Austin Staton](https://github.com/aj-staton) | ajstaton@email.sc.edu
