class Product {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.inStock = 0;
  }

  addToStock(quantity) {
    this.inStock += quantity;
  }

  calculateDiscount(discount) {
    return this.price * ((100 - discount) / 100);
  }
}

const mirror = new Product("Espelho de parede", "descrição do produto", 80);
console.log(mirror);
mirror.addToStock(99);
console.log(mirror);
console.log(mirror.calculateDiscount(15));
console.log(mirror.calculateDiscount(10));
