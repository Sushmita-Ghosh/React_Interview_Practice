# React_Interview_Practice
Practice questions for React Interview:

[Apurv's List](https://ak-react-slides.netlify.app/#0)

## TABLE OF CONTENTS: 

| Serial No  | Topic Name |
| ------------- | ------------- |
| 1  |[HOC](#hoc)|
| 2  |[SYNTHETIC EVENTS](#se)|
| 3  |[FC VS CC](#fccc)|



## TOPICS:
---

<a name="hoc"></a><h2>HIGHER ORDER COMPONENT</h2>
---

<br>
Higher Order Component in React is defined a component which takes another component as input and may or may not return another component.
  
<b>For example :</b> Suppose you have two buttons to design – Login & Register – So you can design a button component – then pass it to another higher order component which will have additional functionalities like – styling – on Click – then the text

#### Code :

```ContainerHoc.jsx```
```javascript
export default function ContainerHoc(component) {
  const Component = component;
  return function (props) {
    return (
      <div>
        <h1> Inside HOC</h1>
        {/* yahan props pass krna mandatory hai */}
        <Component {...props} />
      </div>
    );
  };
}
```

 [YT](https://www.youtube.com/watch?v=o22KRrxab18&list=PLmcRO0ZwQv4QMslGJQg7N8AzaHkC5pJ4t&index=28) 

---

<a name="se"></a><h2>SYNTHETIC EVENTS</h2>
---

<br>



  
  <br>
  <br>

For example : Suppose you have two buttons to design – Login & Register – So you can design a button component – then pass it to another higher order component which will have additional functionalities like – styling – on Click – then the text

 [YT](https://www.youtube.com/watch?v=o22KRrxab18&list=PLmcRO0ZwQv4QMslGJQg7N8AzaHkC5pJ4t&index=28) 


---


<a name="fccc"></a><h2>FUNCTIONAL VS CLASS COMPONENTS</h2>
---
<br>
So in react, before the introduction of hooks in 16.8 version - Functional components did not have state -
So we had to write class components for any kind of data manipulation through state and props.

* But after hooks got introducted we got useState(for any kind of state changes) & useEffect for any lifecycle methods.

* Since functional components are simple Javascript functions so the it is easier to read and test out them, Like useeffect alone can handle 3 lifecycle methods but in class components we have to write three different methods to
achive the scenario

* Also like class components are internally transformed into functional components only while computation so using fucntional components reduces this extra step of convertion hence we are encouraged to use fucntional componnets over class coponents

 [YT](https://www.youtube.com/watch?v=65BsgzQR-rU) 


---
