// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAyIdgL5mQTJY9pW1P14OmLVzw3chw41tU",
    authDomain: "hanbit-angular-first.firebaseapp.com",
    databaseURL: "https://hanbit-angular-first.firebaseio.com",
    projectId: "hanbit-angular-first",
    storageBucket: "hanbit-angular-first.appspot.com",
    messagingSenderId: "721541388016"
  }
};
