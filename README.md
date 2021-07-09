## Multiplatform SolidJs template

This is a multiplatform template that runs on CapacitorJS. It is based on maksimil template: https://github.com/maksimil/solid-template. With it you can create Web, PWA, Android, IOS and Desktop apps using SolidJS.

### 📱Why not Kotlin and Swift?
If all you care is performance, you should definetely use Kotlin or Swift. That being said, there is some downsides of coding on native, most of startups don't have enough time to code the same app on four different programming languages, that is when CapacitorJs comes into play... Coding something once and running it everywhere!

### ⚡ Solid is blazing fast
CapacitorJs is not the fastest framework out there, it is way better than Cordova, but still slower than React Native and Flutter. Using CapacitorJs with Vue or React makes it even slower, one alternative is using SolidJs, one of the fastest web frameworks out there. You may ask how fast it is, and here is the answer:

https://krausest.github.io/js-framework-benchmark/2021/table_chrome_91.0.4472.77.html

### 🪄 Scripts

#### Web Development
Start a development localhost server with HMR enabled (thanks to Vite):
- Npm: ```npm run-script dev```
- Yarn: ```yarn dev```

#### Web Production
Start a development localhost server with HMR enabled (thanks to Vite):
- Npm: ```npm run-script web```
- Yarn: ```yarn web```

_If you want to skip the build process, run ```npm run-script start:web```._

#### Android
Creates the Android project based on the last build, run ```npm run-script build:web``` before it.
- Npm: ```npm run-script android```
- Yarn: ```yarn android```

_If you want to open Android Studio, run ```npm run-script build:android```._

#### iOS
Creates the iOS project based on the last build, run ```npm run-script build:web``` before it.
- Npm: ```npm run-script ios```
- Yarn: ```yarn android```

_If you want to open XCode, run ```npm run-script build:ios```._

#### Desktop
Creates the ELectron project based on the last build, run ```npm run-script build:web``` before it.
- Npm: ```npm run-script desktop```
- Yarn: ```yarn android```
