// Abstract Factory Pattern for Electronic Devices

interface AbstractElectronicFactory {
  createPhone(): AbstractPhone;
  createLaptop(): AbstractLaptop;
  createTablet(): AbstractTablet;
  createSmartwatch(): AbstractSmartwatch;
}

interface AbstractPhone {
  makeCall(): string;
  sendMessage(): string;
  browseInternet(): string;
  takePhoto(): string;
}

interface AbstractLaptop {
  runProgram(): string;
  browseInternet(): string;
  playGame(): string;
  takePhoto(): string;
}

interface AbstractTablet {
  watchVideo(): string;
  browseInternet(): string;
  readEbook(): string;
  takePhoto(): string;
}

interface AbstractSmartwatch {
  trackSteps(): string;
  monitorHeartRate(): string;
  receiveNotifications(): string;
}

// Concrete Factory for Apple Electronics

class AppleFactory implements AbstractElectronicFactory {
  public createPhone(): AbstractPhone {
    return new IPhone();
  }

  public createLaptop(): AbstractLaptop {
    return new MacBook();
  }

  public createTablet(): AbstractTablet {
    return new IPad();
  }

  public createSmartwatch(): AbstractSmartwatch {
    return new AppleWatch();
  }
}

class IPhone implements AbstractPhone {
  public makeCall(): string {
    return "Making a call on iPhone";
  }
  public sendMessage(): string {
    return "Sending a message on iPhone";
  }
  public browseInternet(): string {
    return "Browsing internet on iPhone";
  }
  public takePhoto(): string {
    return "Taking a photo with iPhone camera";
  }
}

class MacBook implements AbstractLaptop {
  public runProgram(): string {
    return "Running a program on MacBook";
  }
  public browseInternet(): string {
    return "Browsing internet on MacBook";
  }
  public playGame(): string {
    return "Playing a game on MacBook";
  }
  public takePhoto(): string {
    return "Taking a photo with MacBook camera";
  }
}

class IPad implements AbstractTablet {
  public watchVideo(): string {
    return "Watching video on iPad";
  }
  public browseInternet(): string {
    return "Browsing internet on iPad";
  }
  public readEbook(): string {
    return "Reading an ebook on iPad";
  }
  public takePhoto(): string {
    return "Taking a photo with iPad camera";
  }
}

class AppleWatch implements AbstractSmartwatch {
  public trackSteps(): string {
    return "Tracking steps with Apple Watch";
  }
  public monitorHeartRate(): string {
    return "Monitoring heart rate with Apple Watch";
  }
  public receiveNotifications(): string {
    return "Receiving notifications on Apple Watch";
  }
}

// Concrete Factory for Samsung Electronics

class SamsungFactory implements AbstractElectronicFactory {
  public createPhone(): AbstractPhone {
    return new GalaxyPhone();
  }

  public createLaptop(): AbstractLaptop {
    return new GalaxyBook();
  }

  public createTablet(): AbstractTablet {
    return new GalaxyTab();
  }

  public createSmartwatch(): AbstractSmartwatch {
    return new GalaxyWatch();
  }
}

class GalaxyPhone implements AbstractPhone {
  public makeCall(): string {
    return "Making a call on Galaxy Phone";
  }
  public sendMessage(): string {
    return "Sending a message on Galaxy Phone";
  }
  public browseInternet(): string {
    return "Browsing internet on Galaxy Phone";
  }
  public takePhoto(): string {
    return "Taking a photo with Galaxy Phone camera";
  }
}

class GalaxyBook implements AbstractLaptop {
  public runProgram(): string {
    return "Running a program on Galaxy Book";
  }
  public browseInternet(): string {
    return "Browsing internet on Galaxy Book";
  }
  public playGame(): string {
    return "Playing a game on Galaxy Book";
  }
  public takePhoto(): string {
    return "Taking a photo with Galaxy Book camera";
  }
}

class GalaxyTab implements AbstractTablet {
  public watchVideo(): string {
    return "Watching video on Galaxy Tab";
  }
  public browseInternet(): string {
    return "Browsing internet on Galaxy Tab";
  }
  public readEbook(): string {
    return "Reading an ebook on Galaxy Tab";
  }
  public takePhoto(): string {
    return "Taking a photo with Galaxy Tab camera";
  }
}

