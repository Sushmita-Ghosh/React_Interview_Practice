# React_Interview_Practice
Practice questions for React Interview:

[Apurv's List](https://ak-react-slides.netlify.app/#0)

## TABLE OF CONTENTS: 

| Serial No  | Topic Name |
| ------------- | ------------- |
| 1  |[HOC](#hoc)|✔
| 2  |[SYNTHETIC EVENTS](#se)|✔
| 3  |[FC VS CC](#fccc)|✔
| 4  |[STRICT MODE](#sm)|✔
| 5  |[REACT PERFORMANCE USEMEMO VS USECALLBACK VS REACT.MEMO](#rf)|✔
| 6  |[INFINITE LOOP IN REACT](#iloop)|✔
| 7  |[ADVANTAGES OF STYLED COMPONENTS](#sc)|✔
| 8  |[CAN WE RETURN UNDEFINED FROM AN RENDER?](#undef)|✔
| 9  |[SHADOW DOM](#fccc)|✔
| 10  |[LAZY IMPORT, DYNAMIC IMPORT](#fccc)|✔
| 11  |[STATELESS COMPONENTS](#fccc)|✔
| 12  |[PROP TYPES](#fccc)|✔
| 13  |[ERROR BOUNDERIES](#eb)|✔
| 14  |[SERVER SIDE RENDERING OF COMPONENTS](#fccc)|✔
| 15  |[CSS IN REACT](#css)|✔
| 16  |[SIGNIFICANCE OF "KEY" ATTRIBUTE](#fccc)|✔
| 17  |[DYNAMIC ROUTING](#fccc)|✔
| 18  |[RENDER PROPS](#rp)| ✔
| 19  |[CONTEXT API VS REDUX](#fccc)|✔
| 20  |[CONTEXT API BASIC USE](#conba)|✔
| 21  |[REACT PORTAL](#rp)| ✔
| 22  |[CONTROLLED VS UNCONTROLLED COMPONENTS ](#cvu)|✔
| 23  |[REACT.LAZY, REACT.SUSPENSE](#rsrl)|✔
| 24  |[LIFECYCLE METHODS](#lm)| ✔
| 25  |[REFS, FORWARD REFS](#ref)| ✔
| 26  |[CUSTOM HOOKS](#chook)| ✔
| 27  |[PURE COMPONENTS / MEMO ](#pc)| ✔
| 28  |[WHY FRAGMENTS ARE BETTER THAN CONTAINER DIVS? ](#frag)| ✔
| 29  |[TREE SHAKING? ](#ts)| ✔





## TOPICS:
---

<a name="hoc"></a><h2>HIGHER ORDER COMPONENT</h2>
---

<br>
Higher Order Component in React is defined a component which takes another component as input and may or may not return another component.
  
<b>For example :</b> Suppose you have two buttons to design – Login & Register – So you can design a button component – then pass it to another higher order component which will have additional functionalities like – styling – on Click – then the text

### Code :

```Hello.jsx```
```javascript
function Hello() {
  return <div>Hello</div>;
}

export default Hello;
```

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

```App.jsx```
```javascript
import "./App.css";
import ContainerHoc from "./components/ContainerHoc";
import Hello from "./components/Hello";

function App() {
  const SampleComponent = ContainerHoc(Hello);

  return (
    <>
      <SampleComponent />
    </>
  );
}

export default App;

```

 [YT](https://www.youtube.com/watch?v=o22KRrxab18&list=PLmcRO0ZwQv4QMslGJQg7N8AzaHkC5pJ4t&index=28) 

---

<a name="se"></a><h2>SYNTHETIC EVENTS</h2>
---

In order to work across multiple browsers, react has create a wrapper around native browser events.
* Whenever a event occurs in the application, react listens to it and then wraps the event with an interface - which will provide the same functionality as native browser events.
* Why? By doing so, they have avoided creating multiple implementations for multiple methods for multiple browsers.


``` Advantages```
* Provides cross browser feasibility
* it increases the performance of the application as React reuses the event object.

<b>For Example</b> 
  
<b>Syntax:</b>
```e.preventDefault()``` prevents all the default behavior by the browser.

```e.stopPropagation()``` prevents the call to the parent component whenever a child component gets called.

Here ‘e’ is a synthetic event, a cross-browser object. It is made with a wrapper around the actual event of the browser. 

```javascript
function App() {
    const onClickHandler = (e) => {
    // here e is the synthetic event
        console.log(e);
    }
    return (
        <div className="App">
            <button onClick={onClickHandler}>
                Click
            </button>
        </div>
    );
}
  
export default App;
```

[YT](https://www.youtube.com/watch?v=o22KRrxab18&list=PLmcRO0ZwQv4QMslGJQg7N8AzaHkC5pJ4t&index=28) 

[Ref](https://www.geeksforgeeks.org/what-are-synthetic-events-in-reactjs/)

[REF2](https://itnext.io/deep-dive-into-syntheticevent-in-react-325486d9baad)

---


<a name="fccc"></a><h2>FUNCTIONAL VS CLASS COMPONENTS</h2>
---
<br>
So in react, before the introduction of hooks in 16.8 version - Functional components did not have state -
So we had to write class components for any kind of data manipulation through state and props.

* But after hooks got introducted we got useState(for any kind of state changes) & useEffect for any lifecycle methods.

* Since functional components are simple Javascript functions so the it is easier to read and test out them, Like useeffect alone can handle 3 lifecycle methods but in class components we have to write three different methods to achieve the scenario

* Also like class components are internally transformed into functional components only while computation so using fucntional components reduces this extra step of convertion hence we are encouraged to use fucntional componnets over class coponents (** dnm)

* There is no concept of this - so this is easier to understand and implement.

 [YT](https://www.youtube.com/watch?v=65BsgzQR-rU) 


---


<a name="sm"></a><h2>STRICT MODE</h2>
---
<br>

Strict Mode is a react developer tool (means it only runs in development mode) for identifying possible problems in apllication. It provides deprication checks and warning messages whenever any such code is written in an application. 

* Doesn't render any UI, just for development check.
* Since it is a development tool, only works in developement mode - doesn't effect production build whatsoever.
* In order to identify and detect any problems within the application and show warning messages, StrictMode renders every component inside the application twice.
* unsafe lifecycle methods - if a legacy code has unsafe methods , it detects it and shows warnings.
* helpful debugging tool.

 [GFG](https://www.geeksforgeeks.org/what-is-strictmode-in-react/)


---


<a name="LM"></a><h2>LIFECYCLE METHODS</h2>
---
<br>

#### Mounting:
* super(props) is used to initialise the parent class constructor - and also by doing this we get to use the this.props
* getDerivedStateFromProps takes state and props as arguments - and is triggered when we want to change the states on basis of props over time. It can return null or new  updated state.
* except componentDidMount we should not create sideeffects on any other lifecycle hooks
* render method is the only required method
* order of execution constructor -> getderivedStateFromProps -> render -> componentDidMount 

#### Updating:
* Update lifecycle methods gets triggered on change of props or state in react component.
* getDerivedStateFromProps ->  gets triggered on every re-render -> rarely used
* shouldComponentUpdate -> dictated if at all the component should get rendered or not - by default on change of state or props the component gets re rendered - to prevernt this default behavior we can return false from this method - we can compare the existing state & props with the new state and props and if there is no change we can return false. (performance optimization)
* render () -> returns jsx
* getSnapshotBeforeUpdate -> called right before the changes in thevirtual DOM are to be reflected in the real DOM - takes prevProps and prevState as input- returns a value or null - rarely used
* componentDidUpdate -> called at last - only once - we can make ajax calls -> takes props and state as input -> and snapshot - 
* order of execution -> getDerivedStateFromProps ->shouldComponentUpdate -> render -> getSnapshotBeforeUpdate- -> componentDidUpdate

### Unmounting:
* only one method componentWillUnmount
![image](https://github.com/Sushmita-Ghosh/React_Interview_Practice/assets/82622059/06f01c47-44ae-46ee-989a-ba8d5881e462)

### Error Handling
![image](https://github.com/Sushmita-Ghosh/React_Interview_Practice/assets/82622059/95806a6f-d605-4aa0-9ec1-e5342941adf3)


[YT](https://www.youtube.com/watch?v=KDXZibVdiEI&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=23)
[YT Updating] (https://www.youtube.com/watch?v=DyPkojd1fas&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=24)
![image](https://github.com/Sushmita-Ghosh/React_Interview_Practice/assets/82622059/a4703a16-ac75-4ade-a420-4b4914388b4c)

---

<a name="eb"></a><h2>ERROR BOUNDARIES</h2>
---
<br>

Whenever we face an error in our application , react unmounts the whole component, - in such cases it is always better to show a fallback UI and catch the error.

* A class component that implements either or both the lifecycle methods getDerivedStatefromError & componentDidCatch becomes a error boundary.
* The static method getDerivedStateFromError is used to render a fallback UI after an error is thrown, and the componnetDidCatch method is used to log the error to the console.

```Hero.js```
```jsx
import React from 'react'

function Hero ({ heroName }) {
  if (heroName === 'Joker') {
    throw new Error(' Not a hero!')
  }
  return <h1>{heroName}</h1>
}

export default Hero
```

```ErrorBoundary.js```
```jsx
import React, { Component } from 'react'

export class ErrorBoundary extends Component {
	constructor(props) {
		super(props)

		this.state = {
			hasError: false
		}
	}
		 // *takes in error as an argument*
	static getDerivedStateFromError(error) {
		return { hasError: true }
	}
	// used to log the error; info is the information related to the error 
	componentDidCatch(error, info) {
		console.log(error)
		console.log(info)
	}

	render() {
		if (this.state.hasError) {
			return <h1>Something went wrong.</h1>
		}
		return this.props.children
	}
}

export default ErrorBoundary
```
```App.js```
```jsx
import React, { Component } from 'react'
import './App.css'

import Hero from './components/Hero'
import ErrorBoundary from './components/ErrorBoundary'


class App extends Component {
	render() {
		return (
			<div className="App">
				<Hero heroName="Batman" />
				<Hero heroName="Superman" />
				 // Here we can wrap only the component that is likely to throw an error or each of the hero components
				<ErrorBoundary>
					<Hero heroName="Joker" />
				</ErrorBoundary> 
			</div>
		)
	}
}

export default App
```

* Below will be the output when we wrap each Hero in Error Boundary
![image](https://github.com/Sushmita-Ghosh/React_Interview_Practice/assets/82622059/1dad38e0-6d8c-466b-bab0-424dc7f8709d)



* Error Bounderies can catch errors during rendering, in lifecycle methods and in constructor of the whole tree below them, but can't catch error in event handlers, to catch errors in event handles we need to use try-catch block.


[YT] (https://www.youtube.com/watch?v=DNYXgtZBRPE&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=32)

---


<a name="rp"></a><h2>RENDER PROPS</h2>
---
<br>

The term "render prop" is a technique for *sharing code* between react components using *a prop whose value is a function*

* The render name is kind of the convention but we can change it to something else, code will still work.
* <b> Example brief </b> : We have two counters : ClickCounter ( value of count increases on click) & HoverCounter (value increases on hover) - since these are sharing functionalities , we can use renderprops pattern to pass the count and increment count to each.

	
***Below is the container which implements the render props pattern***
```Counter.js```
```jsx
import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  incrementCount = () => {
    this.setState(prevState => {
      return { count: prevState.count + 1 }
    })
  }
  render() {
    return (
      <div>
        {this.props.render(this.state.count, this.incrementCount)} // this line means that it will render whatever is passed to the render prop
      </div>
    )
  }
}

export default Counter
```

*The below two counters use the props counter and increment counter*


```ClickCounterTwo.js```
```jsx
import React, { Component } from 'react'

class ClickCounterTwo extends Component {

  render() {
    const { count, incrementCount } = this.props
		return <button onClick={incrementCount}>{this.props.name } Clicked {count} times</button>
	}
}

export default ClickCounterTwo
```


```HoverCounterTwo.js```
```jsx
import React, { Component } from 'react'

class HoverCounterTwo extends Component {

	render() {
		const { count, incrementCount } = this.props
		return <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
	}
}

export default HoverCounterTwo
```

***Now in App.js we can use the Counter component and use the "render" prop to pass the count and incrementCount***

```App.js```
```jsx
import React, { Component } from 'react'
import './App.css'
import Counter from './components/Counter'
import ClickCounterTwo from './components/ClickCounterTwo'
import HoverCounterTwo from './components/HoverCounterTwo'

class App extends Component {
	render() {
		return (
			<div className="App">
				 <Counter
				 // in below state we are using the render to pass a function as a prop for the counters
					render={(count, incrementCount) =>
					<ClickCounterTwo
						count={count}
						incrementCount={incrementCount}>
					</ClickCounterTwo>}>
				</Counter>
				<Counter
					render={(count, incrementCount) =>
					<HoverCounterTwo
						count={count}
						incrementCount={incrementCount}>
					</HoverCounterTwo>}>
				</Counter> 
			</div>
		)
	}
}

export default App
```


***Even if they share the count & increment count their instances are different so no conflict will happen. ***


[YT](https://www.youtube.com/watch?v=NdapMDgNhtE&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=36)
[RENDER PROPS IN FC](https://stackoverflow.com/questions/59481733/hocs-and-render-props-with-functional-components-in-react-16)

---


<a name="rp"></a><h2>REACT PORTALS</h2>
---
<br>

React Portals provide a way to render DOM nodes that exists outside the hierarchy of the parent component.

* In react application, all our components render inside the div with id="root" ; what React Portals provide is the ability to break out of this DOM tree.

* Step 1: create a div element which has a different id than root - such as portal root
``` index.html``
```jsx
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
    <!--
      manifest.json provides metadata used when your web app is added to the
      homescreen on Android. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json">

    <title>React App</title>
  </head>
  <body>
    <noscript>
      You need to enable JavaScript to run this app.
    </noscript>
    <div id="root"></div>
    <div id="portal-root"></div> // -> this is the first step to create React Portals

  </body>
</html>
```



* Step 2: create a component - with an UI which we want inside out portal-root div. We have to use ReactDOM.createPortal -> wherein we can pass the string/Component that we want to show as part of the component & second parameter is where we want to place the component in the DOM (in our case portal-root div)

``` PortalDemo.js ```
``` jsx
import React from 'react'
import ReactDOM from 'react-dom'

function PortalDemo() {
	return ReactDOM.createPortal(
		<h1>Portals Demo</h1>,
		document.getElementById('portal-root')
	)
}

export default PortalDemo
```

* Step 3: Import it where you want to use - (App.js)
```App.js```
```jsx
import React, { Component } from 'react'
import './App.css'
import PortalDemo from './components/PortalDemo'

class App extends Component {
	render() {
		return (
			<div className="App">
					<PortalDemo />
			</div>
		)
	}
}

export default App
```

* How it will appear on inspect element: 
![image](https://github.com/Sushmita-Ghosh/React_Interview_Practice/assets/82622059/22b837bc-9342-40dd-be6f-a651cade1262)

* Use Case: Having to deal with the parent's class's css when the child component is a modal, popup or tooltip
* Example : [CODESANDBOX LINK BY K.C DODDS](https://codesandbox.io/s/00254q4n6p?file=/src/index.js:2214-2234)
* In the above example the Modal UI will breaks as the parent div has a max width - but if we are using portals , it is fine.

#### EVENT BUBBLING IN PORTALS:
* Eventhough the portal is not inside the React DOM tree, it behaves like a react child in every other way.
* SO an event triggered from inside a portal will propagate to ancestors in React tree(id = "root") even if they are not within the real dom tree. (id = "portal-root")
* Example https://codepen.io/gaearon/pen/jGBWpE
* In the above example the Modal ( which is React portal component) contains a child component with a button click . When we click on the button the even bubbles up in the tree and we are still able to see the clicks count increasing
 
 ![image](https://github.com/Sushmita-Ghosh/React_Interview_Practice/assets/82622059/43745172-3fa4-4d11-a37b-b8a619d46108)

[YT](https://www.youtube.com/watch?v=HpHLa-5Wdys&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=31)


---

<a name="css"></a><h2>CSS IN REACT</h2>
---
<br>

There are various ways to apply css in react :
1. CSS stylesheets 
2. Inline css
3. CSS Modules
4. CSS in JS

### CSS MODULES:

* There is a file naming convention that we must follow for css module - filename.module.css
* One advantage of using css modules - is that classes are locally scoped by default - 
* What the above line means is -  suppose we have an app component and an Inner componnet inside app - so if we have a module css file - and we have imported it in app - we can still use it in the Inner component by default (child components have access to the parents css styles) - this leads to css conflicts
* But in css modules since the classes are locally scoped they are not applicable to children component


``` Inline.js ```
``` javascript
```


[YT](https://www.youtube.com/watch?v=j5P9FHiBVNo&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=20)

---


<a name="sc"></a><h2>ADVANTAGES OF STYLED COMPONENTS</h2>
---
<br>

### WHAT ARE STYLED COMPONENTS? 

* ![image](https://github.com/Sushmita-Ghosh/React_Interview_Practice/assets/82622059/4222fec5-59ab-4747-8faa-41a251b4f3cd)

#### BENEFITS:

* No class name bugs: The library generated unique classname for each style. No worries of overlap, or duplication of classnames.
* Easier deletion of css: If we are working on a large codebase, finding the unused css classes bacomes difficult. If a component is not being used - deleting it will delete its styles as well.
* Dynamic styling: In react, since props drive styles - sometimes styles should be modified based on props - styled components allow us to do that.
* Painless Maintenance: It is very easy to maintain the styles when using sc - as we do not have to move across files to access the styles affecting our component.
* Vendor prefixing: For some of the newer css features , we have explicitly write the css property for differnt browsers - but for styled comp - we can write standard css and the rest is handled by the library.
* 

---

<a name="ref"></a><h2>REFS/ FORWARD REFS / USEREF</h2>
---
<br>

* Refs make it possible to access DOM nodes directly within the react component,



### REF FORWARDING:
* It is a technique to pass a  ref through a component to one of its children.
* It is done by using the React.forwardRef function - which revieves a component as an input.
* Every func comp recieves props by default as a parameter , but when we use createRef - we can access the ref as a second attribute
* The "ref" parameter points to the value of the ref attribute of the parent comp.

For example: We have a ref defined in parent component - on click of a button in parent component we want the child input to be focused



```FRInput.js```  --> child comp 
```javascript
import React from 'react'

const FRInput = React.forwardRef((props, ref) => {
	return (
		<div>
      <input type="text" ref={ref} />
		</div>
	)
})

export default FRInput
```


```FRParentInput.js``` 

```javascript
import React, { Component } from 'react'
import FRInput from './FRInput'

export class FRParentInput extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }

  clickHandler = () => {
    this.inputRef.current.focus()
  }

	render() {
		return (
			<div>
        <FRInput ref={this.inputRef} />
        <button onClick={this.clickHandler}>Focus Input</button>
			</div>
		)
	}
}

export default FRParentInput
```

```App.js```

```javascript
import FRParentInput from './components/FRParentInput'


class App extends Component {
	render() {
		return (
			<div className="App">
				<FRParentInput />
			</div>
		)
	}
}

export default App
```


#### Summary:

> The parent comp creates a ref (React.createRef) and attaches it to the child comp.

> The child comp recieves the ref as prop and attached it to the native "input" element - such that the parent can now access the native input element.

> The child comp forwards the ref from parent to the native inp element.

> We can use ref forwarding while dealing with HOC or external library in react.


---

<a name="cvu"></a><h2>CONTROLLED VS UNCONTROLLED COMPONENTS</h2>
---
<br>

* Uncontrolled components are those components which are not controlled by React state, and and are handled by the DOM (Document Object Model). So in order to access any value that has been entered we take the help of refs.
* The main problem in uncontrolled components is that the values are not updated automatically.

```Uncontrolled.jsx```
```jsx
import React from "react";

export default function Uncontrolled() {
  let name = React.createRef();
  let age = React.createRef();

  const submit = () => {
    console.log(name.current.value);
    console.log(age.current.value);
  };
  return (
    <>
      <div>Uncontrolled</div>
      <input type="text" placeholder="name" ref={name} />
      <input type="text" placeholder="age" ref={age} />
      <button onClick={submit}>Submit</button>
    </>
  );
}

```

* Controlled Components are those in which form’s data is handled by the component’s state. It takes its current value through props and makes changes through callbacks like onClick, onChange, etc.

```Controlled.jsx```
```jsx
import { useState } from "react";

export default function Controlled() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit() {
    console.log("Email value: " + email);
    console.log("Password value: " + password);
  }
  return (
    <>
      <div>Controlled</div>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

```

#### KEY DIFFERENCES:
* In a controlled component react, state handles all the form data, whereas, in an uncontrolled component, the HTML form element data is managed by only the DOM.
* If you are using a controlled component, you are in control of your form input values. The developer can decide what to insert or not and where to insert it.
* It is a must to use react state in a controlled component to handle the dynamic form data. It is optional for the uncontrolled component to have a state, but it must use react Ref.
* Controlled components are predictable since the component manages the state of the form elements.
* Because the form elements may change or be impacted by external sources over the lifespan of a component, uncontrolled components are not predictable.
* You can efficiently perform validation tests on each keystroke the user makes by using controlled components. Whatever alters the form components is irrelevant since their values are secure in our local state, where we carry out the validation.
* You can perform validation on the input data only after the form is submitted in the uncontrolled components in react.


[CREATEREF VS USEREF](https://www.geeksforgeeks.org/difference-between-useref-and-createref-in-reactjs/)

[SCALERS BLOG](https://www.scaler.com/topics/controlled-and-uncontrolled-components-in-react/)

---

<a name="rf"></a><h2>REACT PERFORMANCE USEMEMO VS USECALLBACK VS REACT.MEMO</h2>
---
<br>




---

<a name="pc"></a><h2>PURE COMPONENTS / MEMO</h2>
---
<br>




---

<a name="chook"></a><h2>CUSTOM HOOKS</h2>
---
<br>

* Custom Hooks are basically Javascript functions - whose name starts with "use". 
* Custom Hooks can call other hooks if required.
* We mainly use Custom Hooks to share logic between two or more components - Alternative to HOC & render props.
* We can build our own custom hooks by extracting component logic into resusable functions.

```useDocumentTitle Custom Hook```

* The example is that we have two files DocTitleOne & DocTitleTwo - so these are two components which have the same logic as to that they are updating the document title by a counter hence this is reusable logic and we can extract it into a **custom hook**.

* Example Video : [useDocumentTitle Hook](https://www.youtube.com/watch?v=4yp6T-hF5ZY&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=74)
* In the below example the reference to the count variable are different - so none of them are effected.


```DocTitleOne.js```

```javascript
import React, {useState} from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle';

function DocTitleOne() {
  const [count, setCount] = useState(0)
  useDocumentTitle(count)

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count - {count}</button>
    </div>
  )
}

export default DocTitleOne
```


```DocTitleTwo.js```

```javascript
import React, {useState} from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle';

function DocTitleTwo() {
  const [count, setCount] = useState(0)
  useDocumentTitle(count)
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count - {count}</button>
    </div>
  )
}

export default DocTitleTwo
```

``` useDocumentTitle.js```

```javascript
import {useEffect} from 'react'

function useDocumentTitle(count) {
  useEffect(() => {
    document.title = `Count ${count}`
  }, [count])
}

export default useDocumentTitle
```


[YT](https://www.youtube.com/watch?v=l-s9MgoMwTI&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=73)


---

<a name="iloop"></a><h2>INFINITE LOOP IN REACT</h2>
---
<br>

### POTENTIAL WAYS TO CREATE AN INFINITE LOOP IN REACT

* Updating the state inside the render: If you update the state directly inside your render method or a body of a functional component, it will cause an infinite loop.
   
```javascript
   function App() {
  const [count, setCount] = useState(0);

  setCount(1); // infinite loop

  return ...
}
```
 
### FIX:
We have to use useEffect with an empty array as a dependency.

* Incorrectly set event handlers : We need to provide a function to the onClick, not the **result of the function execution.** By executing a function before setting a handler, you update a state inside the render, which causes an infinite loop.

```javascript
export default function App() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={setCount(1)}>Submit</button> // infinite loop
  );
}
```

### FIX:
Set a function to onClick event.

```javascript
export default function App() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(1)}>Submit</button> // infinite loop
  );
}
```

[BLOG](https://alexsidorenko.com/blog/react-infinite-loop/)

---



<a name="frag"></a><h2>Why fragments are better than container divs?</h2>
---
<br>

Below are the list of reasons to prefer fragments over container DOM elements,

* Fragments are a bit faster and use less memory by not creating an extra DOM node. This only has a real benefit on very large and deep trees.
* Some CSS mechanisms like Flexbox and CSS Grid have a special parent-child relationships, and adding divs in the middle makes it hard to keep the desired layout.
* The DOM Inspector is less cluttered.

[REF](https://github.com/sudheerj/reactjs-interview-questions#why-fragments-are-better-than-container-divs)

---


<a name="rsrl"></a><h2>REACT SUSPENCE VS REACT LAZY , CODE SPLITTING</h2>
---
<br>

* React apps generally uses bundlers like webpack to efficiently bundle our code into a minified format- but this doesn't always guarantee  optimization

To reduce code time:

* Code-Splitting is a feature supported by Webpack and Browserify, which can create multiple bundles that can be dynamically loaded at runtime.
* One part of this code splitting is to lazy load our apps - react uses lazy and suspense to lazy load our apps
* React.lazy is used to lazy load our components - and while these are loading we can use react.suspense to show UI (like Loading text ...)
* React.suspense has a attribute fallback which can take the any custom comp that we need to display as the UI.

#### ROUTE-BASED CODE SPLITTING:
* Whenever our app loads all our routes load at once- but we can load any specific route only when an user navigates to that same.
* We can lazy load our components and wrap our routes in React.suspense

```javascript

```


[REF](https://www.youtube.com/watch?v=IBrmsyy9R94)

---

<a name="undef"></a><h2>CAN WE RETURN UNDEFINED FROM AN RENDER?</h2>
---
<br>

### 

* 
   
```javascript

```


[REF](https://www.youtube.com/watch?v=IBrmsyy9R94)

---


<a name="conba"></a><h2>CONTEXT API BASIC USE</h2>
---
<br>

### 

* 
   
```javascript

```


[REF]([https://www.youtube.com/watch?v=IBrmsyy9R94](https://www.youtube.com/watch?v=CI7EYWmRDJE&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=58))

---

<a name="ts"></a><h2>TREE SHAKING</h2>
---
<br>

### 

* 
   
```javascript

```


[REF]([https://www.youtube.com/watch?v=IBrmsyy9R94](https://www.youtube.com/watch?v=CI7EYWmRDJE&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=58))

---



*
| 9  |[SHADOW DOM](#fccc)|✔
| 10  |[LAZY IMPORT, DYNAMIC IMPORT](#fccc)|✔
| 11  |[STATELESS COMPONENTS](#fccc)|
| 12  |[PROP TYPES](#fccc)|
| 14  |[SERVER SIDE RENDERING OF COMPONENTS](#fccc)|
| 16  |[SIGNIFICANCE OF "KEY" ATTRIBUTE](#fccc)|
| 17  |[DYNAMIC ROUTING](#fccc)|
| 19  |[CONTEXT API VS REDUX](#fccc)|
*
