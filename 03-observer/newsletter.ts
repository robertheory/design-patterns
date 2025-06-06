interface Newsletter {
  news: string;
  subscribe(subscriber: Subscriber): void;
  unsubscribe(subscriber: Subscriber): void;
  notify(): void;
}

interface Subscriber {
  update(newsletter: Newsletter): void;
}

class Subscriber1 implements Subscriber {
  public update(newsletter: Newsletter): void {
    console.log(`Subscriber1 just received the morning news:\t ${newsletter.news}`);
  }
}

class Subscriber2 implements Subscriber {
  public update(newsletter: Newsletter): void {
    console.log(`Subscriber2 just received the morning news:\t ${newsletter.news}`);
  }
}

class MorningNewsletter implements Newsletter {
  public news: string;

  private subscribers: Subscriber[] = [];

  public subscribe(subscriber: Subscriber): void {
    const alreadySubscribed = this.subscribers.includes(subscriber);

    if (alreadySubscribed) {
      console.log(`${subscriber.constructor.name} is already subscribed to morning newsletter.`);
      return;
    }
    this.subscribers.push(subscriber);
    console.log(`Subscribed ${subscriber.constructor.name} to morning newsletter.`);
  }

  public unsubscribe(subscriber: Subscriber): void {
    const index = this.subscribers.indexOf(subscriber);
    if (index !== -1) {
      this.subscribers.splice(index, 1);
      console.log(`Unsubscribed ${subscriber.constructor.name} from morning newsletter.`);
    } else {
      console.log(`${subscriber.constructor.name} is not subscribed to morning newsletter.`);
    }
  }

  public notify(): void {
    for (const subscriber of this.subscribers) {
      subscriber.update(this);
    }
  }

  public setNews(news: string): void {
    this.news = news;
  }
}

// Example usage

const morningNewsletter = new MorningNewsletter();

const subscriber1 = new Subscriber1();
morningNewsletter.subscribe(subscriber1);

const subscriber2 = new Subscriber2();
morningNewsletter.subscribe(subscriber2);

morningNewsletter.setNews("Today's top story: Observer pattern in TypeScript!");

morningNewsletter.notify(); // Both subscribers will receive the update

morningNewsletter.setNews("Breaking news: Observer pattern is awesome!");

morningNewsletter.unsubscribe(subscriber1);

morningNewsletter.notify(); // Subscriber1 will not receive this update
