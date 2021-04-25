import { BackendService } from '../services/backend.service';
import firebase from 'firebase';


describe('BackendServiceTest', () => {
  let backService: BackendService;

  // Expand this array for a more exhaustive approach to the test.
  let random:string[] = ["AD3", "S8", "AD1"]; 
  // I have to re-init firebase here, since the full app isn't built yet.
  firebase.initializeApp({
    apiKey: "AIzaSyAQN02izLyzeBTCBsBIADHoWSMu8nOfLWI",
    authDomain: "lotspotter-ba109.firebaseapp.com",
    databaseURL: "https://lotspotter-ba109.firebaseio.com",
    projectId: "lotspotter-ba109",
    storageBucket: "lotspotter-ba109.appspot.com",
    messagingSenderId: "142655337490",
    appId: "1:142655337490:web:986c04ebfa6dd8cbef14cb",
    measurementId: "G-SBTVL9CDG0"
  });

  beforeEach(() => {
    backService = new BackendService();
  });

  /*
  This test runs the Backend Services' getLotData() function to ensure a resolved
  promise is returned, indicating a successful request.
  */
  it("should be a resolved promise", async () => {  
    // Random index in the array.
    let randex: number = Math.floor(Math.random() * random.length);

    await expectAsync(backService.getLotData(random[randex])).toBeResolved();
  });

});
