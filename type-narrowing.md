# Understanding Type Narrowing in TypeScript

## Introduction

Type Narrowing is a feature in TypeScript that helps determine the specific type of a value within a section of code.

When a variable can have more than one type, TypeScript allows us to check its type before performing an operation.

## What Is Type Narrowing?

Consider the following example:

```typescript
function printValue(value: string | number): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}
```

The `value` parameter can be either a string or a number.

Inside the `if` block, TypeScript knows that `value` is a string. Inside the `else` block, it knows that `value` is a number.

This process is called Type Narrowing.

## Common Ways to Narrow Types

### 1. Using typeof

The `typeof` operator checks primitive types such as strings, numbers, and booleans.

```typescript
function describe(value: string | number): string {
  if (typeof value === "string") {
    return "Text: " + value;
  }

  return "Number: " + value;
}
```

### 2. Using Truthiness Checks

Truthiness checks can help narrow values based on whether they are truthy or falsy.

```typescript
function greet(name?: string): string {
  if (name) {
    return `Hello, ${name}`;
  }

  return "Hello, guest";
}
```

Here, the function handles cases where `name` is missing or an empty string.

### 3. Using instanceof

The `instanceof` operator checks whether an object is an instance of a class.

```typescript
function getDateInfo(value: Date | string): string {
  if (value instanceof Date) {
    return value.toDateString();
  }

  return value;
}
```

TypeScript can identify whether `value` is a `Date` object or a string.

### 4. Using the in Operator

The `in` operator checks whether a property exists on an object.

```typescript
type Admin = {
  name: string;
  permissions: string[];
};

type Customer = {
  name: string;
  email: string;
};

function describeUser(user: Admin | Customer): string {
  if ("permissions" in user) {
    return "Admin: " + user.name;
  }

  return "Customer: " + user.name;
}
```

The presence of the `permissions` property helps distinguish the two types.

## Why Is Type Narrowing Important?

Type Narrowing helps us:

- Avoid invalid operations on values.
- Write safer and more predictable code.
- Work effectively with union types.
- Make code easier to understand and maintain.

## Conclusion

Type Narrowing is an important TypeScript feature. By using checks such as `typeof`, `instanceof`, truthiness checks, and the `in` operator, developers can safely handle values that may have different types.
