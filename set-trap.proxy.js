// The set() trap control behavior when a property of the target object is set.

// Suppose that the age of user must be greater than 18.
//  To enforce this , you develop a set() trap

const user = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const handler = {
  set(target, property, value) {
    if (property === "age") {
      if (typeof value !== "number") {
        throw new Error("Age must be a number.");
      }
      if (value < 18) {
        throw new Error("The user must be 18 or older.");
      }
    }
    target[property] = value;
  },
};

const proxyUser = new Proxy(user, handler);

// proxyUser.age = '16'; // Outputs Error typeof number

// proxyUser.age = 16; //   Outputs Error greater or equal to 18

proxyUser.age = 21; // No Error