class GalaxyWatch implements AbstractSmartwatch {
  public trackSteps(): string {
    return "Tracking steps with Galaxy Watch";
  }
  public monitorHeartRate(): string {
    return "Monitoring heart rate with Galaxy Watch";
  }
  public receiveNotifications(): string {
    return "Receiving notifications on Galaxy Watch";
  }
}

// Concrete Factory for Xiaomi Electronics
class XiaomiFactory implements AbstractElectronicFactory {
  public createPhone(): AbstractPhone {
    return new MiPhone();
  }

  public createLaptop(): AbstractLaptop {
    return new MiLaptop();
  }

  public createTablet(): AbstractTablet {
    return new MiTablet();
  }

  public createSmartwatch(): AbstractSmartwatch {
    return new MiWatch();
  }
}

class MiPhone implements AbstractPhone {
  public makeCall(): string {
    return "Making a call on Mi Phone";
  }
  public sendMessage(): string {
    return "Sending a message on Mi Phone";
  }
  public browseInternet(): string {
    return "Browsing internet on Mi Phone";
  }
  public takePhoto(): string {
    return "Taking a photo with Mi Phone camera";
  }
}

class MiLaptop implements AbstractLaptop {
  public runProgram(): string {
    return "Running a program on Mi Laptop";
  }
  public browseInternet(): string {
    return "Browsing internet on Mi Laptop";
  }
  public playGame(): string {
    return "Playing a game on Mi Laptop";
  }
  public takePhoto(): string {
    return "Taking a photo with Mi Laptop camera";
  }
}

class MiTablet implements AbstractTablet {
  public watchVideo(): string {
    return "Watching video on Mi Tablet";
  }
  public browseInternet(): string {
    return "Browsing internet on Mi Tablet";
  }
  public readEbook(): string {
    return "Reading an ebook on Mi Tablet";
  }
  public takePhoto(): string {
    return "Taking a photo with Mi Tablet camera";
  }
}

class MiWatch implements AbstractSmartwatch {
  public trackSteps(): string {
    return "Tracking steps with Mi Watch";
  }
  public monitorHeartRate(): string {
    return "Monitoring heart rate with Mi Watch";
  }
  public receiveNotifications(): string {
    return "Receiving notifications on Mi Watch";
  }
}

// Example usage

const appleFactory = new AppleFactory();
const applePhone = appleFactory.createPhone();
const appleLaptop = appleFactory.createLaptop();
const appleTablet = appleFactory.createTablet();
const appleWatch = appleFactory.createSmartwatch();
console.table({
  manufacturer: "Apple",
  phone: applePhone.makeCall(), // Making a call on iPhone
  laptop: appleLaptop.runProgram(), // Running a program on MacBook
  tablet: appleTablet.watchVideo(), // Watching video on iPad
  smartwatch: appleWatch.trackSteps(), // Tracking steps with Apple Watch
});

const samsungFactory = new SamsungFactory();
const samsungPhone = samsungFactory.createPhone();
const samsungLaptop = samsungFactory.createLaptop();
const samsungTablet = samsungFactory.createTablet();
const samsungWatch = samsungFactory.createSmartwatch();
console.table({
  manufacturer: "Samsung",
  phone: samsungPhone.makeCall(), // Making a call on Galaxy Phone
  laptop: samsungLaptop.runProgram(), // Running a program on Galaxy Book
  tablet: samsungTablet.watchVideo(), // Watching video on Galaxy Tab
  smartwatch: samsungWatch.trackSteps(), // Tracking steps with Galaxy Watch
});

const xiaomiFactory = new XiaomiFactory();
const xiaomiPhone = xiaomiFactory.createPhone();
const xiaomiLaptop = xiaomiFactory.createLaptop();
const xiaomiTablet = xiaomiFactory.createTablet();
const xiaomiWatch = xiaomiFactory.createSmartwatch();
console.table({
  manufacturer: "Xiaomi",
  phone: xiaomiPhone.makeCall(), // Making a call on Mi Phone
  laptop: xiaomiLaptop.runProgram(), // Running a program on Mi Laptop
  tablet: xiaomiTablet.watchVideo(), // Watching video on Mi Tablet
  smartwatch: xiaomiWatch.trackSteps(), // Tracking steps with Mi Watch
});
