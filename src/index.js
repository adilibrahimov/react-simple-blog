import React from 'react';
import ReactDOM from 'react-dom';
//import {BrowserRouter as Router} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import App from "./Blog/App";
//import Testts from './Testts';
//import App2 from './App2';
// import App1 from './App1';
//const App = React.lazy(() => import('./RecipeSearchProject/App'));
//import ProductProvider from "./Commerce/Context";

// import { prependOnceListener } from 'cluster';

  
 //<Testts />
// <ProductProvider>
  //<Router>
 // <App1/>
 // </Router>
 // </ProductProvider> 

//  <ProductProvider>
//     <Router>
//         <App2 />
//     </Router>
//  </ProductProvider>

 //<Testts />
ReactDOM.render(
  

    <App />
  
  
  ,
  document.getElementById('root')
  );
  







 


    
  
  
 

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );


//ReactDOM.render(<Comment/>,  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
