import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Hello,HelloWorld} from './Frstcpn/FrstCode';
import TextField from './Forms/form'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hello  la9ab='goat'/>
    {/* <HelloWorld la9ab='lmhyb'/> */}
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
