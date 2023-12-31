# Development
Shortcut for Auto Indent Selected Lines: Shift + Alt + F 

* Figma project [here](https://www.figma.com/file/61CRNXlUmooMttGVa0GvML/React-fullstack---Voll.med?node-id=444-5625&t=wLBbxrl8vGdpTDf4-0)
* Alura course [here](https://cursos.alura.com.br/course/react-native-integrando-app-web-api)
* Github project [here](https://github.com/alura-cursos/voll-mobile-integracao-api/tree/aula5)

## Create Expo project
```
npx create-expo-app voll-mobile
cd voll-mobile
npx expo start
```

Open Android Studio > More Actions > Virtual Device Manager > Create & Launch an emulator

## Install [native base](https://docs.nativebase.io/-installexpo)
```
npm install native-base
npx expo install react-native-svg@12.1.1
npx expo install react-native-safe-area-context@3.3.2
```

## Install [react navigation](https://reactnavigation.org/docs/4.x/getting-started/)
```
npm install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context
npm install @react-navigation/native-stack
npm install @react-navigation/bottom-tabs
```

## Install icon library
```
npm install react-native-vector-icons
npm i --save-dev @types/react-native-vector-icons
```

## Install axios, a library to make HTTP requisitions for an API
```
npm install axios
```

## Install async storate and jwt for login persistence
```
npm i @react-native-async-storage/async-storage
npm i jwt-decode
```

## Library to decode, but didn't work yet
```
npm install react-native-crypto
npm install --save react-native-base64
```

# Todo
## Use a real dabatase(firebase maybe) ou json server
Use a for to show all Consultas in the Consultas and Explorar screens.
The data are not dynamic, maybe on the future I can use a real database such as firebase.
## Button functions
Buttons to search Consultas currently don't have any functionality.

# My personal React Development Q&A
## Question 1
**Q:** In react '...rest' gathers all attributes. Why then can't it be used for every case scenario ? Just use '...rest' so then you can access every attribute without specifying each one manually
**A:** It's actually called the spread operator, while it can be used in every case it's not recommended because of: performance issues, make it harder to do the validation, documentation and also avoid unintented properties and name conflicts.

## Question 2
**Q:** Why in react some imports use from "native-base" and others "@react-navigation/native-stack", when and why '@'(at) character is needed in import.
**A:** It seems that the character '@' is used to hard specify the path of the import, especially when it's a path outside of the organization. Meanwhile, 'native-base' is from the same organization as React, so it's not necessary to hard specify the path with the '@' character. The '@' is mostly used to avoid import conflicts, especially when it's from an outside provider.


# Troublesothing
## Project using SDK 44 but Expo Go needs higher version
Run **expo upgrade** to update the expo version. If it's still don't work then change the version directly from the **package.json** file after that use the **npm install** command to update the version
## Fail to connect to API
Check if your ip it's correct on the api file, right [here](/src/services/api.ts)