# This script will be used simulate entries/exits from parking lots in
# firestore. This is done by writing documents to a Google Firestore 
# collection, "stats". The data in this collection has the below format...
#   { action:... , lot:"", time: ... }
#
# Written by: Austin Staton
# Date: Feb. 5th, 2021

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import time
import random

# Initializaton
CRED = credentials.Certificate("python.json")
firebase_admin.initialize_app(CRED)
db = firestore.client()
#  Constants
TIME_DELAY = False # Set to True if you'd like traffic to be less congested.
COUNT = 100 # The number of documents to generate.

# Grab all the documents in the "lots" collection, write thier names
# to a list.  
data = list(db.collection(u'lots').get())
lots = []
for each in data:
    lots.append(each.to_dict()['name'])

# Write COUNT randomized events to the "stats" collection to simulate
# the entries/exits of vehicles from a lot. 
for i in range(COUNT):
    # Generate random data
    action = random.randrange(0,2,1) # 0=entry; 1=exit
    lot = random.choice(lots)
    currCap = db.collection(u'lots').get()
    # src: https://code.luasoftware.com/tutorials/google-cloud-firestore/python-firestore-use-server-timestamp/
    ts = firebase_admin.firestore.SERVER_TIMESTAMP
    # Write the generated data to firestore
    db.collection(u'stats').add({
        'action': action, 
        'lot': lot,
        'currCap': currCap,
        'time': ts
    })

    if (TIME_DELAY):
        time.sleep(1)
