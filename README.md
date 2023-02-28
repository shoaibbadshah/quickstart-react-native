[![](https://www.banuba.com/hubfs/Banuba_November2018/Images/Banuba%20SDK.png)](https://docs.banuba.com/)

## Example app with [Banuba SDK](https://docs.banuba.com/)  integrated troughth React Native (iOS and Android)


## [Requirements](https://docs.banuba.com/face-ar-sdk-v1/overview/system_requirements)

## Usage

### Token
Before you commit to a license, you are free to test all the features of the SDK for free. To start it, [send us a message](https://www.banuba.com/facear-sdk/face-filters#form).  


Feel free to [contact us](https://docs.banuba.com/face-ar-sdk-v1/support) if you have any questions.

### Getting Started

0. Clone the repository, ensure that you have setted up [React Native CLI development environment] (https://reactnative.dev/docs/environment-setup).
1. Copy and Paste your client token into appropriate section of [`BanubaQuickstartReactNative/App.tsx`](lBanubaQuickstartReactNative/App.tsx#L11).
2. Go to `BanubaQuickstartReactNative` directory. Run `yarn` command. This will install all required dependences.
3. (iOS only) Go to `ios` directory and run `Pod install`. Return back to parent. This will install all required iOS dependencies.
3. Connect a device and run `yarn ios` or `yarn android`. Alternatively you may may open XCode or Android projects from
`ios` and `android` directories.

### Integration steps

This is how to integrate Banuba SDK into existing React Native app. You still need a Client Token for this.

1. Add `@banuba/react-native` [dependency](): `yarn install `.
2. For iOS: add link to native Banuba SDK into `ios/Podfile`: `source 'https://github.com/sdk-banuba/banuba-sdk-podspecs.git'`
TODO (Android)?
3. Add code from [`BanubaQuickstartReactNative/App.tsx`](lBanubaQuickstartReactNative/App.tsx) into your app.
4. Add `effects` folder into your project. Link it with your app
    1. iOS: just link effects folder into `Runner` Xcode project (`File` -> `Add Files to ...`).
    2. Android: Add [the following](lBanubaQuickstartReactNative/android/app/build.gradle#L61) code into app `build.gradle`. (TODO)

### Docs
You can find more info [here](https://docs.banuba.com/).
