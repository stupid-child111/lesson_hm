import React from "react";
import { createRoot } from 'react-dom/client'

function App(){
  //相当于 h
  return React.createElement(
    'div',
    {id: 'app'},
    'Hello React 18'
  )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);