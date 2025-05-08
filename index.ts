function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === true || toUpper === undefined) {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  }
}

formatString('Hello World');
formatString('Hello World', true);
formatString('Hello World', false);

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4);
}

const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

filterByRating(books);

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((prev, current) => prev.concat(current), []);
}

concatenateArrays(['a', 'b'], ['c']);
concatenateArrays([1, 2], [3, 4], [5]);

class Vehicle {
  private make: string;
  private year: number;
  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }
  getInfo() {}
}

class Car extends Vehicle {
  private model: string;
  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }
  getModel() {}
}

function processValue(value: string | number): number {
  if (typeof value === 'string') {
    return value.length;
  } else {
    return value * 2;
  }
}
processValue('Hello World');
processValue(10);

interface Product {
  name: string;
  price: number;
}

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) return null;
  let expensiveProduct = products[0];
  for (const product of products) {
    if (product.price > expensiveProduct.price) {
      expensiveProduct = product;
    }
  }
  return expensiveProduct;
}

const products = [
  { name: 'Pen', price: 10 },
  { name: 'Notebook', price: 25 },
  { name: 'Bag', price: 50 },
];

getMostExpensiveProduct(products);

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (day === Day.Saturday || day === Day.Sunday) {
    return 'Weekend';
  } else {
    return 'Weekday';
  }
}

getDayType(Day.Monday);
getDayType(Day.Sunday);

async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    if (n < 0) {
      reject(new Error('Negative numbers are not allowed!'));
    } else {
      setTimeout(() => {
        resolve(n * n);
      }, 1000);
    }
  });
}

squareAsync(4).then(console.log);
squareAsync(-3).catch(console.error);
