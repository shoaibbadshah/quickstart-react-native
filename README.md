[![](https://www.banuba.com/hubfs/Banuba_November2018/Images/Banuba%20SDK.png)](https://docs.banuba.com/)

## Example app with [Banuba SDK](https://docs.banuba.com/)  integrated through React Native (iOS and Android)


## [Requirements](https://docs.banuba.com/face-ar-sdk-v1/overview/system_requirements)

## Usage

### Token
Before you commit to a license, you are free to test all the features of the SDK for free. To start it, [send us a message](https://www.banuba.com/facear-sdk/face-filters#form).  


Feel free to [contact us](https://docs.banuba.com/face-ar-sdk-v1/support) if you have any questions.

### Getting Started

0. Clone the repository, ensure that you have setted up [React Native CLI development environment](https://reactnative.dev/docs/environment-setup).
1. Copy and Paste your Client Token into appropriate section of [`BanubaQuickstartReactNative/App.tsx`](BanubaQuickstartReactNative/App.tsx#L11).
2. Go to `BanubaQuickstartReactNative` directory. Run `yarn` command. This will install all required dependences.
3. (iOS only) Go to `ios` directory and run `Pod install`. Return back to parent. This will install all required iOS dependencies.
4. Connect a device and run `yarn ios` or `yarn android`. Alternatively you may may open XCode or Android Studio projects from
`ios` and `android` directories.

### Integration steps

This is how to integrate Banuba SDK into existing React Native app. You still need a Client Token for this.

1. Add `@banuba/react-native` [dependency](https://www.npmjs.com/package/@banuba/react-native): `yarn add @banuba/react-native`.
2. *For iOS*: add a link to the native Banuba SDK into [`ios/Podfile`](BanubaQuickstartReactNative/ios/Podfile#L4): `source 'https://github.com/sdk-banuba/banuba-sdk-podspecs.git'`.
    *For Android*: add our [maven repository](BanubaQuickstartReactNative/android/build.gradle#L28).
3. Add code from [`BanubaQuickstartReactNative/App.tsx`](BanubaQuickstartReactNative/App.tsx) into your app.
4. Add `effects` folder into your project. Link it with your app
    1. iOS: just link effects folder into `Runner` XCode project (`File` -> `Add Files to ...`).
    2. Android: add [the following](BanubaQuickstartReactNative/android/app/build.gradle#L172) code into app `build.gradle`. 
5. *For iOS*: add [`NSCameraUsageDescription`](BanubaQuickstartReactNative/ios/BanubaQuickstartReactNative/Info.plist#L39).

### Docs
You can find more info [here](https://docs.banuba.com/).
