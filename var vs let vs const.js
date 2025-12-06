//* 1. var

// Old way (ES5) — avoid unless required for legacy reasons.

// ✔ Characteristics

// Function-scoped

// Hoisted (initialized as undefined)

// Allows re-declaration and re-assignment

// Can cause unexpected bugs because of scope + hoisting


function test() {
  console.log(x); // undefined (hoisted)
  var x = 10;
  if (true) {
    var y = 20;
  }
  console.log(y); // 20 (not block-scoped!)
}

//! ❗ Avoid because:

//! No block scope → easier to create unintended global variables

//! Hoisting leads to confusing behavior

test()


//* 2. let

// Modern, safe variable declaration (ES6+).

// ✔ Characteristics

// Block-scoped

// Hoisted but not initialized (Temporal Dead Zone)

// Allows re-assignment, but no re-declaration in same scope


//* let a = 5;
//* a = 10; // OK

//! let a = 20; // ❌ Error (same scope re-declaration)

//? When to use:

//! When the value needs to change


//* 3. const

// Also block-scoped, but immutable binding.

// ✔ Characteristics

// Must be initialized on declaration

// The variable binding is constant
// (but the contents of objects/arrays can still change)

// No re-declaration, no re-assignment

//! const num = 10;
// ! num = 20; // ❌ Error

const obj = { a: 1 };
obj.a = 2; // ✔ Allowed (object mutable)
