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
COUNT = 40 # The number of documents to generate.

# Read all of the lots from their collection at once. This will all be copied
# into memory here to reduce the need for any fetches.
data = list(db.collection(u'lots').get())
lots = dict()
for each in data:
    #lots.append(each.to_dict()['name'])
    name = each.to_dict()['name']
    currCap = each.to_dict()['currCap']
    lots[name] = currCap


# Write some randomized events to the "stats" collection to simulate
# the entries/exits of vehicles from a lot. 
for i in range(COUNT):
    # Generate random data
    action = random.randrange(0,2,1) # 0=entry; 1=exit
    lot = random.sample(lots.keys(), 1)[0]

    # Apply the action to the lot.
    if (action): # Exit (increase the remaining capacity)
        lots[lot]+=1
    else: # Enter (decrease the remaining capacity)
        lots[lot]-=1
    currCap = lots[lot]

    # src: https://code.luasoftware.com/tutorials/google-cloud-firestore/python-firestore-use-server-timestamp/
    ts = firebase_admin.firestore.SERVER_TIMESTAMP
    # Write the generated data to firestore
    db.collection(u'stats').add({
        'action': action, 
        'lot': lot,
        'time': ts,
        'currCap': currCap
    })

    if (TIME_DELAY):
        time.sleep(1)

# In the loop, I was never updating the values for current capacity found
# in the 'lots' collection. Iterate through these lots and apply the
# updates.
for lot in lots:
    # Query based on the name. There can only be one lot with it's given name.
    # I'm going to make the bold assumption that this will never return more
    # than one item.
    doc = db.collection(u'lots').where('name','==',lot).get()[0]
    db.collection(u'lots').document(doc.id).update({
        "currCap": lots[lot]
    })
    
