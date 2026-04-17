1. Node js 8 components ?
v8 engine
event loop
libuv
callback queue
event queue
thread pool
modules
Api's

User Request → Node API → Libuv → Thread Pool → Callback Queue → Event Loop → Response

2. Node js 6 phases ?
Timers Phase: setTimeout(), setInterval()
Pending Callbacks: handle tcp errors
idle / prepare: Used by Node.js internally
Poll Phase: Executes I/O callbacks (file, DB, API) 
Check Phase: Check Phase
Close Callbacks: cleanup callbacks
Timers → Pending → Idle → Poll → Check → Close

3. How node js works ?
Node.js works on a single-threaded, event-driven architecture. It uses an event loop to handle asynchronous operations. When a request comes in, Node processes synchronous code directly and delegates asynchronous tasks like file or network operations to the system using libuv. Once completed, callbacks are placed in a queue and executed by the event loop, allowing Node.js to handle multiple requests efficiently without blocking.

4. what is express js ?
Express.js is a lightweight web framework for Node.js used to build web applications and APIs.
key features of express js: 
routing: Handle different URLs, 
middleware: Functions that run before response,
Request & Response Handling, REST API Development, REST API Development 

5. What are Buffers ?
Buffer is a temporary memory storage used to hold binary data.
When Node.js receives data, it comes in binary format. Stored in Buffer.

6. What are Streams ?
Streams process data in chunks instead of loading everything at once.

7. Error Handling in node js ?
Error handling is the process of catching and managing errors so the application doesn’t crash and responds properly.

Synchronous Errors: use try and catch
Asynchronous Errors: handling with callback error-first pattern
prmoise errors: use .catch()
async & await errors

8. promise vs process.NextTick() ?
Promise → I’ll do it later.
nextTick → Do this right after this line, before anything else.

9. what is webhook ?
A webhook is a way for one application to send real-time data to another application automatically when an event happens.
Event happens → External service → HTTP POST → Your API endpoint

10. Scaling: PM2, clustering ?
Scaling means handling more users/requests efficiently without slowing down.
Problem with Node.js - Node.js is single-threaded - Uses only 1 CPU core - Cannot utilize multi-core systems fully.
Solution → PM2 + Clustering

PM2 - PM2 is a production process manager for Node.js applications.
Keeps app alive (auto-restart), Runs app in background, load balancing, monitoring.

Clustering (Node.js Built-in) - Clustering allows Node.js to run multiple instances (workers) of your app.
Master Process → Multiple Worker Processes → Handle Requests.
Uses multiple CPU cores, Improves performance, Handles more requests.



