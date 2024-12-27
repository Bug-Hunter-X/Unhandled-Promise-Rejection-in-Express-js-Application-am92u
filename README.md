# Unhandled Promise Rejection in Express.js Application

This repository demonstrates a common error in Express.js applications: unhandled promise rejections from asynchronous operations.  The provided `bug.js` file shows an example of an application that does not properly handle these rejections, leading to crashes.  The solution, shown in `bugSolution.js`, demonstrates how to correctly handle such rejections and improve the application's robustness.

## Bug

The `bug.js` file shows an Express.js application with an asynchronous operation (`someAsyncOperation()`) that may fail. The error handling is incomplete, resulting in an unhandled promise rejection when the operation fails. This will often cause the application to crash.

## Solution

The `bugSolution.js` file showcases how to address this issue by properly handling the promise rejections using `.catch()`.  It also demonstrates logging the error for debugging purposes and returning a more user-friendly error response to the client.

This is a crucial aspect of building reliable Express.js applications.  Always ensure your asynchronous operations have proper error handling to prevent unexpected crashes.