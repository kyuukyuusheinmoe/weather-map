import React from "react";
import reactDom from "react-dom";
import App from "./src/App"
import  {store}  from './src/redux/store'
import { Provider } from 'react-redux'

reactDom.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));