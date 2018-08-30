import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./view/App";
import '../bootstrap.css'
import store from "./store";

render(
    <Provider store={store}>
        <Router>
            <Route path="/" render={(props) => <App {...props} />} />
        </Router>
    </Provider>,
    document.getElementById("app")
);
