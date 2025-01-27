/* Foundation Challenges */

export class Coordinate {
  constructor(xCoord, yCoord) {
    this.xCoord = xCoord;
    this.yCoord = yCoord;
  }
}

export class Alert {
  constructor(message) {
    this.message = message;
  }

  printMessage() {
    const message = `!!!! ${this.message} !!!!`;
    return message;
  }
}

export class Loader {
  constructor(htmlRef) {
    this.htmlRef = htmlRef;
  }

  displayLoader() {
    this.htmlRef.innerHTML = '<div class="loader"></div>';
  }

  removeLoader() {
    this.htmlRef.innerHTML = "";
  }
}

/* Intermediate Challenges */

export class Engine {
  constructor() {
    this.engineIsRunning = false;
  }

  startEngine() {
    const message = this.engineIsRunning
      ? "Engine is already running"
      : "Engine has started running";
    !this.engineIsRunning ? (this.engineIsRunning = true) : null;
    return message;
  }

  stopEngine() {
    const message = this.engineIsRunning
      ? "Engine has stopped running"
      : "Engine has already stopped running";
    this.engineIsRunning ? (this.engineIsRunning = false) : null;
    return message;
  }
}

export class Counter {
  constructor(count = 0) {
    this.count = count;
  }

  increment() {
    this.count++;
    return this.count;
  }

  decrement() {
    if (this.count > 0) this.count--;
    return this.count;
  }
}

export class Modal {
  constructor(htmlRef, title, message) {
    this.htmlRef = htmlRef;
    this.title = title;
    this.message = message;
  }

  renderHtml() {
    this.htmlRef.innerHTML = `
    <div class="modal">
      <h2 class="modal--title">${this.title}</h2>
      <p class="modal--message">${this.message}</p>
    </div>
    `;
  }

  displayModal() {
    this.htmlRef.classList.toggle("hide");
  }
}

/* Advanced Challenges */

export class BookShelf {
  constructor(shelfId, booksOnShelf = []) {
    this._shelfId = shelfId;
    this._booksOnShelf = booksOnShelf;
  }

  get booksOnShelf() {
    return this._booksOnShelf;
  }

  set booksOnShelf(bookArray = []) {
    this._booksOnShelf = bookArray;
  }

  get latestBook() {
    const lastIndex = this.booksOnShelf.length - 1;
    return this.booksOnShelf[lastIndex];
  }

  set addBookToShelf(book) {
    this._booksOnShelf.push(book);
  }
}

/* Expert Challenges */
export class BankAccount {
  constructor(name, email, balance = 0) {
    this.name = name;
    this.email = email;
    this._balance = balance;
  }

  get balance() {
    return this._balance;
  }

  deposit(toDeposit) {
    const convertedToNumber = +toDeposit;

    if (!convertedToNumber || convertedToNumber < 0)
      return "Invalid input, unable to deposit";

    this._balance += convertedToNumber;

    return this.balance;
  }

  withdraw(toWithdraw) {
    const convertedToNumber = +toWithdraw;

    if (!convertedToNumber || convertedToNumber < 0)
      return "Invalid input, unable to withdraw";

    if (this._balance < +convertedToNumber)
      return "Insufficient funds, unable to withdraw";

    this._balance -= +convertedToNumber;

    return this.balance;
  }
}
