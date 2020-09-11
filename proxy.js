// A Proxy is created with two parameters:

// target: the original object which you want to proxy
// handler: an object that defines which operations will be intercepted and how to redefine intercepted operations.

// The proxyUser object uses the user object to store data. The proxyUser can access all properties of the user object.
// When you access a property of the user object via the proxyUser object, the get() method in the handler object is called.

const user = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@gmail.com",
};

const handler = {
  get(target, property) {
    console.log(`Property ${property} has been read.`);
    return target[property];
  },
};

const proxyUser = new Proxy(user, handler);
// Calling proxy proprities
console.log(proxyUser.firstName);
console.log(proxyUser.lastName);

// If original objet is modified, the change is reflected in the proxyUser:
// user.firstName = 'Jane';
// console.log(proxyUser.firstName);

// Similarly, a change in the proxyUser object will be reflected in the original object (user):
// proxyUser.lastName = 'Denir Jr';
// console.log(user.lastName);
