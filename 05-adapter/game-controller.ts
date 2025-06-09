class WebController {
  onClick(): void {
    console.log("Web click event");
  }
}

class MobileController {
  onTouch(): void {
    console.log("Mobile touch event");
  }
}

class MobileAdapter extends WebController {
  private mobileController: MobileController;

  constructor(mobileController: MobileController) {
    super();
    this.mobileController = mobileController;
  }

  onClick(): void {
    console.log("Adapting mobile touch event to web click event");
    this.mobileController.onTouch();
  }
}

// Usage example

const webController = new WebController();
webController.onClick(); // Outputs: Web click event

const mobileController = new MobileController();
mobileController.onTouch(); // Outputs: Mobile touch event

console.log("\nUsing MobileAdapter to adapt mobile controller to web controller");

const mobileAdapter = new MobileAdapter(mobileController);
mobileAdapter.onClick(); // Outputs: Adapting mobile touch event to web click event
// The adapter allows the mobile controller to be used as a web controller
