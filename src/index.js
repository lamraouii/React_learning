import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Hello,HelloWorld} from './Frstcpn/FrstCode';
import TextField from './Forms/form'
import Fawakeh from './Fruits/fruits.jsx'   // bima ana lcomp 3ndo export default y3ni w7da, kyimporteha wkha tsmiha smya mkhtalfa 3la dual lfunction ooriginl
import Counter_C from './counter-state/counter-class.jsx'
import Event from './Events/Event.jsx';
import Counter_F from './counter-state/counter-fct.jsx';

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
    <br></br>
    
    {/* hers's the fruits container */}
    <Fawakeh fruits={fruitsArray}/>
    <br></br>
    <br></br>
    <br></br>

    
    {/* here the form container */}
    <TextField inputName='smya' inputLabel='enter smitk'>
      lorem
    </TextField>
    <TextField inputName='la9ab' inputLabel='enter knitk'/>
    <br></br>

    {/* here' the counter class container */}
    <Counter_C />
    <br></br>

    {/* here' the Event container */}
    <Event />
    <br></br>

    {/* here' the COunter function container */}
    <Counter_F initialVal={2} step={5}  />

  </React.StrictMode>
);









// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
