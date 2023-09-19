import React from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "./../../components/shared/Spinner";

const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="row g-0">
          <div className="col-md-8 form-banner">
            {/* <img  style ={{width:"78.5rem"}}src="./assets/images/banner1.jpg" alt="loginImage" /> */}
          </div>
          <div className="col-md-4 form-container">
            <Form
              formTitle={"Login Page"}
              submitBtn={"Login"}
              formType={"login"}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Login;








// map, filter, and reduce are higher-order functions in JavaScript that are used for working with arrays. They allow for
//  concise and expressive ways to perform common operations on arrays.

// map:
// The map function creates a new array by applying a provided function to each element in the original array.

// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = numbers.map(x => x * x);
// // squaredNumbers will be [1, 4, 9, 16, 25]

// filter:
// The filter function creates a new array with all elements that pass a test defined by a provided function.

// const numbers = [1, 2, 3, 4, 5];
// const evenNumbers = numbers.filter(x => x % 2 === 0);
// // evenNumbers will be [2, 4]

// reduce:
// The reduce function applies a function to an accumulator and each element in the array (from left to right) to reduce it to a single value.
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// // sum will be 15

// Here, accumulator is the value that gets accumulated after each iteration and currentValue is the current element being processed.

// These functions are often used together, allowing for powerful operations on arrays in a functional programming style.

// Example using all three together:

// javascript
// Copy code
// const numbers = [1, 2, 3, 4, 5];
// const squaredEvenSum = numbers
//   .filter(x => x % 2 === 0)
//   .map(x => x * x)
//   .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// // squaredEvenSum will be 20 (4 + 16)
// In this example, we first filter for even numbers, then square them, and finally sum them up.
// These functions are fundamental in functional programming and are widely used in modern JavaScript development. They allow for more readable, maintainable, and concise code.




// EVENT LOOP

// The event loop is a critical concept in JavaScript that handles the execution of code. 
// It's part of the JavaScript runtime environment, which includes the JavaScript engine (like V8 in Chrome, SpiderMonkey in Firefox, etc.) 
// and the browser's Web APIs (like DOM, XMLHttpRequest, etc. in the case of a web browser).

// Here's how it works:

// Call Stack:
// JavaScript code execution starts in the Call Stack. The call stack is where function calls are tracked. When a function is called, 
// it's pushed onto the stack. When it returns, it's popped off the stack.

// Callback Queue:
// If there are asynchronous tasks (like fetching data from an API or setting a timeout), 
// they are sent to the Callback Queue once they are complete.

// Event Loop:
// The Event Loop's job is to continuously monitor the Call Stack and the Callback Queue. 
// If the Call Stack is empty, it will take the first function in the Callback Queue and push it onto the Call Stack.

// Callback Function:
// The function from the Callback Queue is executed in the Call Stack. This could be an event handler for a button click, 
// a timer function, a response from an API, etc.

// Microtasks Queue (Job Queue):
// In modern JavaScript, there's also a Microtasks Queue (sometimes called Job Queue) where certain types of 
// tasks (like Promise callbacks and process.nextTick in Node.js) are placed. These have higher priority than tasks in the Callback Queue.

// Event Loop (again):
// After the Call Stack is empty again, the Event Loop checks the Microtasks Queue and, 
// if it's not empty, it will move all the tasks from there to the Call Stack.
// This cycle keeps repeating, allowing JavaScript to handle both synchronous and asynchronous operations.

// Here's a simplified example:

// console.log('Start');
// setTimeout(function() {
//     console.log('Timeout');
// }, 0);
// Promise.resolve().then(function() {
//     console.log('Promise');
// });
// console.log('End');

// In this example, the output will be:
// Start
// End
// Promise
// Timeout
// Even though the setTimeout was set to 0 milliseconds, it goes to the Callback Queue after the Call Stack is empty, 
// not immediately. The Promise callback goes to the Microtasks Queue and has higher priority, so it's executed before the setTimeout callback.

// Keep in mind, this is a simplified explanation. The actual mechanics can be more complex due to microtasks, and in Node.js, 
// there are differences in the event loop structure compared to browsers.
