
import { createRoot } from "react-dom/client";
const root=createRoot(document.getElementById("root"));
/*const h1=document.createElement("h1");
h1.textContent="Hello React!";
const id=document.getElementById("root");
id.appendChild("h1");=====imperative*/
//const name="Hindu";
root.render(
  /*<div>
  <h1 className="head">Hiii</h1>
  <h1>Hello React! {name}{2+2}</h1>
  <h1>Hello React!</h1>
  </div>
  );//declarative*/
<div className="card">
<nav className="navbar">
  <img src="src/assets/react.svg"/>
  <h1 className="heading">Rules of JSX</h1>
</nav>
<ul>
  <li>MUST HAVE ENCLOSE JSX IN A ROOT ELEMENT</li>
  <li>CLOSE THE TAGS PROPERLY</li>
  <li>USE CLASSNAME FOR CSS CLSS, AS CLASS IS RESERVED WORD INJAVASCRIPT</li>
  <li>USE CAMELCASE FOR ATTRIBUTES</li>
  <li>USE FLOWER BRACES FOR JS</li>
</ul>
</div>
);
