// const oneRef = document.getElementById("one");
// const TwoRef = document.getElementById("two");
// const threeRef = document.getElementById("three");

// const addHandler = () => {
// //   const value1 = parseInt(oneRef.value);
// //   const value2 = parseInt(TwoRef.value);
// //   const value3 = parseInt(threeRef.value);
// //   const add = parseInt(value1 + value2 + value3);

// //   document.getElementById("Result").innerText = `the sum of ${value1} ,${value2},${value3}  is::`+add;
//   // console.log(parseInt(oneRef.value))

//   const value1 = parseInt(oneRef.value);
//   const value2 = parseInt(TwoRef.value);
//   const value3 = parseInt(threeRef.value);
//   const add = parseInt(value1 * value2 * value3)/100;

//   document.getElementById("Result").innerText = `the sum of ${value1} ,${value2},${value3}  is::`+add;
// };


// const inputMeters=document.getElementById("meters");
// const addHandler = () => { 

//     document.getElementById("outputcms").innerText=` value in cms is : ${inputMeters.value/0.01}`;

// };

const pCount=document.getElementById("person");
const priceDis=document.getElementById("price");
const addHandler = () => { 

   const value1 = parseInt(pCount.value);
   const value2 = parseInt(priceDis.value);
    document.getElementById("Result").innerText=` value of distrubted price  is : ${value2/value1}`;

};
