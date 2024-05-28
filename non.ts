class Person {
  private _lastName: string;

  constructor(lastName: string) {
    this._lastName = lastName;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(newLastName: string) {
    if (newLastName && newLastName.length > 0) {
      this._lastName = newLastName;
    } else {
      throw new Error('Last name must be a valid non-empty string.');
    }
  }
}

// Usage
const person = new Person("Hossain");
console.log(person.lastName); // Outputs: Hossain

person.lastName = "Smith"; // Sets the last name to Smith
console.log(person.lastName); // Outputs: Smith
