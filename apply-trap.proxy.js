// The handler.apply() method is a trap for a function call.

const user = {
  firstName: "John",
  lastName: "Doe",
};

const getFullName = (user) => {
  return `${user.firstName} ${user.lastName}`;
};

const getFullNameProxy = new Proxy(getFullName, {
  apply(target, thisArg, args) {
    return target(...args).toUpperCase();
  },
});

console.log(getFullNameProxy(user));
