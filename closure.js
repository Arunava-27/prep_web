function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const fn = outer();
fn(); // 1
fn(); // 2
fn(); // 3

// 🔥 What is a Closure?

// A closure is created when an inner function remembers variables from its outer function’s scope, even after the outer function has finished executing.

// A closure = function + its lexical environment.