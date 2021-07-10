import firebase from '@react-native-firebase/app';

const firebaseProjectName = 'smart-home-app-70e99-default-rtdb';

const config = {
  apiKey: '1qO2KqeReYjPjcFT8PjENZQVtXxKJNHJNGXMDIhS',
  authDomain: `${firebaseProjectName}.firebaseapp.com`,
  databaseURL: `https://${firebaseProjectName}.firebaseio.com`,
  projectId: `${firebaseProjectName}`,
};

firebase.initializeApp(config);
export default firebase;
