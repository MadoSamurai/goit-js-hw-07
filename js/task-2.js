class Storage{
  #items = []
  constructor(obj){
    this.#items = obj
  }
  
  getItems() {
    return this.#items
  }
  addItem(newItem) {
    this.#items.push(newItem)
  }
  removeItem(itemToRemove) {
    const itemRem = this.#items.indexOf(itemToRemove)
    if (itemRem !== -1) {
      this.#items.splice(itemRem,1)
    }
    return this.#items
  }

}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]