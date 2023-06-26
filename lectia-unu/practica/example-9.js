/* Example 9 - Default value and null merge operator */
const value = ""; // An empty string (which is also a falsy value)

const emptyNotAllowed = value || "Hello world";
const preservingFalsy = value ?? "Hi neighborhood";
