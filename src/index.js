import React from 'react';
import './index.css';
import Main from './main';
import reportWebVitals from './reportWebVitals';
import { render } from "react-dom";


const rootElement = document.getElementById("root");

render(<Main />, rootElement)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();