/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1.
 * 2.
 * 3.
 * 4.
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
console.log(this);
// Principle 2

// code example for Implicit Binding
const guy = {
  name: 'eric',
  age: 31,
  sex: 'male',
  callName: function() {
    console.log(`${this.name} is my name ${this.age} is my age`);
  }
};
const girl = {
  name: 'Amy',
  sex: 'female',
  callName: function() {
    console.log(`${this.name} is my name, I am a ${this.sex}`);
  }
};

// Principle 3

// code example for New Binding
const newbind = guy.callName.bind(girl);
// Principle 4

// code example for Explicit Binding
