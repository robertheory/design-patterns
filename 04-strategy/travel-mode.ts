interface Travel {
  travel(): void;
}

class Context {
  private strategy: Travel;

  constructor(strategy: Travel) {
    this.strategy = strategy;
  }

  setStrategy(strategy: Travel) {
    this.strategy = strategy;
  }

  travel() {
    this.strategy.travel();
  }
}

class CarTravel implements Travel {
  private startEngine() {
    console.log("Starting car engine");
  }

  travel() {
    console.log("Checking brakes");
    console.log("Checking fuel");
    console.log("Checking tires");
    console.log("Checking lights");
    this.startEngine();

    console.log("Fun time!");
  }
}

class TrainTravel implements Travel {
  private board() {
    console.log("Checking tickets");
  }

  travel() {
    console.log("Check luggage");
    console.log("Buy ticket");
    console.log("Buy snacks");
    console.log("Find platform");
    console.log("Wait for train");
    this.board();
    console.log("Enjoy the ride!");
  }
}

class AirplaneTravel implements Travel {
  private checkIn() {
    console.log("Checking in at the airport");
  }

  travel() {
    console.log("Buy ticket");
    console.log("Checking luggage");
    this.checkIn();
    console.log("Finding gate");
    console.log("Boarding the plane");
    console.log("Enjoy the flight!");
  }
}

class BoatTravel implements Travel {
  private board() {
    console.log("Boarding the boat");
  }

  travel() {
    console.log("Buy ticket");
    console.log("Check luggage");
    console.log("Finding dock");
    console.log("Waiting for boat");
    this.board();
    console.log("Enjoy the cruise!");
  }
}

// Example usage
console.log("Travel Mode Strategy Example\n\n");

const context = new Context(new CarTravel());
context.travel(); // Using CarTravel strategy

console.log("\n\nSwitching travel mode...\n\n");

context.setStrategy(new TrainTravel());
context.travel(); // Using TrainTravel strategy

console.log("\n\nSwitching travel mode...\n\n");

context.setStrategy(new AirplaneTravel());
context.travel(); // Using AirplaneTravel strategy

console.log("\n\nSwitching travel mode...\n\n");

context.setStrategy(new BoatTravel());
context.travel(); // Using BoatTravel strategy

