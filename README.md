React Native Expo(SDK 51) Application <b>Fitness App</b>
<br>
To run the project, you need to install dependencies by following commands
<br>
node version 17+ (mine 20) installation<br>
Install node Modules for expo SDK 51<br>
Install expo dependencies<br>
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar<br><br>
Install nativeWind with TailWindCSS<br>
npm install nativewind@^4.0.1 react-native-reanimated tailwindcss<br>
Make sure tailwind version is 3.3.2
<br><br>
Install Expo Fonts for adding custommized fonts<br>
npx expo install expo-font
<br><br>
<b>react-native-appwrite </b>is the official Appwrite SDK tailored for React Native applications<br>
<b>Polyfills </b>are essential when certain JavaScript features are not natively supported in a given environment<br>
npx expo install react-native-appwrite react-native-url-polyfill
<br><br>
<b>react-native-animatable </b>provides easy-to-use animations for React Native components.<br>
npm install react-native-animatable
<br>
<br>
Finally, to run the app:<br>
npx expo start -c


<br><br>
To get android APK for the app. Simply install EAS
<br>
<b>Run commands</b><br>
npm install --global eas-cli<br>
eas login<br>
eas build -p android --profile preview<br>
