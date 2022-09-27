const {join} = require('path') 


exports.config = {
    hostname: 'localhost',
    port: 4723,
    path: '/wd/hub',
    specs: [
        './test/specs/**/*js'
    ],
    framework: 'mocha',
    capabilities: [{
        "platformName": "Android",
        "platformVersion": "9.0",
        "deviceName": "ebac-qe",
        "automationName": "UIAutomator2",
        "app": join(process.cwd(), './app/android/Android-NativeDemoApp-0.4.0.apk'),
        "appWaitActivity": 'com.wdiodemoapp.MainActivity'
    }]
}