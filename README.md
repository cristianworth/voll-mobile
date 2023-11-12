Auto Indent Selected Lines: Shift + Alt + F 

[Figma](https://www.figma.com/file/61CRNXlUmooMttGVa0GvML/React-fullstack---Voll.med?node-id=444-5625&t=wLBbxrl8vGdpTDf4-0) project

Create project
```
npx create-expo-app voll-mobile
cd voll-mobile
npx expo start
```

Open Android Studio > More Actions > Virtual Device Manager > Create & Launch an emulator

Install [native base](https://docs.nativebase.io/install-expo)
```
npm install native-base
npx expo install react-native-svg@12.1.1
npx expo install react-native-safe-area-context@3.3.2
```

Doubts
* Since ...rest gets all attributes why do I need to create placeholder and label separately instead of just using ...rest for everything