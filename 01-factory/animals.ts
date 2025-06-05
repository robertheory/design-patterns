// animal interface
interface Animal {
  makeSound(): string;
  move(): string;
  sleep(): string;
  eat(): string;
}

abstract class AnimalFactory {
  public abstract createAnimal(): Animal;

  public abstract move(): string;

  public abstract makeSound(): string;

  public sleep(): string {
    return "Sleeping...";
  }

  public eat(): string {
    return "Eating...";
  }
}

// dog interface
interface DogInterface extends Animal {
  bark(): string;
  fetch(): string;
}

// dog implementation
class Dog implements DogInterface {
  public makeSound(): string {
    return "Woof!";
  }
  public move(): string {
    return "Running...";
  }
  public sleep(): string {
    return "Sleeping...";
  }
  public eat(): string {
    return "Eating...";
  }
  public bark(): string {
    return "Barking...";
  }
  public fetch(): string {
    return "Fetching the ball...";
  }
}

// dog creator
class DogFactory extends AnimalFactory {
  public createAnimal(): Dog {
    return new Dog();
  }

  public move(): string {
    return "Dog is running";
  }

  public makeSound(): string {
    return "Woof!";
  }
}

// eagle interface
interface EagleInterface extends Animal {
  sharpenTalons(): string;
}

// eagle implementation
class Eagle implements EagleInterface {
  public makeSound(): string {
    return "Screech!";
  }
  public move(): string {
    return "Soaring...";
  }
  public sleep(): string {
    return "Sleeping...";
  }
  public eat(): string {
    return "Eating...";
  }
  public sharpenTalons(): string {
    return "Sharpening talons...";
  }
}

// eagle creator
class EagleFactory extends AnimalFactory {
  public createAnimal(): Eagle {
    return new Eagle();
  }

  public move(): string {
    return "Eagle is soaring";
  }

  public makeSound(): string {
    return "Screech!";
  }
}

// dolphin interface
interface DolphinInterface extends Animal {
  click(): string;
  jumpFromWater(): string;
}

// dolphin implementation
class Dolphin implements DolphinInterface {
  public makeSound(): string {
    return "Click!";
  }
  public move(): string {
    return "Swimming...";
  }
  public sleep(): string {
    return "Sleeping...";
  }
  public eat(): string {
    return "Eating...";
  }
  public click(): string {
    return "Clicking...";
  }
  public jumpFromWater(): string {
    return "Jumping from water...";
  }
}

// dolphin creator
class DolphinFactory extends AnimalFactory {
  public createAnimal(): Dolphin {
    return new Dolphin();
  }

  public move(): string {
    return "Dolphin is swimming";
  }

  public makeSound(): string {
    return "Click!";
  }
}

// Example usage
const dogFactory = new DogFactory();
const dog = dogFactory.createAnimal();
console.table({
  animalType: dog.constructor.name, // Dog
  sound: dog.makeSound(), // Woof!
  move: dog.move(), // Running...
  sleep: dog.sleep(), // Sleeping...
  eat: dog.eat(), // Eating...
  bark: dog.bark(), // Barking...
  fetch: dog.fetch() // Fetching the ball...
}); // Woof!

const eagleFactory = new EagleFactory();
const eagle = eagleFactory.createAnimal();
console.table({
  animalType: eagle.constructor.name, // Eagle
  sound: eagle.makeSound(), // Screech!
  move: eagle.move(), // Soaring...
  sleep: eagle.sleep(), // Sleeping...
  eat: eagle.eat(), // Eating...
  sharpenTalons: eagle.sharpenTalons() // Sharpening talons...
});

const dolphinFactory = new DolphinFactory();
const dolphin = dolphinFactory.createAnimal();
console.table({
  animalType: dolphin.constructor.name, // Dolphin
  sound: dolphin.makeSound(), // Click!
  move: dolphin.move(), // Swimming...
  sleep: dolphin.sleep(), // Sleeping...
  eat: dolphin.eat(), // Eating...
  click: dolphin.click(), // Clicking...
  jumpFromWater: dolphin.jumpFromWater() // Jumping from water...
});
