import React, { Component } from "react";
import {
    Switch,
    Route,
    Redirect,
    Router,
    Link
} from "react-router-dom";
import styles from './styles.css';
import { connect } from "react-redux";
import { hot } from "react-hot-loader";

const HelloWorld = () => {
    return (
        <div>Hello World</div>
    )
}

export class App extends Component {

    render() {
        return (<div id="layout" className={styles.appContainer} >
            <Switch>
                <Route exact path="/" component={HelloWorld} />
            </Switch>
        </div>
        );
    }
}

export default connect(({ }) => ({

}), {}
)(hot(module)(App));