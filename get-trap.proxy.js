// The get() trap is fired when a property of the target object is accessed via the proxy object.

// The user object does not have a property fullName,
//can be used the get() trap to create the fullName property based on the firstName and lastName properties:

const user = {
  firstName: "John",
  lastName: "Doe",
};

const handler = {
  get(target, property) {
    return property === "fullName"
      ? `${target.firstName} ${target.lastName}`
      : target[property];
  },
};

const proxyUser = new Proxy(user, handler);

console.log(proxyUser.fullName);
