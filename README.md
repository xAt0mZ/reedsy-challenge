# Front end Engineer Challenge

## 1. About you - Tell us about one of your commercial projects with Vue.js or AngularJS.

One of the main commercial project in AngularJS I contributed to is [Portainer.io](https://portainer.io).
Portainer is an open-source project that helps making Docker management easy. Things short, it is a web UI, deployed on docker, that uses docker API to allow users do anything (or nearly anything) they want against their docker env, using a UI instead of using shell commands.

I'm working with the Portainer team since August 2018, and I am currently the frontend tech lead of the project.
Source code can be found [here](https://github.com/portainer/portainer).

Basically, Portainer is developed using AngularJS 1.5, still using old JS with functions for legacy parts (progressive migration to ES6+ classes).

This projects helped me improve myself on many skills:
- AngularJS / Golang / Docker (hard skills)
- Communication / Organization (soft skills)

## 2. General

##### 2.1. What kind of front end projects do you enjoy working on? Why?

I enjoy working on projects (with small or big teams, doesn't matter) that are helps to people in a gobal way.
The trade of the product's user isn't really important to me (can be really tech-oriented, like Portainer, or designed for everybody, like a previous project I worked on).

The only thing that matters is to know that many people will use the product and that the product will help them achieve what they want to do, or learn things by doing things by themselves when using the product.
Taking Portainer as an exemple: docker can be easy to manager at start when using really simple contexts, but when it comes to more complicated ones, using Portainer is a good help as the UI exposes everything that is related to what you achieve to do.

Another key point is the challenges a project can give me : it can either be technical challenges (project should work on this device with this problematics, or in this situation) or pure skill / knowledge challenges (you need to develop this functionnality but you don't know how it works or how people do at the moment without your product).

Taking Portainer as an example, it gave me both types of challenges, for example :
* should be reactive on high latency environments (tech)
* should be able to handle 100k elements on this view and stay responsive, but we can't do backend pagination as this API doesn't support it (tech)
* needs to support MACVLAN driver for swarm mode (knowledge as I didn't know a thing about MACVLAN and docker swarm mode)

Challenges are a good way to improve myself, either in my work (produce more and more clean and optimized code) or personally (learn things everyday).

##### 2.2. Which are your favorite features of HTML5? How have you used them before?

I never paid attention to specific HTML5 features, but looking at the list of [HTML5 features](https://www.w3schools.com/html/html5_new_elements.asp), turns out that I mostly used Input Types and Attributes, and never used all the other features.
Some would probably help make my HTML files easier to read.

##### 2.3. Explain the difference between creating a DOM element setting `innerHTML` and using `createElement`.

Never used both of `innerHTML` and `createElement` directly. Found some great links to explain differences between both. [One](https://stackoverflow.com/questions/2946656/advantages-of-createelement-over-innerhtml) explains it well.

Setting `innerHTML` basically sets the inner HTML of an element (means the content of a DOM node) to the value we give it. Should be a string formatted DOM element.

`createElement` creates a node that can be added as a node child then with `appendChild` or `insertBefore`.

From my understanding and performance-wise based on the tests I made with [this test](https://andrew.hedges.name/experiments/innerhtml/original.html), using `innerHTML` should be reserved to plain text (setting the text of a button for example), while everything else should be done with `createElement`.

##### 2.4. Compare two-way data binding vs one-way data flow.

Two-way data binding and one-way data binding can be compared to passing an argument by reference or by copy to a function.

Two-way data binding is like passing by reference : when the child component modifies the data, the parent component has the modifications replicated on his data reference.

one-way data binding is like passing by copy : when the child component modifies the data, the parents component doesn't have the modifications replicated on his own data reference.

Explanation with to following context : a custom `view` has a custom `panel` to display data.

```html
<view>
  <panel
  data="$ctrl.data">
  </panel>
</view>
```

With 2WDB, modifications done in `panel` context on data passed by `view`, will be replicated in `view` context. While with 1WDB, modifications done in `panel` context on the data will not be replicated in `view` context.

With both 1WDB and 2WDB, modifications on data in `view` will be replicated on `panel` context.

##### 2.5. Why is asynchronous programming important in JavaScript?

When a program is synchronous, it sequentially executes code from A to Z, iterating each letter, but doesn't allow other tasks to be executed in the same time. Means, when starting a blocking operation, the programs waits for the result of the operation to start the next step, and so on. On long blocking operations (I/O, network, ...), the programs become unresponsive as it is waiting for the result.

Asynchronous programming, in comparison to synchronous programming, allows a program to manage multiple tasks at the same time (handle concurrent operations). Means, when you start a blocking operation, the program doesn't wait for the response before becoming responsive again. It uses events to trigger or continue concurrent execution flows.

For example, you need to have a response of a web request to work on the returned data and display it.

* A sync program will wait for the request to return, then work on the data, display it, then become responsive.
* An async program will start the request, become responsive (so user can trigger another event / e.g. start a 2nd async flow), and when the request returns, it will work on the data (continue first async flow) and display it.

As JS is mainly used in front-end development (like with AngularJS, Vue.JS), it's not acceptable to do sync tasks as performing an action would freeze the entire UI until the sync flow has ended. Async programming will allow the program to start tasks "in the background" while letting the UI responsive to the user.

Async programming is also usefull when using JS on backend (with NodeJS for example), as the server will be able to handle multiple requests and treat them at the same time. (Imagine a server doing synchronous work : it will get a request, treat it entirely before beeing able to handle another. Not really what we would expect from a web server ...).

More examples and detailed explanations can be found [here](https://trello.com/c/5TzQwzMJ/80-what-is-asynchronous-programming-and-why-is-it-important-in-javascript) and [here](https://www.quora.com/What-is-asynchronous-programming-and-why-is-it-important-in-JavaScript).


## 3. Styling

Done in [3-styling](./3-styling).


## 4. SPA

WIP in [4-spa](./4-spa).