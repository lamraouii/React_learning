import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Hello,HelloWorld} from './Frstcpn/FrstCode';
import TextField from './Forms/form'
import Fawakeh from './Fruits/fruits.jsx'   // bima ana lcomp 3ndo export default y3ni w7da, kyimporteha wkha tsmiha smya mkhtalfa 3la dual lfunction ooriginl

const root = ReactDOM.createRoot(document.getElementById('root'));
const fruitsArray = [
  'apple',
  'bananas',
  'lemon',
  'strawberry',
  'tmeer'
]
root.render(
  <React.StrictMode>
    {/* here;s teh frst container */}
    <Hello  la9ab='goat'/>
    {/* <HelloWorld la9ab='lmhyb'/> */}
    
    
    {/* hers's the fruits container */}
    <Fawakeh fruits={fruitsArray}/>


    
    {/* here the form container */}
    <TextField inputName='smya' inputLabel='enter smitk'>
      lorem
    </TextField>
    <TextField inputName='la9ab' inputLabel='enter knitk'/>
    
  </React.StrictMode>
);









// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
