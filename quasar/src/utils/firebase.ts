// import { watchEffect, shallowRef } from 'vue';

// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';
// import 'firebase/compat/auth';

// import API_URLS from './API_URLS';

// // Initialize Firebase
// firebase.initializeApp(API_URLS.firebaseConfig);

// /**
//  * Used to get the firebase user object properties.
//  *
//  * Inspired from react-firebase-hooks, can be found [here](https://github.com/CSFrequency/react-firebase-hooks/blob/11aa6dc474743ff1db44dbb8342c73f463fa4566/auth/useAuthState.ts).
//  *
//  * Usage:
//  * ```ts
//  * const user = useFirebaseUser();
//  *
//  * if (!!user) {  // checks if user is logged in
//  *  ...
//  * }
//  * ```
//  */
// export function useFirebaseUser() {
//   const result = shallowRef<firebase.User | null>();
//   watchEffect((onInvalidate) => {
//     const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
//       result.value = user;
//     });
//     onInvalidate(unsubscribe);
//   });
//   return result;
// }

// /**
//  * Sign in user via Firebase Auth. Note: To access user properties, look at ```useFirebaseUser()``` instead.
//  *
//  * Usage:
//  * ```ts
//  * async function logOn(){
//  *    try {
//  *       await signIn();
//  *       ...
//  *    } catch(err) {
//  *      ...
//  *    }
//  * }
//  * ```
//  */
// export async function signIn() {
//   try {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     await firebase.auth().signInWithPopup(provider);
//     const user = useFirebaseUser();

//     // Creates user
//     if (!!user) {
//       await firebase
//         .firestore()
//         .collection('users')
//         .doc(user?.value?.uid)
//         .set({ likes: [] });
//       console.log('user created?!');
//     }
//   } catch (err) {
//     console.log(`[firebase.ts] ${(err as Error).message}`);
//   }
//   // register flow
// }

// /**
//  * Signs user out.
//  */
// export async function signOut() {
//   await firebase
//     .auth()
//     .signOut()
//     .catch((error: Error) => {
//       console.log(`[firebase.ts] ${error.message}`);
//     });
// }
