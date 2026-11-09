## Type Alias vs Interface in TypeScript

# Introduction
TypeScript is a programming language that adds static typing to JavaScript. Type Aliases and Interfaces are two important features used to describe the structure of data.Although they are similar, they have some differences.


# What Is a Type Alias?
A Type Alias provides us to give a name to a type. It can represent primitive types, objects, unions, tuples, and more.
Example:
type User = {
  name: string;
  age: number;
};

const user: User = {
  name: "Rahim",
  age: 25
};
Here User represents an object with a string name and a numeric age.

# What Is an Interface?
An Interface defines the structure that an object should follow.
Example:
interface Product {
  name: string;
  price: number;
}

const product: Product = {
  name: "Keyboard",
  price: 1500
};
The Product interface specifies that a product must have a name and a price.


# Key Differences
1. Extending Types

Interfaces can extend other interfaces:
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}
Type Aliases can combine object types using intersections:
type Animal = {
  name: string;
};

type Dog = Animal & {
  breed: string;
};

2. Union Types
Type Aliases can represent union types directly:
type Status = "pending" | "success" | "failed";
An interface cannot directly represent this kind of union.

3. Declaration Merging
Interfaces with the same name can be merged:
interface Person {
  name: string;
}

interface Person {
  age: number;
}
The resulting Person interface contains both name and age.
Type Aliases do not support this kind of declaration merging.


# When Should We Use Them?
Use an Interface when defining the structure of objects or designing class contracts.
Use a Type Alias when working with unions, tuples, primitive types, or more complex combinations of types.


## Conclusion ##
Both Type Aliases and Interfaces help make TypeScript code easier to understand and maintain. The best choice depends on the situation and the requirements of the project.
