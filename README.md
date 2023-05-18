# React_Interview_Practice
Practice questions for React Interview:

[Apurv's List](https://ak-react-slides.netlify.app/#0)

### TABLE OF CONTENTS: 

| Serial No  | Topic Name |
| ------------- | ------------- |
| 1  |[HOC](#hoc)|
| Content Cell  | Content Cell  |
| 3  |[FC VS CC](#fccc)|



### TOPICS:

<a name="hoc"></a><h3>HIGHER ORDER COMPONENT</h3>
<br>
Higher Order Component in React is defined a component which takes another component as input and may or may not return another component.
  
For example : Suppose you have two buttons to design – Login & Register – So you can design a button component – then pass it to another higher order component which will have additional functionalities like – styling – on Click – then the text

 [YT](https://www.youtube.com/watch?v=o22KRrxab18&list=PLmcRO0ZwQv4QMslGJQg7N8AzaHkC5pJ4t&index=28) 

---

<details>
<summary>HIGHER ORDER COMPONENT</summary>
<br>


Higher Order Component in React is defined a component which takes another component as input and may or may not return another component.
  
  <br>
  <br>

For example : Suppose you have two buttons to design – Login & Register – So you can design a button component – then pass it to another higher order component which will have additional functionalities like – styling – on Click – then the text

 [YT](https://www.youtube.com/watch?v=o22KRrxab18&list=PLmcRO0ZwQv4QMslGJQg7N8AzaHkC5pJ4t&index=28) 

</details>

---


<p><a name="fccc"></a><h3>FUNCTIONAL VS CLASS COMPONENTS</h3>
<br>
So in react, before the introduction of hooks in 16.8 version - Functional components did not have state -
So we had to write class components for any kind of data manipulation through state and props.

* But after hooks got introducted we got useState(for any kind of state changes) & useEffect for any lifecycle methods.

* Since functional components are simple Javascript functions so the it is easier to read and test out them, Like useeffect alone can handle 3 lifecycle methods but in class components we have to write three different methods to
achive the scenario

* Also like class components are internally transformed into functional components only while computation so using fucntional components reduces this extra step of convertion hence we are encouraged to use fucntional componnets over class coponents

 [YT](https://www.youtube.com/watch?v=65BsgzQR-rU) 
</p>

---
