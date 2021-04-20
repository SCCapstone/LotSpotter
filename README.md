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
npm install
```

## Setup

There are no setup requirements that the developer must take care of for the first launch of the application on their local.

## Running

To run the app from the cloned repo, in terminal navigate to the /src/ folder, then execute

> ionic cordova run browser

# Deployment

To build a "release" version of our application, execute the following command with the /src/ folder of the project as your active directory:
> ionic cordova build --release android

This will place an unsigned .apk of the application at platforms/android/build/outputs/apk.

**If this .apk is emulated in Android Studio, Android Studio needs to be a version later than v4.X.X. In our testing, older versions were not compatible.**
 
More detailed instructions on generating a release version of an ionic applicaton can be found [here](https://ionicframework.com/docs/v1/guide/publishing.html).

To run this application on an emulator, execute the following command:
> ionic cordova emulate android

# Style Guide
Our group will be following [this](https://basarat.gitbook.io/typescript/styleguide)
formatting.

# Testing

Unit Tests are run with:  
```
npm test
```
Our Unit Tests are located in `/src/app/tests/`. We are using [Jasmine](https://jasmine.github.io/) for our testing framework; [Karma](http://karma-runner.github.io/6.0/index.html) is the runnner. 

_Note_: When npm test` was ran on an ubuntu machine, it didn't have enough child processes. This command fixed that issue:
 ```bash
 echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
 ```
 That command was found [here](https://stackoverflow.com/questions/53930305/nodemon-error-system-limit-for-number-of-file-watchers-reached).

Behavioral Tests are run with:
```
npm run e2e
```
These tests are located in `/e2e/src/app.e2e-spec.ts`. For this we are using the BDD framework [Jasmine](https://jasmine.github.io/) to execute the commands and using [ProtractorJS](https://www.protractortest.org/#/) to interact with the virtual application via browser. The current behavior test after running `npm run e2e` will automate user login, verify homepage, then logout. 

To simulate the entries/exits to parking lots, there's a Python script located in `/src/scripts/`. To run it, ensure the needed packages are installed with:
```bash
pip3 install firebase_admin
```
Then, execute with Python 3. Python 2 is not supported by `firebase_admin`.
```bash
python3 /src/scripts/mock_lot_data.py
```

***
# Authors

 * [Daniel Jones](https://github.com/Dojones98) | dojones@cec.sc.edu
 * [Luis Baez](https://github.com/AnadamaBread) | lbaez@email.sc.edu
 * [Abigail Delnoce](https://github.com/adelnoce) | adelnoce@email.sc.edu
 * [Cassidy Bradley](https://github.com/cassidybradley99) | Cmb11@email.sc.edu
 * [Austin Staton](https://github.com/aj-staton) | ajstaton@email.sc.edu
