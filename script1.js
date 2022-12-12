// var x = 1;

// a();
// b();
// function a() {
//   var x = 10;
//   console.log(x);
// }
// function b() {
//   var x = 100;
//   console.log(x);
// }
// console.log(x);
//lexical environment
// var b = 10;
// var j = 0;
// function k() {
//   console.log(b);
//   console.log(p);
//   function n() {
//     var p = 12;
//     console.log(j);
//   }
//   n();
// }
// k();
// console.log(b);
// var d = 10;
// function f() {
//   console.log(d);
// }
// function k() {
//   console.log(d);
// }
// f();
// k();
// function v() {
//   let b = 20;
//   console.log(b);
// }
// v();
// console.log(b);
// console.log(f);
// let f = 10;
// let bestFood; // bestFood’s TDZ ends here
// console.log(bestFood); // returns undefined because bestFood’s TDZ does not exist here
// bestFood = "Vegetable Fried Rice"; // bestFood’s TDZ does not exist here
// console.log(bestFood);
// const a;
// console.log(a);//syntax error
// a = 10;
// let b;
// console.log(b); //undefined
// b = 10;
// var f;
// console.log(f); //undefined
// f = 10;
// var g = 10;
// console.log(g);
// g = 100;
// console.log(f);
// let f = 10;
// let h;
// console.log(h);
// console.log(p);
// var p = 10;
// h = 10;
// console.log(h);
// let a = 20;
// function m() {
//   var a = 30;
//   console.log(a);
// }
// m();

// function g() {
//   var d = 23;
//   function h() {
//     return d;
//   }
//   return h();
//   d = 100;
// }
// var f = g();
// console.log(f);
function a() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, 1000);
  }
  console.log("armaan");
}
a();
console.log("khan");
//what to do
