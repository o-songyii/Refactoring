
export class Order {
  constructor(data) {
    this.priority = data.priority;
  }
  
  //재사용성이 높아짐.
  isHighPriority() {
    return this.priority.higherThan('normal');
  }
}

class Priority {
  #value;
  constructor(value) {
    if (Priority.legalValues().includes(value)) {
      this.#value = value;
    } else {
      //생성자안에서 에러를 던지는건 보안에 취약함. 좋은 방법은 아님.
      throw new Error(`${value} is invalid for Priority`);
    }
  }

  get index() {
    return Priority.legalValues().findIndex(this.#value);
  }

  equals(other) {
    return this.index === other.index;
  }

  higherThan(other) {
    return this.index > other.index;
  }

  static legalValues() {
    return ['low','normal','high','rush'];
  }
}

const orders = [
  new Order({ priority: 'normal' }),
  new Order({ priority: 'high' }),
  new Order({ priority: 'rush' }),
];

const highPriorityCount = orders.filter((o) => o.isHighPriority()).length;
