class StringBuilder {
  #value;

  constructor(itemsStr) {
    this.#value = itemsStr;
  }

  getValue() {
    return this.#value;
  }
  padEnd(itemsStr) {
    this.#value = this.#value + itemsStr; 
  }
  padStart(itemsStr) {
    this.#value = itemsStr + this.#value;
  }
  padBoth(itemsStr) {
    this.#value = itemsStr + this.#value + itemsStr;
  }
}


const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
