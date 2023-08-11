import React from 'react';
import ReactDOM from 'react-dom'; // eslint-disable-line
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client';
const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);

// ReactDOM.render(
 
//     <App />
  
//   document.getElementById('root')
// );
