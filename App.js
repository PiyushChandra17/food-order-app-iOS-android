import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react'
import { ThemeProvider } from "styled-components/native"

import * as firebase from "firebase";


import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { theme } from "./src/infrastructure/theme"

import { Navigation } from "./src/infrastructure/navigation";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context"



const firebaseConfig = {
  apiKey: "AIzaSyBoBej0qv6GYMJkvyFYxgO3P4EJfPwaJlc",
  authDomain: "zaayka-f7aa9.firebaseapp.com",
  projectId: "zaayka-f7aa9",
  storageBucket: "zaayka-f7aa9.appspot.com",
  messagingSenderId: "220856547914",
  appId: "1:220856547914:web:ace9d3ebb8366d5a0f84b3"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}



export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if(!oswaldLoaded || !latoLoaded) {
    return null
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>     
      <ExpoStatusBar style="auto" />
    </>
  );
}



